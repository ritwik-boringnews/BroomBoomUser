import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Api from "../../Services";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import {notify, updateUser} from "../../../Redux/Actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import AppDocumentPicker from "../../Components/AppDocumentPicker";
import BackButtonPage from "../../Components/BackButtonPage";
import {primaryColor} from "../../Constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import {validateEmail} from "../../Utility/helper";
import AppRadioButton from "../../Components/AppRadioButton";
import useContactPermission, {
  PERMISSIONS_TYPES,
} from "../../Hooks/useContactPermission";

const Profile = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({});
  const [image, setImage] = useState("");
  const navigation = useNavigation();
  const {user} = useSelector(state => state.auth);

  useEffect(() => {
    getProfile();
  }, []);

  const uploadPhoneContacts = async () => {
    const environment = process.env.NODE_ENV || "development";
    let payload = [];
    if (environment === "production") {
      await Contacts.getAll()
        .then(contacts => {
          // work with contacts
          contacts.map(phone => {
            payload.push({
              name: phone.displayName || phone.givenName || "",
              phone: parseInt(phone?.phoneNumbers[0]?.number) || 0,
              user_id: user.id,
            });
          });
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      payload = [{name: "xyz", phone: 1234, user_id: user.id}];
    }
    try {
      const response = Api.post("/user/save_phone_contactss", {
        phoneContactsList: payload,
      });

      if (response.status === 1 && response.result) {
        dispatch(updateUser(response.result));
      }
    } catch (error) {}
  };

  const getProfile = async () => {
    try {
      const response = await Api.get(`/user/get-user-details`);
      if (response.status === 1) {
        setUserDetails({
          ...response.data,
          image: response.data?.image?.split("_")[1],
        });
        setDate(response.data.dob);
        if (response.data.contact_upload_status === 1) {
          const permissionG = await useContactPermission();
          if (permissionG === PERMISSIONS_TYPES.GRANTED) {
            uploadPhoneContacts();
          }
        }
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(
        notify({
          message: error.message || "Something went wrong",
          notifyType: "error",
        }),
      );
    }
  };

  const isValidated = () => {
    if (!validateEmail(userDetails.email)) {
      dispatch(
        notify({
          message: "Please provide a valid email address",
          notifyType: "error",
        }),
      );
      return false;
    }
    return true;
  };

  const handleUpdate = async () => {
    if (isValidated())
      try {
        const response = await Api.update("/user/update-user-details", {
          name: userDetails.name,
          email: userDetails.email,
          gender: userDetails.gender,
          dob: datee,
          image: image,
        });
        if (response.status === 1 && response.data) {
          dispatch(
            notify({
              message: "User details updated successfully",
              notifyType: "success",
            }),
          );
          dispatch(updateUser(response.data));
          setUserDetails({
            ...userDetails,
            name: response.data?.name,
            email: response.data?.email,
            gender: response.data?.gender,
            image: response.data?.image?.split("_")[1],
          });
          setDate(response.data?.dob);
          navigation.openDrawer();
        } else {
          dispatch(
            notify({
              message: response.message || "Something went wrong",
              notifyType: "error",
            }),
          );
        }
      } catch (error) {
        dispatch(
          notify({
            message: error.message || "Something went wrong",
            notifyType: "error",
          }),
        );
      }
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datee, setDate] = useState(null);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = d => {
    setDate(d);
    hideDatePicker();
  };

  return (
    <BackButtonPage pageName="Profile" navigation={navigation}>
      <View style={styles.box}>
        <Text style={styles.h1}>Name</Text>
        <TextInput
          style={styles.input}
          value={userDetails?.name}
          keyboardType="text"
          onChangeText={e =>
            setUserDetails({
              ...userDetails,
              name: e,
            })
          }
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.h1}>Mobile No</Text>
        <TextInput
          style={{
            fontSize: 16,
            fontWeight: "700",
            paddingHorizontal: 0,
            paddingVertical: 5,
            color: "#BFBDB0",
            alignItems: "center",
          }}
          placeholderTextColor="#999"
          value={userDetails?.mobile?.toString()}
          keyboardType="numeric"
          disabled={true}
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.h1}>Email ID *</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: "700",
              paddingHorizontal: 0,
              paddingVertical: 5,
              color: "#1f1f1f",
              alignItems: "center",
              width: "100%",
            }}
            placeholderTextColor="#999"
            value={userDetails?.email}
            keyboardType="text"
            onChangeText={e =>
              setUserDetails({
                ...userDetails,
                email: e,
              })
            }
          />
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.h1}>Gender</Text>
        <View style={{flexDirection: "row"}}>
          <AppRadioButton
            label={"Male"}
            value={"male"}
            onValueChange={value =>
              setUserDetails({
                ...userDetails,
                gender: value,
              })
            }
            style={{textAlign: "center"}}
            isSelected={userDetails?.gender === "male"}
          />
          <AppRadioButton
            label={"Female"}
            value={"female"}
            onValueChange={value =>
              setUserDetails({
                ...userDetails,
                gender: value,
              })
            }
            isSelected={userDetails?.gender === "female"}
          />
        </View>
      </View>

      <View style={styles.box}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.h1}>DOB</Text>
          <Text style={styles.input}>
            {datee ? moment(datee).format("ll") : null}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={styles.box}>
        <View style={{flexDirection: "row"}}>
          <Text style={[styles.h1, {flex: 1}]}>Upload Image</Text>
          <AppDocumentPicker
            onDocumentPicked={uri => {
              setUserDetails({
                ...userDetails,
                image: uri.Location.split("_")[1],
              });
              setImage(uri.Location);
            }}
          />
        </View>
        {userDetails.image && (
          <View style={{flexDirection: "row"}}>
            <Icon name="paperclip" size={20} color="gray" />
            <Text style={{marginTop: 5, marginLeft: 10}}>
              {userDetails.image}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={{
          width: "90%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: "center",
          marginStart: 20,
          marginTop: 30,
          backgroundColor: primaryColor,
        }}
        onPress={handleUpdate}>
        <Text style={{color: "black", fontWeight: "bold"}}>Update</Text>
      </TouchableOpacity>
    </BackButtonPage>
  );
};

const styles = StyleSheet.create({
  box: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    paddingVertical: 5,
    marginVertical: 4,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  input: {
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 0,
    paddingVertical: 5,
    color: "#1f1f1f",
    alignItems: "center",
  },
  h1: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 4,
    color: "black",
  },
  para: {
    color: "#2F80ED",
    fontSize: 14,
    fontWeight: "500",
    alignItems: "center",
    marginRight: 8,
    textAlign: "center",
    justifyContent: "center",
  },
});
export default Profile;
