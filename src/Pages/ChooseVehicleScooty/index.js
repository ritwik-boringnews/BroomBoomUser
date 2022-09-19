import {View, Text, FlatList, Image, TouchableOpacity} from "react-native";
import React, {useState, useEffect} from "react";
import Api from "../../Services";
import {VEHICLE_TYPE_OPTIONS} from "../../Utility/optionTypes";
import {useDispatch} from "react-redux";
import {notify} from "../../../Redux/Actions";
import {getTitleCaseText} from "../../Utility/helper";
import {primaryColor} from "../../Constants";

const ChooseVehicleScooty = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chooseVehicle, setChooseVehicle] = useState([]);
  const [text, setText] = useState([]);
  const dispatch = useDispatch();

  const vehicleTypeImage = type => {
    if (type === VEHICLE_TYPE_OPTIONS.BIKE) {
      return require("../../../assets/check1.png");
    } else if (type === VEHICLE_TYPE_OPTIONS.CAR) {
      return require("../../../assets/check5.png");
    } else if (type === VEHICLE_TYPE_OPTIONS.SCOOTY) {
      return require("../../../assets/check2.png");
    } else {
      return null;
    }
  };
  console.log("chooseVehicle", chooseVehicle);
  useEffect(() => {
    getFare();
  }, []);

  const getFare = async () => {
    try {
      const response = await Api.post(`/fares/post-location`, {
        origin: {latitude: "22.568937", longitude: "88.2685106"},
        destination: {latitude: "22.5726", longitude: "88.3639"},
      });

      let vehicleType = [];
      if (response.status === 1) {
        response.data.map((item, index) => {
          let imagePath = vehicleTypeImage(item.vehicle_type);
          vehicleType.push({
            image: imagePath,
            title: item.vehicle_type,
            time: item.duration.current_time,
            time_duration: item.duration,
            price: item.fare,
            seater: item.seater,
            id: index,
          });
        });
        setChooseVehicle(vehicleType);
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
  console.log("vehicle type", chooseVehicle);

  const ListItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => console.log("item", item)}>
        <View
          key={item.index}
          style={{
            backgroundColor: "white",
            marginTop: 10,
            borderRadius: 15,
            marginHorizontal: 30,
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Image
              source={item.image}
              style={{
                marginTop: 5,
                marginLeft: 20,

                width: 40,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <View style={{paddingLeft: 30}}>
              <View style={{flexDirection: "row"}}>
                <Text
                  style={{fontWeight: "bold", color: "black", marginRight: 5}}>
                  {getTitleCaseText(item.title)}
                </Text>
                {item.title === VEHICLE_TYPE_OPTIONS.CAR && (
                  <Text>({item.seater} seater)</Text>
                )}
              </View>
              <Text style={{fontSize: 12}}>{item.time}</Text>
              <Text style={{fontSize: 10, color: "#0091E6"}}>
                {item.time_duration}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                marginTop: 10,
                marginRight: 10,
                fontWeight: "bold",
                color: "black",
              }}>
              ₹ {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        data={chooseVehicle}
        renderItem={ListItem}
        keyExtractor={e => e.index}
      />
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // marginTop: 40,
          padding: 30,
        }}>
        <Image source={require("../../../assets/a.png")} />
        <Image source={require("../../../assets/amazon.png")} />
        <Image source={require("../../../assets/change.png")} />
      </View> */}
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
        }}>
        <Text style={{color: "black", fontWeight: "bold"}}>Confirm</Text>
      </TouchableOpacity>
    </>
  );
};

export default ChooseVehicleScooty;
