import React from "react";
import {TouchableOpacity, View} from "react-native";
import MyLocation from "react-native-vector-icons/MaterialIcons";

const LocateCurrentPosPointer = ({onPress}) => (
  <View
    style={{
      position: "absolute",
      bottom: 250,
      padding: 8,
      borderRadius: 10,
      right: 20,
      backgroundColor: "white",
    }}>
    <TouchableOpacity onPress={onPress}>
      <MyLocation name="my-location" size={20} color="black" />
    </TouchableOpacity>
  </View>
);

export default LocateCurrentPosPointer;
