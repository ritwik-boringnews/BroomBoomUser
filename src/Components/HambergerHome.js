import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const HambergerHome = ({navigation}) => {
  return (
    <View
    style={{
      position: 'absolute',
      top: 50,
      left: 25,
      backgroundColor: 'white',
      zIndex: 1,
      padding: 8,
      borderRadius: 10,
    }}>
    <TouchableOpacity>
      <Ionicons
        name="menu"
        size={20}
        color="black"
        onPress={() => navigation.openDrawer()}
      />
    </TouchableOpacity>
  </View>
  )
}

export default HambergerHome