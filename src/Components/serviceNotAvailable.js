import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {
  backToDestination,
  resetOriginDestination,
} from "../../Redux/Actions/mapActions";
import {primaryColor} from "../Constants";

const ServiceNotAvailable = () => {
  const dispatch = useDispatch();

  const {destination, origin} = useSelector(state => state.map);

  const rePickup = () => {
    dispatch(resetOriginDestination());
  };

  const handleBack = () => {
    dispatch(backToDestination());
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
      <Text style={{marginBottom: 20}} onPress={handleBack}>
        Back
      </Text>
      <>
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
          }}>
          <Image
            source={require("../../assets/mapIcon.png")}
            style={{marginTop: 4}}
          />
          <Text
            numberOfLines={3}
            style={{
              marginLeft: 10,
              color: "black",
              fontWeight: "bold",
              flex: 1,
            }}>
            {origin?.text}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E0E0E0",
            padding: 8,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <Image
            source={require("../../assets/mapIcon.png")}
            style={{marginTop: 4}}
          />
          <Text
            numberOfLines={3}
            style={{
              marginLeft: 10,
              color: "black",
              fontWeight: "bold",
              flex: 1,
            }}>
            {destination?.text}
          </Text>
        </TouchableOpacity>
      </>
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
