import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Pages/SignUp.js';
import Otp from '../Pages/Otp';
// import Welcome from '../Pages/Welcome';
import Welcome from '../Pages/Welcome/index.js';
import Faq from '../Pages/Faq/index.js';
import PrivacyPolicy from '../Pages/PrivacyPolicy.js/index.js';
import TermsAndConditions from '../Pages/TermsAndConditions/index.js';
import SearchPickupLocation from '../Pages/SearchPickupLocation/index.js';
import HelpAndSupport from '../Pages/HelpAndSupport/index.js';
import ChooseVehicleScooty from '../Pages/ChooseVehicleScooty/index.js';
import Notifications from '../Pages/Notifications/index.js';
import Feedback from '../Pages/Feedback/index.js';
import Payment from '../Pages/Payments/index.js';
import RideHistory from '../Pages/RideHistory/index.js';
import ReferAndEarn from '../Pages/ReferAndEarn/index.js';
import Settings from '../Pages/Settings/index.js';
import Profile from '../Pages/Profile/index.js';
import RideDetails from '../Pages/RideDetails/index.js';
import PilotDetails from '../Pages/PilotDetails/index.js';
import DrawerNavigator from './DrawerNavigator.js';
import RunningRide from '../Pages/RunningRide/index.js';
import CancelOrderModal from '../Pages/CancelOrderModal/index.js';
import EnterDestination from '../Pages/EnterDestination/index.js';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="CancelOrderModal" component={CancelOrderModal} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="RunningRide" component={RunningRide} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="RideDetails" component={RideDetails} />
        <Stack.Screen name="PilotDetails" component={PilotDetails} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ReferAndEarn" component={ReferAndEarn} />
        <Stack.Screen name="RideHistory" component={RideHistory} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen
          name="ChooseVehicleScooty"
          component={ChooseVehicleScooty}
        />
        <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
        <Stack.Screen
          name="SearchPickupLocation"
          component={SearchPickupLocation}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Faq" component={Faq} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
