import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {resetOriginDestination} from "../../Redux/Actions/mapActions";
import {primaryColor} from "../Constants";

const ServiceNotAvailable = () => {
  const dispatch = useDispatch();

  const {destination} = useSelector(state => state.map);

  const rePickup = () => {
    dispatch(resetOriginDestination());
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        color: "black",
        paddingBottom: 30,
      }}>
      <View
        style={{
          marginHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#E0E0E0",
          paddingHorizontal: 8,
          alignItems: "center",
        }}>
        <TouchableOpacity style={{display: "flex", flexDirection: "row"}}>
          <Image
            source={require("../../assets/mapIcon.png")}
            style={{marginTop: 4}}
          />
          <Text
            style={{
              marginLeft: 10,
              color: "black",
              fontWeight: "bold",
              flex: 1,
            }}>
            {destination}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{flexDirection: "row", justifyContent: "center", marginTop: 20}}>
        <Image
          source={require("../../assets/NoService.png")}
          style={{height: 90, width: 90, resizeMode: "contain"}}
        />
        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: "bold", color: "black"}}>
            Service is not available{" "}
          </Text>
          <Text style={{fontWeight: "bold", color: "black"}}>
            in this area yet.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: "90%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: "center",
          marginTop: 10,
          marginStart: 20,
          backgroundColor: primaryColor,
        }}
        onPress={rePickup}>
        <Text style={{color: "black", fontWeight: "bold"}}>
          Choose another pick up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceNotAvailable;
