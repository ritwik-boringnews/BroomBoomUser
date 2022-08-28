import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import BackIcon from "react-native-vector-icons/AntDesign";
const HelpAndSupport = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
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
          <View style={{width: "100%"}}>
            <Text
              style={{
                marginLeft: 5,
                color: "white",
                fontSize: 18,
                marginBottom: 20,
                textAlign: "center",
                fontWeight: "400",
              }}>
              Help and Support
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 40, paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: "row",
            // marginTop: 50,
            justifyContent: "space-between",
            width: "100%",
          }}>
          <TouchableOpacity
            style={{justifyContent: "center", alignItems: "center"}}
            onPress={() => navigation.navigate("Faq")}>
            <Image
              source={require("../../../assets/help1.png")}
              style={{height: 45, width: 45, marginBottom: 5}}
            />

            <Text style={{textAlign: "center", color: "#000"}}>FAQs{"\n"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: "center", alignItems: "center"}}
            onPress={() => navigation.navigate("termsAndConditions")}>
            <View
              style={{
                backgroundColor: "#F5C001",
                borderRadius: 50,
                paddingHorizontal: 8,
                paddingVertical: 5,
              }}>
              <Image
                source={require("../../../assets/help3.png")}
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 5,
                  resizeMode: "contain",
                }}
              />
            </View>
            <Text style={{textAlign: "center", color: "#000"}}>
              Terms & Conditions{"\n"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: "center", alignItems: "center"}}
            onPress={() => Linking.openURL(`tel:${8478056064}`)}>
            <Image
              source={require("../../../assets/help3.png")}
              style={{height: 45, width: 45, marginBottom: 5}}
            />

            <Text style={{textAlign: "center", color: "#000"}}>
              Contact {"\n"} Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: "auto",
          width: "100%",
          marginBottom: 30,
        }}>
        <Text
          style={{
            fontSize: 14,
            textAlign: "center",

            color: "black",
          }}>
          For more information read
          <Text> Terms & Conditions </Text>
          and <Text> Privacy Policies </Text>
          of BroomBoom User
        </Text>
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/help2.png')}
            style={{height: 45, width: 45, marginBottom: 5}}
          />
          <Text style={{textAlign: 'center'}}>Payment {'\n'}& Wallets </Text>
        </View> */}
      </View>
    </View>
  );
};

export default HelpAndSupport;
