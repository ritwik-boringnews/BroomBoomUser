import {View, Text, Image, FlatList, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import Api from "../../Services";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import BackIcon from "react-native-vector-icons/AntDesign";
const Notifications = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const getNotification = async () => {
      try {
        const response = await Api.get(`/notification/get-notification`);

        const store = [];
        if (response.status === 1) {
          response.data.notification.forEach(item => {
            store.push({
              id: item.id,
              image: require("../../../assets/notification.png"),
              title: item.notification,
              subtitle: item.message,
              // icon: require("../../../assets/icon.png"),
              date: moment(item.createdAt).format("llll"),
            });
          });
          setNotifications([
            ...store,
            {
              id: 1,
              title: "Registration Successful",
              subtitle:
                "Thank you for registering with us we will keep you updated with the latest offers",
              image: require("../../../assets/notification.png"),
              // icon: require("../../../assets/icon.png"),
              date: moment(user.createdAt).format("llll"),
            },
          ]);
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
    getNotification();

    setIsLoading(false);
  }, []);

  const ListItem = ({item}) => {
    return (
      <View
        key={item.id}
        style={{
          backgroundColor: "#FFFBC8",
          marginTop: 10,
          borderRadius: 15,
          width: "100%",

          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "center",
          }}>
          {/* <View
            style={{
              justifyContent: "center",
              width: "10%",
              marginHorizontal: 10,
            }}>
            <Image
              source={item.image}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
          </View> */}
          <View style={{width: "100%", paddingHorizontal: 20}}>
            <Text style={{fontWeight: "bold", color: "black"}}>
              {item.title}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: "black",
                marginTop: 5,
                width: "80%",
              }}>
              {item.subtitle}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 14,
            height: 1,
            width: "90%",
            backgroundColor: "grey",
            marginTop: 10,
          }}
        />
        <View
          style={{display: "flex", alignItems: "flex-end", marginRight: 15}}>
          <Text style={{fontSize: 10, marginTop: 10}}>{item.date}</Text>
        </View>
      </View>
    );
  };
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
            Notifications
          </Text>
        </View>
      </View>
      {notifications.length ? (
        <View style={{paddingHorizontal: 20}}>
          <FlatList
            data={notifications}
            renderItem={ListItem}
            keyExtractor={e => e.id}
          />
        </View>
      ) : (
        <View style={{alignItems: "center", justifyContent: "center"}}>
          <Text
            style={{
              color: "black",
              marginTop: 20,
              fontWeight: "600",
              fontSize: 15,
            }}>
            Thank you for registering with us we will keep you updated with the
            latest offers
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

export default Notifications;
