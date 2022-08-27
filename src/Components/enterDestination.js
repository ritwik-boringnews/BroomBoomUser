import {View, Text, Image, TouchableOpacity} from "react-native";
import React, {useContext} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import locationContext from "../../context/locationContext";
const EnterDestination = ({onConfirmPickup}) => {
  const navigation = useNavigation();

  const {loc} = useContext(locationContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        color: "black",
      }}>
      {/* <View
        style={{
          backgroundColor: '#E0E0E0',
          marginHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}>
          <Image source={require('../../assets/mapIcon.png')} />
          <Text style={{marginLeft: 10, color: 'black', fontSize: 14}}>
            {loc || 'please choose a destination'}
          </Text>
          <Icon name="hearto" size={14} style={{marginLeft: 2}} />
        </TouchableOpacity>
      </View> */}

      <View
        style={{
          backgroundColor: "#E0E0E0",
          marginHorizontal: 30,
          padding: 10,
          borderRadius: 10,
          marginTop: 30,
          marginLeft: 20,
          flexDirection: "row",
        }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 30,
          }}
          onPress={() => navigation.navigate("DestinationLocation")}>
          <Image
            source={require("../../assets/mapIcon.png")}
            style={{marginTop: 4}}
          />
          <Text style={{marginLeft: 10, color: "black"}}>
            {loc || "Please choose a destination"}{" "}
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

export default EnterDestination;
