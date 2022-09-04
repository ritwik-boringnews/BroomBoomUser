import React, {useEffect} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import OTPTextView from "../../Components/AppOtpInput";
import Api from "../../Services";
import {ActivityIndicator} from "react-native-paper";
import {useDispatch} from "react-redux";
import {notify, login} from "../../../Redux/Actions";
import { primaryColor } from "../../Constants";

const Otp = ({route}) => {
  const dispatch = useDispatch();
  const [otp, setOtp] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const {mobile} = route.params;
  const [counter, setCounter] = React.useState(60);

  useEffect(() => {
    if (otp.length === 4) {
      onSubmitOtp();
    }
  }, [otp]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const onSubmitOtp = async () => {
    setLoading(true);
    try {
      const response = await Api.post(`/user/verify-otp`, {
        otp: otp,
        mobile: route.params.mobile,
      });

      if (response.status === 1 && response.data) {
        console.log("data", response.data);
        dispatch(
          login({
            clientToken: response.data.token,
            user: response.data.user,
          }),
        );
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
    setLoading(false);
  };

  const resendOtp = async () => {
    setLoading(true);
    try {
      const response = await Api.post("/user/resend-otp", {
        mobile,
      });
      if (response.status === 1) {
        setCounter(60);
        dispatch(
          notify({
            type: "success",
            message: response.message,
            notifyType: "success",
          }),
        );
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({type: "error", message: error.message}));
    }
    setLoading(false);
  };

  return (
    <View style={{marginTop: 30, paddingHorizontal: 30, flex: 1}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "700",
          textAlign: "center",
          color: "black",
        }}>
        Enter OTP
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          textAlign: "center",
          color: "black",
        }}>
        We have sent an OTP to {mobile}
      </Text>

      <OTPTextView inputCount={4} handleTextChange={e => setOtp(e)} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          width: "100%",
        }}>
        {counter === 0 ? (
          <TouchableOpacity
            style={{
              backgroundColor: primaryColor,
              padding: 10,
              borderRadius: 50,
            }}
            onPress={resendOtp}>
            <Text style={{fontSize: 14, fontWeight: "500", color: "#000"}}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        ) : (
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              textAlign: "left",
              color: "#000",
            }}>
            Resend OTP in {counter}s
          </Text>
        )}
        {isLoading && (
          <>
            <ActivityIndicator animating={true} color={"red"} />
            <Text style={{fontSize: 14, fontWeight: "500", color: "black"}}>
              Auto verifying
            </Text>
          </>
        )}
      </View>
      <View
        style={{
          alignItems: "center",
          width: "120%",
          position: "absolute",
          bottom: 20,
        }}>
        <Image
          source={require("../../../assets/broomboomLogo.png")}
          style={{height: 140, width: 140, resizeMode: "contain"}}
        />
      </View>
    </View>
  );
};

export default Otp;
