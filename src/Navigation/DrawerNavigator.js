import * as React from "react";
//// import {Button, View} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import History from "react-native-vector-icons/MaterialIcons";
import ProfileIcon from "react-native-vector-icons/AntDesign";
import AntDesign from "react-native-vector-icons/AntDesign";
import Support from "react-native-vector-icons/FontAwesome";
//// screens
import GMapHome from "../Pages/GMapHome/index.js";
import SearchPickup from "../Pages/SearchPickup";
import Profile from "../Pages/Profile";
import Faq from "../Pages/Faq";
import TermsAndConditions from "../Pages/TermsAndConditions";
import AddReferral from "../Pages/AddReferral";
import LocationPicker from "../Pages/LocationPicker";
import RideHistory from "../Pages/RideHistory";
import ReferAndEarn from "../Pages/ReferAndEarn";
import HelpAndSupport from "../Pages/HelpAndSupport";
import Notifications from "../Pages/Notifications";
import CustomDrawer from "../Components/customDrawer";
import {primaryColor} from "../Constants/index.js";
import Coupon from "../Pages/Coupon/index.js";
//// screens
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomePageMain = () => {
  return (
    <Stack.Navigator
      initialRouteName="SourceMap"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SourceMap" component={GMapHome} />
      <Stack.Screen name="SearchPickup" component={SearchPickup} />
      <Stack.Screen name="LocationPicker" component={LocationPicker} />
    </Stack.Navigator>
  );
};

const SupportStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HelpAndSupport"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="termsAndConditions" component={TermsAndConditions} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  const user = useSelector(state => state.auth.user);
  const getInitialRouteName = () => {
    if (!user.referral_status) return "Add Referral";
    else if (user.email) return "SourceMap";
    else return "Profile";
  };
  return (
    <Drawer.Navigator
      initialRouteName={getInitialRouteName()}
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: primaryColor,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "Roboto-Medium",
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Booking"
        component={HomePageMain}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="payment" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <ProfileIcon name="user" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notifications}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="notifications" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ride History"
        component={RideHistory}
        options={{
          drawerIcon: ({color}) => (
            <History name="history" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Refer and Earn"
        component={ReferAndEarn}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="gift" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={SupportStack}
        options={{
          drawerIcon: ({color}) => (
            <Support name="support" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Coupon"
        component={Coupon}
        options={{
          drawerIcon: ({color}) => (
            <Support name="support" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Add Referral"
        component={AddReferral}
        options={{
          drawerItemStyle: {height: 0},
          drawerIcon: ({color}) => (
            <ProfileIcon name="user" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
