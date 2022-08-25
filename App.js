import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Api from './src/Services';
import SignUp from './src/Pages/SignUp.js';
import {HomeNavigator} from './src/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {enableLatestRenderer} from 'react-native-maps';
import locationContext from './context/locationContext';
enableLatestRenderer();

const App = () => {
  const [loc, setLoc] = useState('');
  // useEffect(() => {
  //   onsubmit();
  // }, []);
  const onsubmit = async () => {
    // const response = await Api.get(`/pilot/get-cities?query=1`);
    // console.log(response)
  };
  return (
    <locationContext.Provider value={{loc, setLoc}}>
      <HomeNavigator />
    </locationContext.Provider>
  );
};

export default App;

// signup
// otp
// serach city
//
