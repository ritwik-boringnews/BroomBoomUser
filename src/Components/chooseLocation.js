import React, {useContext} from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import locationContext from "../../context/locationContext";
import {useNavigation} from "@react-navigation/native";

const ChooseLocation = ({onConfirmPickup}) => {
  const {loc} = useContext(locationContext);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 25
      }}>
      <View
        style={{
          backgroundColor: "#C8C8C8",
          marginHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 20,
          marginLeft: 20,
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <Image
          source={require("../../assets/mapIcon.png")}
          style={{marginTop: 3}}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("DestinationLocation")}>
          <Text style={{marginLeft: 10, color: "black"}}>
            {loc || " Choose your destination"}
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
          marginStart: 20,
        }}
        onPress={onConfirmPickup}>
        <Text style={{color: "black", fontWeight: "bold"}}>
          Confirm Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseLocation;
