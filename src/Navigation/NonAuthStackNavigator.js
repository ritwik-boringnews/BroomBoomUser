import * as React from "react";
import {CommonActions, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//// Screens
import SignUp from "../Pages/SignUp";
import Otp from "../Pages/Otp";
import Welcome from "../Pages/Welcome/index.js";
import DrawerNavigator from "./DrawerNavigator.js";
//// import Faq from "../Pages/Faq/index.js";
//// import PrivacyPolicy from "../Pages/PrivacyPolicy.js/index.js";
//// import TermsAndConditions from "../Pages/TermsAndConditions/index.js";
//// import SearchPickupLocation from "../Pages/SearchPickupLocation/index.js";
//// import HelpAndSupport from "../Pages/HelpAndSupport/index.js";
//// import ChooseVehicleScooty from "../Pages/ChooseVehicleScooty/index.js";
//// import Notifications from "../Pages/Notifications/index.js";
//// import Feedback from "../Pages/Feedback/index.js";
//// import Payment from "../Pages/Payments/index.js";
//// import RideHistory from "../Pages/RideHistory/index.js";
//// import ReferAndEarn from "../Pages/ReferAndEarn/index.js";
//// import Settings from "../Pages/Settings/index.js";
//// import Profile from "../Pages/Profile/index.js";
//// import RideDetails from "../Pages/RideDetails/index.js";
//// import PilotDetails from "../Pages/PilotDetails/index.js";
//// import RunningRide from "../Pages/RunningRide/index.js";
//// import CancelOrderModal from "../Pages/CancelOrderModal/index.js";
//// import FindingPilot from "../Components/findingPilot.js";
//// import ServiceNotAvailable from "../Components/serviceNotAvailable.js";
//// Screens

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

  const LoginStackScreen = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="LoginScreens"
        component={LoginStackScreen}
        options={{
          tabBarStyle: {display: "none"},
        }}
      />
      <Tab.Screen
        name="HomeScreens"
        component={DrawerNavigator}
        options={{
          tabBarStyle: {display: "none"},
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
