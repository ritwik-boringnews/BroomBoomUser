import React from "react";
import {View, Text} from "react-native";
import BackIcon from "react-native-vector-icons/AntDesign";
import AppStatusBar from "./AppStatusBar";

const BackButtonPage = ({children, navigation, pageName}) => (
  <View style={{flex: 1, backgroundColor: "#000"}}>
    <AppStatusBar backgroundColor="#000" barStyle="light-content" />
    <View
      style={{
        height: 70,
        flexDirection: "row",
        alignItems: "center",
      }}>
      <BackIcon
        name="arrowleft"
        color="white"
        size={25}
        onPress={() => navigation.goBack()}
        style={{position: "absolute", left: 25, zIndex: 9}}
      />
      <Text
        style={{
          color: "white",
          fontSize: 18,
          textAlign: "center",
          fontWeight: "400",
          flex: 1,
        }}>
        {pageName}
      </Text>
    </View>
    <View
      style={{
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
        marginTop:10,
        backgroundColor:'white'
      }}>
      {children}
    </View>
  </View>
);

export default BackButtonPage;
