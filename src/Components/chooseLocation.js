import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ChooseLocation = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
      }}>
      <View
        style={{
          backgroundColor: '#C8C8C8',
          marginHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/mapIcon.png')}
          style={{marginTop: 3}}
        />
        <TouchableOpacity>
          <Text style={{marginLeft: 10, color: 'black'}}>
            South Dumdum, West Bengal 700028...
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: '#C8C8C8',
          marginHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/mapIcon.png')}
          style={{marginTop: 3}}
        />
        <TouchableOpacity>
          <Text style={{marginLeft: 10, color: 'black'}}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseLocation;
