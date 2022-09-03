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
import {updateUser} from "../../../Redux/Actions";

const AddReferral = ({navigation}) => {
  const [referralCode, setReferralCode] = React.useState("");
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const verifyReferralCode = async () => {
    try {
      const response = await Api.post("/user/add-referred-by", {
        referral_code: referralCode,
      });
      console.log("response", response);
      if (response.status === 1) {
        dispatch(
          notify({
            type: "success",
            message: "You have been successfully referred",
          }),
        );
        updateUserInStore();
        return;
      }
      throw new Error(response.message);
    } catch (error) {
      dispatch(notify({type: "error", message: error.message}));
      console.log(error);
    }
  };

  const skipReferral = async () => {
    try {
      const response = await Api.post("/user/update_user_referral_status");
      console.log("response", response);
      if (response.status === 1) {
        updateUserInStore();
        navigation.jumpTo("Booking");
        return;
      }
      throw new Error(response.message);
    } catch (error) {
      dispatch(notify({type: "error", message: error.message}));
      console.log(error);
    }
  };

  const updateUserInStore = () => {
    dispatch(updateUser({...user, referral_status: 1}));
  };

  return (
    <KeyboardAvoidingView
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
          />
          <TouchableOpacity onPress={verifyReferralCode}>
            <Text style={styles.inputbtn}>Apply</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            borderWidth: 1,
            paddingHorizontal: 50,
            paddingVertical: 10,
          }}
          onPress={skipReferral}>
          <Text style={styles.inputbtn}>Skip for later</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddReferral;
