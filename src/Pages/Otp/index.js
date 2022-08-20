import { View, Text ,Button} from 'react-native'
import React from 'react'
import OTPTextView from '../../Components/AppOtpInput';
const Otp = ({navigation,route}) => {
console.log(route.params.mobile)
  const [otp, setOtp] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  

  const onSubmitOtp = async () => {
    setLoading(true);
   
    setLoading(false);
  };

  return (
    <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Enter OTP
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "center" }}>
        We have sent an OTP to 8961458521
      </Text>
      
      <OTPTextView inputCount={4} handleTextChange={(e) => setOtp(e)} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          width: "100%",
        }}
      >
        {isLoading && (
          <>
            <ActivityIndicator animating={true} color={"red"} />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              Auto verifying
            </Text>
          </>
        )}
        <Text style={{ fontSize: 14, fontWeight: "500", textAlign: "right" }}>
          Resend OTP in 10s
        </Text>
        <Button onPress={onSubmitOtp} title="Verify">next</Button>
      </View>
    </View>
  )
}

export default Otp


