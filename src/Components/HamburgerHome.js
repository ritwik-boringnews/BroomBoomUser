import React from "react";
import {View, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HamburgerHome = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={navigation.openDrawer}
      style={{
        position: "absolute",
        top: 50,
        left: 25,
        backgroundColor: "white",
        zIndex: 1,
        padding: 8,
        borderRadius: 10,
      }}>
      <Ionicons name="menu" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default HamburgerHome;
