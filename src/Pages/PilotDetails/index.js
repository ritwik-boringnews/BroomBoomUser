import {View, Text, Image} from "react-native";
import React, {useEffect, useState} from "react";
import moment from "moment";
import BackIcon from "react-native-vector-icons/AntDesign";
const PilotDetails = ({navigation, route}) => {
  const [pilotDetails, setPilotDetails] = useState([]);
  useEffect(() => {
    setPilotDetails(route.params);
  }, []);
  console.log("pilot details", route.params);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 25,
          paddingTop: 20,
          backgroundColor: "black",
        }}>
        <BackIcon
          name="arrowleft"
          color="white"
          size={20}
          style={{marginBottom: 10}}
          onPress={() => navigation.goBack()}
        />
        <View style={{width: "80%"}}>
          <Text
            style={{
              marginLeft: 5,
              color: "white",
              fontSize: 18,
              marginBottom: 20,
              textAlign: "center",
              fontWeight: "400",
            }}>
            Pilot Details
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-evenly",
          // paddingLeft: 50,
          marginTop: 30,

          paddingHorizontal: 60,
        }}>
        <Image
          source={require("../../../assets/UserImage.png")}
          style={{height: 50, width: 50}}
        />
        <View style={{paddingHorizontal: 15}}>
          <Text style={{color: "black", fontSize: 17}}>
            {pilotDetails?.pilot?.name}
          </Text>
          <Text style={{color: "#347EEA"}}>
            {pilotDetails?.pilotDetails?.vehicle_description}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-evenly",
          paddingHorizontal: 50,
          // marginVertical: 20,
        }}>
        <View
          style={{
            height: "80%",
            backgroundColor: "white",
            alignItems: "center",
            paddingHorizontal: 25,
            paddingVertical: 5,
            borderRadius: 5,
          }}>
          <Image
            source={require("../../../assets/star.png")}
            style={{
              height: 20,
              width: 20,
              marginBottom: 5,
            }}
          />
          <Text style={{color: "#333", fontWeight: "700"}}>4.5</Text>
        </View>
        <View
          style={{
            height: "80%",
            backgroundColor: "white",
            alignItems: "center",
            paddingHorizontal: 25,
            paddingVertical: 5,
            borderRadius: 5,
          }}>
          <Image
            source={require("../../../assets/aeroplane.png")}
            style={{
              height: 20,
              width: 20,
              marginBottom: 5,
            }}
          />
          <Text style={{color: "#333", fontWeight: "500"}}>
            {pilotDetails?.totalRides?.count}
          </Text>
        </View>
        <View
          style={{
            height: "80%",
            backgroundColor: "white",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 5,
          }}>
          <Image
            source={require("../../../assets/Subtract.png")}
            style={{
              height: 20,
              width: 20,

              marginBottom: 5,
            }}
          />
          <Text style={{color: "#333", marginBottom: 10}}>
            {moment().from(pilotDetails?.pilot?.createdAt)}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 50,

          borderRadius: 10,
          marginTop: 20,
        }}>
        <View style={{paddingLeft: 10, marginTop: 19, marginBottom: 20}}>
          <Text style={{fontSize: 11, color: "grey"}}>Member since</Text>
          <Text style={{marginTop: 5, color: "black"}}>
            {" "}
            {moment(pilotDetails?.pilot?.createdAt).format("ll")}
          </Text>
          <View
            style={{
              marginHorizontal: 3,
              height: 1,
              width: "80%",
              backgroundColor: "grey",
              marginBottom: 10,
            }}
          />
          <Text style={{fontSize: 11, color: "grey"}}>Vehicle Type</Text>
          <Text style={{marginTop: 5, color: "black"}}>
            {" "}
            {pilotDetails?.pilotDetails?.vehicle_type}
          </Text>
          <View
            style={{
              marginHorizontal: 3,
              height: 1,
              width: "80%",
              backgroundColor: "grey",
              marginBottom: 10,
            }}
          />
          <Text style={{fontSize: 11, color: "grey"}}>Vehicle number</Text>
          <Text style={{marginTop: 5, color: "black"}}>
            {" "}
            {pilotDetails?.pilotDetails?.vehicle_number}
          </Text>
          <View
            style={{
              marginHorizontal: 3,
              height: 1,
              width: "80%",
              backgroundColor: "grey",
              marginBottom: 10,
            }}
          />
          <Text style={{fontSize: 11, color: "grey"}}>Pilot ID number</Text>
          <Text style={{marginTop: 5, color: "black"}}>
            {pilotDetails?.pilot_id}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PilotDetails;
