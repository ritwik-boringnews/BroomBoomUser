import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Redux/Actions";
import {CommonActions, useNavigation} from "@react-navigation/native";
const CustomDrawer = props => {
  const navigation = useNavigation();
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
            source={require("../../assets/userIcon.png")}
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
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Finish your profile
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'blue'}}>60%</Text>
            <Icon name="right" color="blue" style={{paddingLeft: 5}} />
          </View>
        </View>
        <Image
          source={require('../../assets/progressbar.png')}
          style={{
            height: 30,
            width: 210,
            resizeMode: 'contain',
            marginLeft: 30,
          }}
        /> */}
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
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {
                      name: "Signup",
                    },
                  ],
                }),
              );
            }}>
            <Text style={{color: "white", paddingLeft: 10}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
