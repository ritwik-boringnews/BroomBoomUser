import React, {useEffect} from "react";
import {View, Text, Button} from "react-native";
import OTPTextView from "../../Components/AppOtpInput";
import Api from "../../Services";
import {TextInput, ActivityIndicator} from "react-native-paper";
import {useDispatch} from "react-redux";
import {notify, login} from "../../../Redux/Actions";
const Otp = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [otp, setOtp] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const {mobile} = route.params;
  useEffect(() => {
    if (otp.length === 4) {
      onSubmitOtp();
    }
  }, [otp]);
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
        navigation.navigate("DrawerNavigator", {otp: otp});
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

  return (
    <View style={{marginTop: 30, paddingHorizontal: 30}}>
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
        {isLoading && (
          <>
            <ActivityIndicator animating={true} color={"red"} />
            <Text style={{fontSize: 14, fontWeight: "500"}}>
              Auto verifying
            </Text>
          </>
        )}
        {/* <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'right',
            color: 'black',
          }}>
          Resend OTP in 10s
        </Text> */}

        {/* <Button onPress={onSubmitOtp} title="Verify" color="#F5C001" style={{}}/> */}
      </View>
    </View>
  );
};

export default Otp;
