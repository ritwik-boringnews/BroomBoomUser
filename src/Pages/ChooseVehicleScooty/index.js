import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ChooseVehicleScooty = () => {
  const DATA = [
    {
      image: require('../../../assets/check1.png'),
      title: 'Bike',
      time: '11:28pm',
      time_duration: '30min',
      price: '₹60.50',
    },
    {
      image: require('../../../assets/check2.png'),
      title: 'Scooty',
      time: '11:28pm',
      time_duration: '30min',
      price: '₹50',
    },
    {
      image: require('../../../assets/check3.png'),
      title: 'Toto',
      time: '11:28pm',
      time_duration: '30min',
      price: '₹62.50',
    },
    {
      image: require('../../../assets/check4.png'),
      title: 'Auto rickshaw',
      time: '11:28pm',
      time_duration: '30min',
      price: '₹65',
    },
    {
      image: require('../../../assets/check5.png'),
      title: 'Car',
      time: '11:28pm',
      time_duration: '30min',
      price: '₹60',
    },
  ];
  const ListItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 10,
          borderRadius: 15,

          marginHorizontal: 30,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              marginTop: 5,
              marginLeft: 20,

              width: 40,
              height: 40,
              resizeMode: 'contain',
            }}
          />
          <View style={{paddingLeft: 30}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {item.title}
            </Text>
            <Text style={{fontSize: 12}}>{item.time}</Text>
            <Text style={{fontSize: 10, color: '#0091E6'}}>
              {item.time_duration}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 10,
              marginRight: 10,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={DATA} renderItem={ListItem} keyExtractor={e => e.title} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
          padding: 40,
        }}>
        <Image source={require('../../../assets/a.png')} />
        <Image source={require('../../../assets/amazon.png')} />
        <Image source={require('../../../assets/change.png')} />
      </View>
      <TouchableOpacity
        style={{
          width: '90%',
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: 'center',
          marginTop: 10,
          marginStart: 20,
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseVehicleScooty;
