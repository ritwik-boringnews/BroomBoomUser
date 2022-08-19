import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
const EnterDestination = () => {
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
          backgroundColor: '#E0E0E0',
          marginHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}>
          <Image source={require('../../assets/mapIcon.png')} />
          <Text style={{marginLeft: 10, color: 'black', fontSize: 14}}>
            South Dumdum, West Bengal 700028...
          </Text>
          <Icon name="hearto" size={14} style={{marginLeft: 2}} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: '#E0E0E0',
          marginHorizontal: 30,
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 20,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('DestinationLocation')}>
          <Image source={require('../../assets/mapIcon.png')} />
          <Text style={{marginLeft: 10, color: 'black'}}>
            Enter Destination
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterDestination;
