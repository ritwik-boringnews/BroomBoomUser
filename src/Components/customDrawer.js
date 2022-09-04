import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Redux/Actions";

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: "white"}}>
        <View
          style={{
            flexDirection: "row",
            padding: 30,
            backgroundColor: "black",
            alignItems: "center",
          }}>
          <Image
            source={
              auth.user.image
                ? {uri: auth.user.image}
                : require("../../assets/userIcon.png")
            }
            style={{height: 30, width: 30, resizeMode: "contain"}}
          />
          <View style={{marginLeft: 10}}>
            {auth.user?.name && (
              <Text style={{fontSize: 16, color: "white"}}>
                {auth.user.name}
              </Text>
            )}
            {auth.user?.mobile && (
              <Text style={{fontSize: 16, color: "white"}}>
                +91 {auth.user.mobile}
              </Text>
            )}
          </View>
        </View>
        <View style={{padding: 20}}>
          <DrawerItemList {...props} />
        </View>
        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            marginHorizontal: 50,
            flexDirection: "row",
            justifyContent: "center",
          }}>
          <MaterialCommunityIcons name="logout" size={15} color="white" />
          <TouchableOpacity
            onPress={() => {
              dispatch(logout());
            }}>
            <Text style={{color: "white", paddingLeft: 10}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
