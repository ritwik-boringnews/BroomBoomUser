import {View, Text, Image, TouchableOpacity} from "react-native";
import React, {useContext} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import locationContext from "../../context/locationContext";
const PickupLocation = ({onConfirmPickup}) => {
  const navigation = useNavigation();

  const {loc} = useContext(locationContext);
  return (
    <View
      style={{
        // flex: 2,
        backgroundColor: "white",
        borderRadius: 20,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        color: "black",
        paddingBottom: 15,
      }}>
      <Text
        style={{
          padding: 10,
          marginHorizontal: 15,
          color: "black",
          fontSize: 15,
          fontWeight: "500",
        }}>
        Select your Pick Up
      </Text>
      <View
        style={{
          backgroundColor: "#E0E0E0",
          // marginHorizontal: 30,
          width: "85%",
          padding: 13,
          borderRadius: 10,
          // marginTop: 30,
          // marginLeft: 16,
          marginStart: 25,
          flexDirection: "row",
        }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 30,
          }}
          onPress={() => navigation.navigate("PickUpLocation")}>
          <Image
            source={require("../../assets/mapIcon.png")}
            style={{marginTop: 4}}
          />
          <Text style={{marginLeft: 10, color: "black", fontWeight: "bold"}}>
            {loc || "Choose a pick up location"}{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: "85%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: "center",
          marginTop: 10,
          marginStart: 25,
          backgroundColor: "#F5C001",
        }}
        onPress={onConfirmPickup}
        disabled={!loc}>
        <Text style={{color: "black", fontWeight: "bold"}}>
          Confirm Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickupLocation;
