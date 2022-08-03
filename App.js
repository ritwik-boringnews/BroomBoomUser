import { View, Text ,} from 'react-native'
import React, { useEffect } from 'react'
import Api from './src/Services'
import SignUp from './src/Pages/SignUp.js'
import { HomeNavigator } from './src/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  useEffect(() => {
onsubmit();
  }, [])
  const onsubmit=async ()=>{
// 
    // const response = await Api.get(`/pilot/get-cities?query=1`);
    // console.log(response)
  }
  return (
    <HomeNavigator/>
  )
}

export default App

// signup
// otp
// serach city
// 