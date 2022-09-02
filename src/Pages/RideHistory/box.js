import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import React from "react";
import ic_route from "../../../assets/ic_route.png";

const Box = ({
  date,
  status,
  placeTo,
  placeFrom,
  sourceTime,
  destinationTime,
}) => {
  return (
    <View style={styles.box}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomColor: "#D5DDE0",
          paddingVertical: 14,
        }}>
        <Text style={{fontSize: 14, fontWeight: "700", color: "#1f1f1f"}}>
          {date}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: status == "completed" ? "#00AD00" : "#EA0C0C",
          }}>
          {status}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 15,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
        }}>
        <View style={{marginHorizontal: 10}}>
          <Text style={{fontSize: 14, fontWeight: "700", color: "#97ADB6"}}>
            {sourceTime}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#97ADB6",
              bottom: 0,
              position: "absolute",
            }}>
            {destinationTime}
          </Text>
        </View>
        <View>
          <Image source={ic_route} />
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={{fontSize: 14, fontWeight: "700", color: "#1f1f1f"}}>
            {placeFrom}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#1f1f1f",
              bottom: 0,
              position: "absolute",
            }}>
            {placeTo}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  box: {
    height: 200,
    width: "90%",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.15)",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 18,
    backgroundColor: "white",
  },
});

export default Box;
