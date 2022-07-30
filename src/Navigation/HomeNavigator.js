// In App.js in a new project

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
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RideHistory">
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
