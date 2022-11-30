import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import {ProgressBar} from "react-native-paper";

const FindingPilot = () => {
  return (
    <View
      style={{
        borderRadius: 20,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#F2EBD1",
          width: "100%",
          marginVertical: 20,
          // padding: 15,
          paddingVertical: 15,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#F4B400",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          source={require("../../assets/idea.png")}
          style={{height: 20, width: 20, resizeMode: "contain"}}
        />
        <Text style={{marginLeft: 10, fontSize: 13, fontWeight: "bold"}}>
          You can change drop location and payment {"\n"} method while on ride
          as well
        </Text>
      </View>
      <View
        style={{borderBottomWidth: 2, width: "100%", borderColor: "#ccc"}}
      />
      <Text
        style={{
          marginTop: 10,
          textAlign: "center",
          fontSize: 22,
          fontWeight: "bold",
        }}>
        Finding the perfect Pilot {"\n"}for your ride
      </Text>
      <Image
        source={require("../../assets/findingPilotIcon.png")}
        style={{width: "100%", resizeMode: "contain", marginTop: 10}}
      />
      <ProgressBar
        progress={0.5}
        color="#F4B400"
        indeterminate={true}
        style={{
          backgroundColor: "white",
          marginTop: 10,
          width: "80%",
          margin: 30,
        }}
      />
      <TouchableOpacity
        style={{
          width: "90%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: "center",
          // marginTop: 15,
          marginStart: 20,
          backgroundColor: "#F4B400",
          marginBottom: 20,
        }}>
        <Text style={{color: "black", fontWeight: "bold"}}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FindingPilot;
