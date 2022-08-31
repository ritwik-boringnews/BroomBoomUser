import {View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Api from "../../Services";
import moment from "moment";
import {useDispatch} from "react-redux";
const RideDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [rideDetails, setRideDetails] = useState([]);
  useEffect(() => {
    setRideDetails(route.params);
  }, []);
  console.log("ride details", rideDetails);
  return (
    <ScrollView>
      <View>
        <View style={{padding: 18}}>
          <Image
            source={require("../../../assets/map.png")}
            style={{
              height: 160,
              width: "100%",
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          <Text style={{color: "black", marginRight: 50, fontWeight: "700"}}>
            {moment(rideDetails.createdAt).format("ll")}
          </Text>
          <Text style={{color: "#00AD00", fontWeight: "bold", paddingLeft: 50}}>
            {rideDetails.status}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            width: "83%",

            padding: 5,

            marginStart: 30,
          }}
        />
        <View style={{flexDirection: "row", marginTop: 30, marginLeft: 30}}>
          <View style={{paddingRight: 5}}>
            <Text>{rideDetails?.ride_start_time}</Text>
            <Text style={{marginTop: 65}}>{rideDetails?.ride_end_time}</Text>
          </View>
          <View>
            <Image source={require("../../../assets/ic_route.png")} />
          </View>
          <View style={{paddingLeft: 5}}>
            <Text>{rideDetails?.sources}</Text>
            <Text style={{marginTop: 64}}>{rideDetails?.destination}</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 25,
            marginTop: 10,
            color: "black",
          }}>
          Pilot
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("PilotDetails", rideDetails)}>
          <View
            style={{
              backgroundColor: "#FFFBFE",
              margin: 20,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingTop: 25,
              paddingBottom: 25,
            }}>
            <View>
              <Image
                source={require("../../../assets/user.png")}
                style={{height: 30, width: 30, resizeMode: "contain"}}
              />
            </View>
            <View>
              <Text style={{color: "black"}}>{rideDetails?.pilot?.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}>
                <Icon name="star" size={15} color="#F4B400" />
                <Text style={{paddingLeft: 4, color: "black"}}>4.5</Text>
              </View>
            </View>
            <View>
              <Text style={{color: "black"}}>
                {rideDetails.pilotDetails?.vehicle_description}
              </Text>
              <Text style={{marginTop: 3, color: "#347EEA"}}>
                {rideDetails?.pilotDetails?.vehicle_type}
              </Text>
            </View>
            <View style={{paddingTop: 12}}>
              <Icon name="right" size={15} />
            </View>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 22,
            color: "black",
            fontSize: 18,
          }}>
          Payment
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            padding: 40,
          }}>
          <Image source={require("../../../assets/a.png")} />
          <Image source={require("../../../assets/amazon.png")} />
          <Text style={{color: "black", fontWeight: "bold"}}>
            ₹{rideDetails?.payment_amount}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "90%",
            padding: 10,
            borderWidth: 1,
            borderRadius: 50,
            alignItems: "center",
            marginStart: 20,
            marginBottom: 20,
            backgroundColor: "#F4B400",
          }}>
          <Text style={{color: "black", fontWeight: "bold"}}>Feedback</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RideDetails;
