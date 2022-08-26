import {View, Text, Image, FlatList, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import Api from "../../Services";
import moment from "moment";
import {useDispatch} from "react-redux";
import {notify} from "../../../Redux/Actions";
const Notifications = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState();
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
              icon: require("../../../assets/icon.png"),
              date: moment(item.createdAt).format("llll"),
            });
          });
          setNotifications(store);
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
        style={{
          backgroundColor: "#FFFBC8",
          marginTop: 10,
          borderRadius: 15,

          marginHorizontal: 30,
          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Image
              source={item.image}
              style={{
                marginTop: 10,
                marginLeft: 20,

                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
            <View style={{paddingLeft: 30}}>
              <Text style={{fontWeight: "bold", color: "black"}}>
                {item.title}
              </Text>

              <Text
                style={{
                  fontSize: 10,
                  color: "black",
                }}>
                {item.subtitle}
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={item.icon}
              style={{
                marginTop: 10,
                marginHorizontal: 12,
              }}
            />
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
        <View style={{display: "flex", alignItems: "flex-end"}}>
          <Text style={{fontSize: 10, marginTop: 10}}>{item.date}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={notifications}
        renderItem={ListItem}
        keyExtractor={e => e.id}
      />
    </View>
  );
};

export default Notifications;
