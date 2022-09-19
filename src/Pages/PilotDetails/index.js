import {View, Text, Image, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import moment from "moment";
import BackIcon from "react-native-vector-icons/AntDesign";
import CancelOrderModalReason from "../CancelOrderModalReason";
import AppDialog from "../../Components/dialog";
const PilotDetails = ({navigation, route}) => {
  const [pilotDetails, setPilotDetails] = useState([]);
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setPilotDetails(route.params);
  }, []);
  console.log("pilot details", route.params);
  return (
    <View style={{flex: 1}}>
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
          paddingHorizontal: 20,
          alignItems: "center",

          flex: 1,
        }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginRight: "auto",
            paddingHorizontal: 20,
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
            justifyContent: "space-between",
            paddingHorizontal: 20,
            width: "100%",
          }}>
          <View
            style={{
              height: "100%",
              backgroundColor: "white",
              alignItems: "center",
              paddingHorizontal: 30,
              paddingVertical: 10,
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
              height: "100%",
              backgroundColor: "white",
              alignItems: "center",
              paddingHorizontal: 30,
              paddingVertical: 10,
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
              height: "100%",
              backgroundColor: "white",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 5,
            }}>
            <Image
              source={require("../../../assets/Subtract.png")}
              style={{
                height: 20,
                width: 20,
                marginTop: 3,
                marginBottom: 5,
              }}
            />
            <Text style={{color: "#333"}}>
              {moment().from(pilotDetails?.pilot?.createdAt)}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",

            width: "100%",
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
                marginTop: 5,
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
                marginTop: 5,
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
                marginTop: 5,
              }}
            />
            <Text style={{fontSize: 11, color: "grey"}}>Pilot ID number</Text>
            <Text style={{marginTop: 5, color: "black"}}>
              {pilotDetails?.pilot_id}
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
            marginStart: 20,
            marginTop: 30,
            backgroundColor: "#FFFF8D",
          }}
          onPress={() => setVisible(true)}>
          <Text style={{color: "black", fontWeight: "bold"}}>Cancel Order</Text>
        </TouchableOpacity>
        <AppDialog
          title="Cancel Order"
          visible={confirm}
          setVisible={setConfirm}
          text="Do you want to cancel this order ?"
        />
        <CancelOrderModalReason
          visible={visible}
          setVisible={setVisible}
          onReasonPressed={item => {
            setConfirm(true);
            setVisible(false);
          }}
        />
      </View>
    </View>
  );
};

export default PilotDetails;
