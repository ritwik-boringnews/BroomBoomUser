import {View, Text, FlatList, Image, TouchableOpacity} from "react-native";
import React, {useState, useEffect} from "react";
import Api from "../../Services";
const ChooseVehicleScooty = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chooseVehicle, setChooseVehicle] = useState([]);

  const vehicleTypeImage = type => {
    if (type === "bike") {
      return require("../../../assets/check1.png");
    } else if (type === "car") {
      return require("../../../assets/check5.png");
    } else if (type === "scooty") {
      return require("../../../assets/check2.png");
    } else {
      return require("../../../assets/check1.png");
    }
  };
  useEffect(() => {
    setIsLoading(true);
    const getFare = async () => {
      try {
        const response = await Api.post(`/fares/post-location`, {
          origin: {latitude: "22.9398452", longitude: "88.2112543"},
          destination: {latitude: "22.5726", longitude: "88.3639"},
        });
        let vehicleType = [];

        if (response.status === 1) {
          response.data.map(item => {
            let imagePath = vehicleTypeImage(item.vehicle_type);
            vehicleType.push({
              image: imagePath,
              title: item.vehicle_type,
              time: item.duration.current_time,
              time_duration: item.duration,
              price: item.fare,
              seater: item.seater,
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
    getFare();
    setIsLoading(false);
  }, []);
  console.log("vehicle type", chooseVehicle);

  const ListItem = ({item}) => {
    return (
      <View
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
                {item.title}
              </Text>
              {item.title === "car" && <Text>({item.seater} seater)</Text>}
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
    );
  };
  return (
    <View style={{flex: 2}}>
      <FlatList
        data={chooseVehicle}
        renderItem={ListItem}
        keyExtractor={e => e.title}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // marginTop: 40,
          padding: 30,
        }}>
        <Image source={require("../../../assets/a.png")} />
        <Image source={require("../../../assets/amazon.png")} />
        <Image source={require("../../../assets/change.png")} />
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
          backgroundColor: "#F4B400",
        }}>
        <Text style={{color: "black", fontWeight: "bold"}}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseVehicleScooty;
