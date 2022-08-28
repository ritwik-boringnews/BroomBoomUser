import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import styles from "./styles";
import Api from "../../Services";
import {useDispatch, useSelector} from "react-redux";
import {notify} from "../../../Redux/Actions/notificationActions";
import {addReferToken} from "../../../Redux/Actions";

const AddReferral = ({navigation}) => {
  const [referralCode, setReferralCode] = React.useState("");
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const verifyReferralCode = async () => {
    dispatch(
      notify({type: "success", message: "You have been successfully referred"}),
    );
    dispatch(addReferToken());
    // try {
    //   const response = await Api.post("/user/add-referred-by", {
    //     referral_code: referralCode,
    //   });
    //   console.log("response", response);
    //   if (response.status === 1) {
    //     return;
    //   }
    //   throw new Error(response.message);
    // } catch (error) {
    //   dispatch(notify({type: "error", message: error.message}));
    //   console.log(error);
    // }
  };
  return (
    <KeyboardAvoidingView
      // style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      keyboardVerticalOffset={10}
      style={{flex: 1, position: "absolute"}}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello User!</Text>
        <Text style={styles.textP}>Have a Referral code?</Text>
        <Text style={styles.textP}>
          Get upto ₹100 as referral bonus. Bonus will be added into your wallet
          soon.
        </Text>
        <Image source={require("../../../assets/reward.png")} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter referral code"
            onChangeText={e => setReferralCode(e)}
            editable={!user?.refer_token_added}
          />
          <TouchableOpacity
            onPress={verifyReferralCode}
            disabled={user?.refer_token_added}>
            <Text style={styles.inputbtn}>Apply</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.btn}>
        <Text style={styles.centerText}>Next</Text>
      </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.btn}>
          <Text style={styles.centerText}>Skip Now</Text>
        </TouchableOpacity> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddReferral;
