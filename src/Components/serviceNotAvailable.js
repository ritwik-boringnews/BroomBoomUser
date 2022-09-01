import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {resetOriginDestination} from "../../Redux/Actions/mapActions";

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
          backgroundColor: "#E0E0E0",
          marginHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 20,
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <TouchableOpacity style={{display: "flex", flexDirection: "row"}}>
          <Image
            source={require("../../assets/mapIcon.png")}
            style={{marginTop: 4}}
          />
          <Text style={{marginLeft: 10, color: "black", fontSize: 14}}>
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
          backgroundColor: "#F5C001",
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
