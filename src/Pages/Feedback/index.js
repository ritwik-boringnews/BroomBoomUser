import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Api from "../../Services";
import {useDispatch} from "react-redux";
const Feedback = ({route}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [rating, setRating] = useState([
    {count: 1, colour: false},
    {count: 2, colour: false},
    {count: 3, colour: false},
    {count: 4, colour: false},
    {count: 5, colour: false},
  ]);
  const [ratePilot, setRatePilot] = useState("");
  const [comment, setComment] = useState("");

  console.log(route.params?.pilot_id);
  const submitFeedback = async () => {
    try {
      const payload = {
        pilotId: route.params?.pilot_id,
        comment: ratePilot === "others" ? comment : ratePilot,
        rating: rating.filter(item => item.colour).length,
      };
      const response = await Api.post(`/user-feedback/create`, payload);
      console.log("response", response);
      if (response.status === 1) {
        dispatch(
          notify({
            message: "your Feedback has submited successfully",
          }),
        );
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
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          marginHorizontal: 16,
          paddingVertical: 30,
          marginTop: 20,
          display: "flex",
          alignItems: "center",
        }}>
        <Image
          source={require("../../../assets/right.png")}
          style={{height: 90, width: 90, resizeMode: "contain"}}
        />
        <Text style={{fontWeight: "800", fontSize: 16}}>Payment Complete</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          marginHorizontal: 16,
          paddingVertical: 30,
          marginTop: 20,
          display: "flex",
          alignItems: "center",
        }}>
        <Text>Rate Your Pilot</Text>
        <View style={{flexDirection: "row", justifyContent: "center"}}>
          {rating.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const rate = rating.map((r, index) => {
                    if (index + 1 <= item.count) {
                      r.colour = true;
                    } else {
                      r.colour = false;
                    }
                    return r;
                  });
                  setRating(rate);
                }}>
                <Icon
                  name="star"
                  size={45}
                  color={item.colour ? "yellow" : "#E6E6E6"}
                  key={`feedback${item}`}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={{display: "flex", alignItems: "center", marginTop: 30}}>
        <Text style={{color: "black", fontSize: 18}}>How was the Pilot?</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
          marginHorizontal: 40,
        }}>
        <Pressable
          style={{
            paddingHorizontal: 12,
            marginHorizontal: 40,
            borderRadius: 48,
            elevation: 3,
            backgroundColor: "#FFFBC8",
            borderWidth: 1,
          }}
          onPress={() => setRatePilot("polite")}>
          <Text style={{color: "black"}}>Polite</Text>
        </Pressable>

        <Pressable
          style={{
            paddingHorizontal: 12,
            marginHorizontal: 40,
            borderRadius: 48,
            elevation: 3,
            backgroundColor: "#FFFBC8",
            borderWidth: 1,
          }}
          onPress={() => setRatePilot("timely")}>
          <Text style={{color: "black"}}>Timely</Text>
        </Pressable>

        <Pressable
          style={{
            paddingHorizontal: 12,
            marginHorizontal: 40,
            borderRadius: 48,
            elevation: 3,
            backgroundColor: "#FFFBC8",
            borderWidth: 1,
          }}
          onPress={() => setRatePilot("friendly")}>
          <Text style={{color: "black"}}>Friendly</Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 12,
            marginHorizontal: 40,
            borderRadius: 48,
            elevation: 3,
            backgroundColor: "#FFFBC8",
            borderWidth: 1,
          }}
          onPress={() => setRatePilot("others")}>
          <Text style={{color: "black"}}>Others</Text>
        </Pressable>
      </View>
      {ratePilot === "others" && (
        <TextInput
          placeholder="Comment(optional)"
          style={{
            backgroundColor: "#E6E6E6",
            marginHorizontal: 30,
            marginTop: 30,
            borderRadius: 6,
            paddingHorizontal: 15,
          }}
          onChangeText={text => setComment(text)}
        />
      )}

      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          marginHorizontal: 50,
          marginTop: 40,
        }}
        onPress={submitFeedback}>
        <Text style={{textAlign: "center", color: "black"}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feedback;
