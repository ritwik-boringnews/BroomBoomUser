import {View, Text, Image} from 'react-native';
import React from 'react';

const FindingPilot = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        color: 'black',
      }}>
      <View
        style={{
          backgroundColor: '#E0E0E0',
          marginHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image source={require('../../assets/mapIcon.png')} />
          <Text style={{marginLeft: 10, color: 'black', fontSize: 14}}>
            South Dumdum, West Bengal 700028...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FindingPilot;
