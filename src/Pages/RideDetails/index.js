import {View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Api from "../../Services";
import moment from "moment";
import {useDispatch} from "react-redux";
import BackButtonPage from "../../Components/BackButtonPage";
const RideDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [rideDetails, setRideDetails] = useState([]);
  useEffect(() => {
    setRideDetails(route.params);
  }, []);
  console.log("ride details", rideDetails);
  return (
    <BackButtonPage pageName="Ride Details" navigation={navigation}>
      <ScrollView>
        <View style={{backgroundColor: "white", paddingHorizontal: 20}}>
          <View>
            <Image
              source={require("../../../assets/map.png")}
              style={{
                height: 160,
                width: "100%",
                resizeMode: "contain",
                borderRadius: 10,
                marginVertical: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Text style={{color: "black", fontWeight: "700"}}>
              {moment(rideDetails.createdAt).format("ll")}
            </Text>
            <Text style={{color: "#00AD00", fontWeight: "bold"}}>
              {rideDetails.status}
            </Text>
          </View>
          {/* <View
            style={{
              borderBottomWidth: 0.5,
              width: "83%",
              padding: 5,
              marginStart: 30,
            }}
          /> */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              // paddingHorizontal: 20,
            }}>
            <View>
              <Text>{rideDetails?.ride_start_time}</Text>
              <Text style={{marginTop: 65}}>{rideDetails?.ride_end_time}</Text>
            </View>
            <Image source={require("../../../assets/ic_route.png")} />
            <View style={{marginRight: 20, width: "100%"}}>
              <Text
                style={{position: "absolute", top: 0, width: "100%"}}
                numberOfLines={2}>
                {rideDetails?.sources}
              </Text>
              <Text style={{position: "absolute", bottom: 0, width: "100%"}}>
                {rideDetails?.destination}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              // marginLeft: 25,
              marginTop: 10,
              color: "black",
            }}>
            Pilot
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("PilotDetails", rideDetails)}>
            <View
              style={{
                backgroundColor: "#d7d7d7",
                marginVertical: 15,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingVertical: 25,
                alignItems: "center",
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
                  {rideDetails.pilotDetails?.vehicle_description ||
                    "Two Wheeler"}
                </Text>
                <Text style={{marginTop: 3, color: "#347EEA"}}>
                  {rideDetails?.pilotDetails?.vehicle_type || "Pulsar 220"}
                </Text>
              </View>
              <View style={{paddingTop: 12}}>
                <Icon name="right" size={15} />
              </View>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: "black",
              fontSize: 18,
            }}>
            Payment
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // padding: 40,
              marginVertical: 20,
            }}>
            <View style={{flexDirection: "row"}}>
              <Image
                source={require("../../../assets/a.png")}
                style={{height: 25, width: 25, marginRight: 10}}
              />
              <Image source={require("../../../assets/amazon.png")} />
            </View>
            <Text style={{color: "black", fontWeight: "bold"}}>
              ₹{rideDetails?.payment_amount || 150}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              padding: 10,
              borderWidth: 1,
              borderRadius: 50,
              alignItems: "center",
              // marginStart: 20,
              marginBottom: 20,
              backgroundColor: "#F4B400",
            }}
            onPress={() =>
              navigation.navigate("Feedback", {pilot_id: rideDetails?.pilot_id})
            }>
            <Text style={{color: "black", fontWeight: "bold"}}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </BackButtonPage>
  );
};

export default RideDetails;
