// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Pages/SignUp.js';
import Otp from '../Pages/Otp';
// import Welcome from '../Pages/Welcome';
import Welcome from '../Pages/Welcome/index.js'
import Faq from '../Pages/Faq/index.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Faq" component={Faq} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;