import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
} from "react-native";
import React from "react";
import styles from "./styles";
import CopyIcon from "react-native-vector-icons/Feather";
import GiftIcon from "react-native-vector-icons/Feather";
import Api from "../../Services";
import Clipboard from "@react-native-clipboard/clipboard";
import BackIcon from "react-native-vector-icons/AntDesign";
import QuestionIcon from "react-native-vector-icons/AntDesign";
const ReferAndEarn = ({navigation}) => {
  const [referralCode, setReferralCode] = React.useState("");
  const SHARE_MSG = `Hurry! You're invited to be a Broomboom User.Please use the below coupon code during registration and earn broomboom coins.Referral Code: ${referralCode}.

  \n\n
  Download the app from here:
  https://play.google.com/store/apps/details?id=com.broomboom.user
  `;

  React.useEffect(() => {
    getReferralCode();
  }, []);
  
  const getReferralCode = async () => {
    try {
      const response = await Api.get("/refer/get-refer-token");
      console.log(response);
      if (response.status === 1) {
        setReferralCode(response.data.referral_code);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const copyToClipboard = async () => {
    Clipboard.setString(SHARE_MSG);
  };

  const onShare = async () => {
    try {
      await Share.share({
        message: SHARE_MSG,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: "white"}}>
      <View style={{flexDirection: "row", marginHorizontal: 18, marginTop: 10}}>
        <BackIcon
          name="arrowleft"
          color="black"
          size={20}
          style={{marginBottom: 10}}
          onPress={() => navigation.goBack()}
        />
        {/* <View style={{flexDirection: "row"}}>
          <Text>Help</Text>
          <QuestionIcon name="questioncircleo" size={18} />
        </View> */}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>
          INVITE YOUR FRIEND AND EARN UPTO 51 BROOMBOOM COINS
        </Text>
        <Image
          source={{
            uri: "https://broomboomimages.s3.ap-south-1.amazonaws.com/1657284315253_referAndEarn.png",
          }}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.subTitle}>
          COPY & SEND THE CODE TO YOUR FRIEND TO REGISTER AND EARN NOW
        </Text>
        <View style={styles.copyCodeContainer}>
          <Text style={styles.copyCodeText}>{referralCode}</Text>
          <TouchableOpacity onPress={copyToClipboard}>
            <CopyIcon name="copy" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.inviteTextContainer}>
          <View style={styles.row}>
            <GiftIcon name="gift" size={20} color="#000" />
            <Text style={styles.inviteText}>Invite Friends to Broomboom</Text>
          </View>
          <TouchableOpacity onPress={onShare}>
            <Text style={styles.link}>Invite</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 30}}>
          <Text style={styles.stepsTitle}>Steps</Text>
          <View style={styles.stepsBorder1} />
          <View style={styles.row}>
            <View style={styles.stepsCounterContainer}>
              <Text style={styles.stepsCounterText}>1</Text>
            </View>
            <View>
              <Text style={styles.stepsCounterTitle}>
                YOUR FRIEND REGISTERED WITH US
              </Text>
              <Text style={styles.mutedText}>YOUR EARNING ₹0 </Text>
            </View>
          </View>
          <View style={styles.stepsBorder2} />
          <View style={styles.row}>
            <View style={styles.stepsCounterContainer}>
              <Text style={styles.stepsCounterText}>2</Text>
            </View>
            <View>
              <Text style={styles.stepsCounterTitle}>
                YOUR FRIEND COMPLETES FIRST 3 RIDES
              </Text>
              <Text style={styles.mutedText}>YOU EARN 51 BROOMBOOM COINS</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReferAndEarn;
