import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Api from "../../Services";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import {notify, updateUser} from "../../../Redux/Actions";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import BackIcon from "react-native-vector-icons/AntDesign";
import AppDocumentPicker from "../../Components/AppDocumentPicker";
import {RadioButton, RadioGroup} from "react-native-ui-lib";

const Profile = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({});
  const [image, setImage] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await Api.get(`/user/get-user-details`);
      if (response.status === 1) {
        setUserDetails({
          ...response.data,
          image: response.data?.image?.split("_")[1],
        });
        setDate(response.data.dob);
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

  const handleUpdate = async () => {
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
  console.log(userDetails);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 25,
          paddingTop: 20,
          backgroundColor: "black",
        }}>
        <BackIcon
          name="arrowleft"
          color="white"
          size={20}
          style={{marginBottom: 10}}
          onPress={() => navigation.goBack()}
        />
        <View style={{width: "80%"}}>
          <Text
            style={{
              marginLeft: 5,
              color: "white",
              fontSize: 18,
              marginBottom: 20,
              textAlign: "center",
              fontWeight: "400",
            }}>
            Profile
          </Text>
        </View>
      </View>

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
          value={userDetails?.mobile?.toString()}
          keyboardType="numeric"
          // disabled={true}
          // editable={false}
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
        <RadioGroup
          initialValue={userDetails?.gender}
          onValueChange={value =>
            setUserDetails({
              ...userDetails,
              gender: value,
            })
          }>
          <View style={{flexDirection: "row"}}>
            <RadioButton
              value={"male"}
              label={"Male"}
              color={"#F5C001"}
              size={20}
              containerStyle={{marginRight: 20}}
            />
            <RadioButton
              value={"female"}
              label={"Female"}
              color={"#F5C001"}
              size={20}
              containerStyle={{marginRight: 20}}
            />
            <RadioButton
              value={"others"}
              label={"Others"}
              color={"#F5C001"}
              size={20}
            />
          </View>
        </RadioGroup>
      </View>

      <View style={styles.box}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text>DOB</Text>

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
        <Text style={styles.h1}>Upload Image</Text>
        <AppDocumentPicker
          title={userDetails.image || "Upload"}
          buttonStyle={{
            color: "white",
            backgroundColor: "#347EEA",
            justifyContent: "center",
            flexDirection: "row",
            padding: 10,
            borderRadius: 50,
          }}
          onDocumentPicked={uri => {
            setUserDetails({...userDetails, image: uri.Location.split("_")[1]});
            setImage(uri.Location);
          }}
        />
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
          backgroundColor: "#F5C001",
        }}
        onPress={handleUpdate}>
        <Text style={{color: "black", fontWeight: "bold"}}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    paddingVertical: 5,
    marginVertical: 4,
    paddingHorizontal: 20,
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
    fontWeight: "500",
    paddingBottom: 4,
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
