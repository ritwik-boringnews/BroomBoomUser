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
const Stack = createNativeStackNavigator();

function App() {
  return (
<<<<<<< HEAD
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Welcome'>
=======
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchPickupLocation">
        <Stack.Screen
          name="SearchPickupLocation"
          component={SearchPickupLocation}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
>>>>>>> 9fc87feddb9c4fc75bc04d2c74238dbb517fc1c3
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Faq" component={Faq} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
