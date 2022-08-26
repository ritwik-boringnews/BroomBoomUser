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

const HelpAndSupport = ({navigation}) => {
  return (
    <View
      style={{flex: 1, paddingHorizontal: 30, justifyContent: "space-between"}}>
      <View style={{alignSelf: "flex-start"}}>
        <View style={{paddingHorizontal: 30}}>
          {/* <View
          style={{
            width: '100%',

            borderRadius: 50,
            marginTop: 30,
            backgroundColor: 'rgba(245, 192, 1, 0.2)',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="search-outline" size={15} style={{marginLeft: 8}} />
          <TextInput
            placeholder="Search issue"
            style={{
              fontSize: 16,
              fontWeight: '500',
            }}></TextInput>
        </View> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 50,
            justifyContent: "space-between",
            // paddingHorizontal: 100,
            width: "100%",
          }}>
          <TouchableOpacity
            style={{justifyContent: "center", alignItems: "center"}}
            onPress={() => navigation.navigate("Faq")}>
            <Image
              source={require("../../../assets/help1.png")}
              style={{height: 45, width: 45, marginBottom: 5}}
            />

            <Text style={{textAlign: "center"}}>FAQs{"\n"}</Text>
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
                source={require("../../../assets/file-contract-solid.png")}
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 5,
                  resizeMode: "contain",
                }}
              />
            </View>
            <Text style={{textAlign: "center"}}>Terms & Conditions{"\n"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: "center", alignItems: "center"}}
            onPress={() => Linking.openURL(`tel:${8478056064}`)}>
            <Image
              source={require("../../../assets/help3.png")}
              style={{height: 45, width: 45, marginBottom: 5}}
            />

            <Text style={{textAlign: "center"}}>Contact {"\n"} Us</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          alignSelf: "flex-end",
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
