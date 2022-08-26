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
import {notify} from "../../../Redux/Actions";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import BackIcon from "react-native-vector-icons/AntDesign";
const Profile = () => {
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: "#fff",
      paddingVertical: 15,
    },
    box: {
      borderBottomWidth: 1,
      borderBottomColor: "#BDBDBD",
      paddingVertical: 5,
      marginVertical: 4,
    },
    input: {
      fontSize: 16,
      fontWeight: "700",
      paddingHorizontal: 0,
      paddingVertical: 6,
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
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    setIsLoading(true);
    const getProfile = async () => {
      try {
        const response = await Api.get(`/user/get-user-details`);
        if (response.status === 1) {
          setUserDetails(response.data);
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
    getProfile();
    setIsLoading(false);
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await Api.update("/user/update-user-details", {
        name: userDetails.name,
        email: userDetails.email,
        gender: userDetails.gender,
        dob: datee,
      });
      if (response.status === 1 && response.data) {
        dispatch(
          notify({
            message: "User updated successfully",
            notifyType: "success",
          }),
        );
        setUserDetails({
          name: response.data?.name,
          email: response.data?.email,
          gender: response.data?.gender,
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

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{flexDirection: "row"}}>
          <BackIcon
            name="arrowleft"
            color="black"
            size={20}
            style={{marginBottom: 10}}
            onPress={() => navigation.goBack()}
          />
          <View style={{width: "80%"}}>
            <Text
              style={{
                marginLeft: 5,
                color: "black",
                fontSize: 18,
                marginBottom: 20,
                textAlign: "center",
              }}>
              Profile Details
            </Text>
          </View>
        </View>
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
        <Text style={styles.h1}>Mobile No.</Text>
        <TextInput
          style={styles.input}
          value={userDetails?.mobile?.toString()}
          keyboardType="numeric"
          disabled={true}
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.h1}>Email ID</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: "auto",
            alignItems: "center",
            width: "100%",
            marginRight: "auto",
          }}>
          <TextInput
            style={styles.input}
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
        <TextInput
          style={styles.input}
          value={userDetails?.gender}
          keyboardType="text"
          onChangeText={e =>
            setUserDetails({
              ...userDetails,
              gender: e,
            })
          }
        />
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

export default Profile;
