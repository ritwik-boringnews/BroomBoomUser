import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 30,
            backgroundColor: 'black',
          }}>
          <Image
            source={require('../../assets/userIcon.png')}
            style={{height: 30, width: 30, resizeMode: 'contain'}}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 16, color: 'white'}}>User name</Text>
            <Text style={{fontSize: 10, color: 'white'}}>+91 6678765475</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Finish your profile
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'blue'}}>60%</Text>
            <Icon name="right" color="blue" style={{paddingLeft: 5}} />
          </View>
        </View>
        <Image
          source={require('../../assets/progressbar.png')}
          style={{
            height: 30,
            width: 210,
            resizeMode: 'contain',
            marginLeft: 30,
          }}
        />
        <View style={{padding: 20}}>
          <DrawerItemList {...props} />
        </View>
        <View
          style={{
            backgroundColor: 'black',
            padding: 10,
            marginHorizontal: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons name="logout" size={15} color="white" />
          <TouchableOpacity>
            <Text style={{color: 'white', paddingLeft: 10}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
