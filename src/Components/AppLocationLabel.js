import React from "react";
import {TouchableOpacity,Image,Text} from "react-native";
import {primaryColor} from "../Constants";
import {MapIcon} from "../Constants/Images";

const AppLocationLabel = ({locLabel}) => (
  <TouchableOpacity
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#E0E0E0",
      padding: 8,
      marginHorizontal: 20,
      borderRadius: 10,
      marginBottom: 20,
      marginTop: 20,
    }}>
    <Image source={MapIcon} style={{marginTop: 4}} />
    <Text
      numberOfLines={3}
      style={{
        marginLeft: 10,
        color: "black",
        fontWeight: "bold",
        flex: 1,
      }}>
      {locLabel}
    </Text>
  </TouchableOpacity>
);

export default AppLocationLabel;
