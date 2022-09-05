import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {
  setLocInputType,
  setMapHomeUIType,
} from "../../Redux/Actions/mapActions";
import {notify} from "../../Redux/Actions";
import {primaryColor} from "../Constants";
/**
 * common component : pickupUI origin/destination
 * @returns
 */
const PickupLocation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {origin, locInputType, destination} = useSelector(state => state.map);

  const onConfirmLocations = () => {
    if (locInputType === "origin" && origin === "") {
      dispatch(
        notify({
          type: "error",
          message: "Please select a pickup location",
        }),
      );
      return;
    }
    if (locInputType === "origin" && origin !== "") {
      dispatch(setLocInputType("destination"));
      return;
    }
    if (locInputType === "destination" && destination === "") {
      dispatch(
        notify({
          type: "error",
          message: "Please select a destination",
        }),
      );
      return;
    }
    if (locInputType === "destination" && destination !== "") {
      // now move to service not available
      dispatch(setMapHomeUIType("SERVICE_NOT_AVAILABLE"));
      return;
    }
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 25,
        paddingHorizontal: 20,
      }}>
      <Text
        style={{
          padding: 10,
          color: "black",
          fontSize: 15,
          fontWeight: "500",
        }}>
        {`${locInputType === "origin" ? "Select your Pick Up" : ""}`}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#E0E0E0",
          paddingHorizontal: 8,
          paddingVertical: 5,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("LocationPicker");
        }}>
        <Image
          source={require("../../assets/mapIcon.png")}
          style={{marginLeft: 4}}
        />
        <Text
          style={{marginLeft: 10, color: "black", fontWeight: "bold", flex: 1}}>
          {locInputType === "origin"
            ? origin === ""
              ? "Choose a pickup location"
              : origin
            : destination === ""
            ? "Choose your destination"
            : destination}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "85%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: "center",
          marginTop: 10,
          marginStart: 25,
          backgroundColor: primaryColor,
        }}
        onPress={onConfirmLocations}>
        <Text style={{color: "black", fontWeight: "bold"}}>
          Confirm Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickupLocation;
