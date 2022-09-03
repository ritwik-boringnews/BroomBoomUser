import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  ActivityIndicator,
  Checkbox,
} from "react-native-paper";

import Api from "../../Services";
import {useDispatch} from "react-redux";
import {notify} from "../../../Redux/Actions";

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(true);
  const [mobile, setmobile] = useState("");

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await Api.post(`/user/register`, {
        mobile: mobile,
      });
      if (response.status === 1) {
        navigation.navigate("Otp", {mobile: mobile});
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
      console.log('error',error);
    }
    setIsLoading(false);
  };

  return (
    <View
      style={{
        paddingHorizontal: 30,
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "white",
      }}>
      <View
        style={{
          marginTop: 35,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
          }}>
          Enter Your Mobile Number
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
            marginBottom: 35,
          }}>
          OTP will be sent to this number
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            width: "100%",
            borderRadius: 5,
            borderWidth: 1,
            paddingHorizontal: 15,
            // paddingVertical: 10,
          }}>
          <Image
            source={require("../../../assets/india-flag.png")}
            style={{height: 30, width: 30}}
          />
          {/* <IndiaFlagIcon style={{height: 30, width: 30}} /> */}
          <Text
            style={{
              color: "#000",
              fontWeight: "600",
              marginHorizontal: 10,
              fontSize: 16,
            }}>
            +91
          </Text>
          <TextInput
            onChangeText={text => {
              setmobile(text);
            }}
            value={mobile}
            placeholder="Enter your mobile number"
            maxLength={10}
            style={{
              borderWidth: 0,
              margin: 0,
              padding: 0,
              // marginTop: 20,
              fontSize: 16,
              paddingVertical: 15,
            }}
            keyboardType="number-pad"
          />
        </View>
        {/* <PhoneInput
          ref={inputRef}
          initialCountry="in"
          autoFormat={true}
          autoFocus
          placeholder="Enter phone number"
          containerStyle={{
            backgroundColor: "#fff",
            width: "100%",
            borderRadius: 5,
            borderWidth: 1,
          }}
          textContainerStyle={{
            backgroundColor: "#fff",
            borderRadius: 5,
          }}
          value={mobile}
          onChangeText={text => setmobile(text)}
        /> */}
      </View>
      <View
        style={{
          marginBottom: 30,
        }}>
        <View
          style={{
            flexDirection: "row",
          }}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
            color={"#F5C001"}
          />
          <Text style={{marginBottom: 15}}>
            By continuing, you agree to the <Text>Terms {""}</Text>
            <Text>& Conditions {""}</Text>
            <Text style={{textAlign: "left"}}>and {""}</Text>
            <Text>privacy policy {""}</Text>
            of BroomBoom
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 50,
            backgroundColor:
              isLoading || mobile.length !== 10 || !checked
                ? "#ddd"
                : "#F5C001",
          }}
          disabled={isLoading || mobile.length !== 10 || !checked}
          onPress={onSubmit}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                textAlign: "center",
                color: "#000",
                fontWeight: "500",
                fontSize: 16,
              }}>
              Send OTP
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
