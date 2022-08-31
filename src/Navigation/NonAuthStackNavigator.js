import * as React from "react";
import {CommonActions, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignUp from "../Pages/SignUp";
import Otp from "../Pages/Otp";
// import Welcome from '../Pages/Welcome';
import Welcome from "../Pages/Welcome/index.js";
import Faq from "../Pages/Faq/index.js";
import PrivacyPolicy from "../Pages/PrivacyPolicy.js/index.js";
import TermsAndConditions from "../Pages/TermsAndConditions/index.js";
import SearchPickupLocation from "../Pages/SearchPickupLocation/index.js";
import HelpAndSupport from "../Pages/HelpAndSupport/index.js";
import ChooseVehicleScooty from "../Pages/ChooseVehicleScooty/index.js";
import Notifications from "../Pages/Notifications/index.js";
import Feedback from "../Pages/Feedback/index.js";
import Payment from "../Pages/Payments/index.js";
import RideHistory from "../Pages/RideHistory/index.js";
import ReferAndEarn from "../Pages/ReferAndEarn/index.js";
import Settings from "../Pages/Settings/index.js";
import Profile from "../Pages/Profile/index.js";
import RideDetails from "../Pages/RideDetails/index.js";
import PilotDetails from "../Pages/PilotDetails/index.js";
import DrawerNavigator from "./DrawerNavigator.js";
import RunningRide from "../Pages/RunningRide/index.js";
import CancelOrderModal from "../Pages/CancelOrderModal/index.js";
import FindingPilot from "../Components/findingPilot.js";
import ServiceNotAvailable from "../Components/serviceNotAvailable.js";
// import AddReferral from "../Pages/AddReferral";
import {useSelector} from "react-redux";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AddReferral from "../Pages/AddReferral";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const navigation = useNavigation();
  const auth = useSelector(state => state.auth);
  React.useEffect(() => {
    if (auth.clientToken)
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "HomeScreens",
            },
          ],
        }),
      );
    else
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "LoginScreens",
            },
          ],
        }),
      );
  }, [auth.clientToken]);
  // return (
  //   <Stack.Navigator
  //     initialRouteName="Signup"
  //     screenOptions={{headerShown: false}}>
  //     <Stack.Screen name="CancelOrderModal" component={CancelOrderModal} />
  //     <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
  //     <Stack.Screen name="RunningRide" component={RunningRide} />
  //     <Stack.Screen name="settings" component={Settings} />
  //     <Stack.Screen name="RideDetails" component={RideDetails} />
  //     <Stack.Screen name="PilotDetails" component={PilotDetails} />
  //     <Stack.Screen name="Profile" component={Profile} />
  //     <Stack.Screen name="ReferAndEarn" component={ReferAndEarn} />
  //     <Stack.Screen name="RideHistory" component={RideHistory} />
  //     <Stack.Screen name="Payment" component={Payment} />
  //     <Stack.Screen name="Feedback" component={Feedback} />
  //     <Stack.Screen name="Notifications" component={Notifications} />
  //     <Stack.Screen
  //       name="ChooseVehicleScooty"
  //       component={ChooseVehicleScooty}
  //     />
  //     <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
  //     <Stack.Screen
  //       name="SearchPickupLocation"
  //       component={SearchPickupLocation}
  //     />
  //     <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
  //     <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
  //     <Stack.Screen name="Signup" component={SignUp} />
  //     {/* <Stack.Screen name="AddReferral" component={AddReferral} /> */}
  //     <Stack.Screen name="Otp" component={Otp} />
  //     <Stack.Screen name="Welcome" component={Welcome} />
  //     <Stack.Screen name="Faq" component={Faq} />
  //     <Stack.Screen
  //       name="ServiceNotAvailable"
  //       component={ServiceNotAvailable}
  //     />
  //     <Stack.Screen name="FindingPilot" component={FindingPilot} />
  //   </Stack.Navigator>
  // );
  const LoginStackScreen = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Otp" component={Otp} />
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      </Stack.Navigator>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreens"
        component={DrawerNavigator}
        options={{
          tabBarStyle: {display: "none"},
        }}
      />
      <Tab.Screen
        name="LoginScreens"
        component={LoginStackScreen}
        options={{
          tabBarStyle: {display: "none"},
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
