import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {useEffect, useState} from "react";
import Box from "../RideHistory/box.js";
import Api from "../../Services";
import moment from "moment";
import {useDispatch} from "react-redux";
import {notify} from "../../../Redux/Actions";
import BackIcon from "react-native-vector-icons/AntDesign";
const RideHistory = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [rideHistory, setRideHistory] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const getRideHistory = async () => {
      try {
        const response = await Api.get(
          `/ride-details/get-ride-history/details`,
        );

        if (response.status === 1) {
          setRideHistory(response.data.updatedRideHistory);
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        dispatch(
          notify({
            message: error.message || "Something went wrong",
            notifyType: "error",
          }),
        );
      }
    };
    getRideHistory();
    setIsLoading(false);
  }, []);

  return (
    <View style={{justifyContent: "center"}}>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 25,
            paddingTop: 20,
            backgroundColor: "black",
            width: "100%",
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
              Ride History
            </Text>
          </View>
        </View>
      </View>
      {rideHistory &&
        rideHistory.map((item, id) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RideDetails", item)}>
              <Box
                status={item.status}
                date={moment(item.createdAt).format("ll")}
                placeFrom={item.sources}
                placeTo={item.destination}
                sourceTime={moment(item.createdAt).format("LT")}
                destinationTime={moment(item.createdAt).format("LT")}
              />
            </TouchableOpacity>
          );
        })}

      {!rideHistory.length && (
        <View style={{alignItems: "center", paddingVertical: 80}}>
          <Text
            style={{
              color: "black",
              marginTop: 20,
              fontWeight: "700",
              fontSize: 15,
            }}>
            You don't have any past rides yet
          </Text>
          <Image
            source={require("../../../assets/rideHistory.png")}
            style={{marginTop: 20}}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default RideHistory;
