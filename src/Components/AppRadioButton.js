import React from "react";
import {Text, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {primaryColor} from "../Constants";

const AppRadioButton = ({
  label,
  value,
  onValueChange,
  containerStyle,
  isSelected,
}) => (
  <TouchableOpacity
    onPress={() => onValueChange(value)}
    style={[
      {
        flexDirection: "row",
        alignItems: "center",
      },
      containerStyle,
    ]}>
    <Ionicons
      name={isSelected ? "radio-button-on-outline" : "radio-button-off-outline"}
      size={25}
      color={primaryColor}
    />
    <Text
      style={{
        fontSize: 16,
        marginRight: 20,
        color: "black",
      }}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default AppRadioButton;
