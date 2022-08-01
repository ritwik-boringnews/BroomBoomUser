import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const RideDetails = () => {
  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <Image
          source={require('../../../assets/map.png')}
          style={{width: '100%', borderRadius: 10}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={{color: 'black'}}>11 MAY 2022,14:53</Text>
        <Text style={{color: 'green', fontWeight: 'bold', paddingLeft: 50}}>
          COMPLETE
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 30}}>
        <View style={{paddingRight: 5}}>
          <Text>1540</Text>
          <Text style={{marginTop: 65}}>6789</Text>
        </View>
        <View>
          <Image source={require('../../../assets/ic_route.png')} />
        </View>
        <View style={{paddingLeft: 5}}>
          <Text>Kumar Asutosh Institution (Main)</Text>
          <Text style={{marginTop: 64}}>Dum Dum Airport Gate No 1</Text>
        </View>
      </View>
      <Text
        style={{fontSize: 18, marginLeft: 25, marginTop: 10, color: 'black'}}>
        Pilot
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          margin: 20,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <View>
          <Image
            source={require('../../../assets/user.png')}
            style={{height: 30, width: 30, resizeMode: 'contain'}}
          />
        </View>
        <View>
          <Text style={{color: 'black'}}>Ramesh</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Icon name="star" size={15} color="yellow" />
            <Text style={{paddingLeft: 4, color: 'black'}}>4.5</Text>
          </View>
        </View>
        <View>
          <Text style={{color: 'black'}}>Two wheeler</Text>
          <Text style={{marginTop: 3, color: 'blue'}}>Pulsar 220</Text>
        </View>
        <View style={{paddingTop: 12}}>
          <Icon name="right" size={15} />
        </View>
      </View>
      <Text
        style={{
          marginLeft: 22,
          color: 'black',
          fontSize: 18,
        }}>
        Payment
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          padding: 40,
        }}>
        <Image source={require('../../../assets/a.png')} />
        <Image source={require('../../../assets/amazon.png')} />
        <Text>₹280</Text>
      </View>
      <TouchableOpacity
        style={{
          width: '90%',
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: 'center',
          marginStart: 20,
          marginBottom: 20,
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Feedback</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RideDetails;
