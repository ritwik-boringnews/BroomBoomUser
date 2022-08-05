import { View, Text, Image } from 'react-native';
import React from 'react';

const PilotDetails = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <Image
          source={require('../../../assets/UserImage.png')}
          style={{ height: 50, width: 50 }}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ color: 'black', fontSize: 17 }}>Ramesh Kr Paul</Text>
          <Text style={{ color: 'blue' }}>Pulsar 220</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-evenly',
          paddingHorizontal: 60,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            paddingHorizontal: 30,
            paddingVertical: 5,
            borderRadius: 5,
          }}>
          <Image
            source={require('../../../assets/star.png')}
            style={{
              height: 30,
              width: 30,
              marginBottom: 5
            }}
          />
          <Text style={{color: '#333', fontWeight: '700'}}>4.5</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 5,
          }}>
          <Image
            source={require('../../../assets/aeroplane.png')}
            style={{
              height:30,
              width: 30,
              marginBottom: 5
            }}
          />
          <Text style={{color: '#333',fontWeight: '500'}}>1126</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 5,
          }}>
          <Image
            source={require('../../../assets/Subtract.png')}
            style={{
              height: 30,
              width: 30,
              marginBottom: 5
            }}
          />
          <Text style={{ fontSize: 16,color: '#333',fontWeight: '500'}}>1 years</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 50,

          borderRadius: 10,
          marginTop: 20,
        }}>
        <View style={{ paddingLeft: 10, marginTop: 19, marginBottom: 20 }}>
          <Text style={{ fontSize: 11, color: 'grey' }}>Member since</Text>
          <Text style={{ marginTop: 5, color: 'black' }}>10.04.2021</Text>
          <View
            style={{
              marginHorizontal: 3,
              height: 1,
              width: '80%',
              backgroundColor: 'grey',
              marginBottom: 10,
            }}
          />
          <Text style={{ fontSize: 11, color: 'grey' }}>Vehicle Type</Text>
          <Text style={{ marginTop: 5, color: 'black' }}>Motorbike</Text>
          <View
            style={{
              marginHorizontal: 3,
              height: 1,
              width: '80%',
              backgroundColor: 'grey',
              marginBottom: 10,
            }}
          />
          <Text style={{ fontSize: 11, color: 'grey' }}>Vehicle number</Text>
          <Text style={{ marginTop: 5, color: 'black' }}>WB5543</Text>
          <View
            style={{
              marginHorizontal: 3,
              height: 1,
              width: '80%',
              backgroundColor: 'grey',
              marginBottom: 10,
            }}
          />
          <Text style={{ fontSize: 11, color: 'grey' }}>Pilot ID number</Text>
          <Text style={{ marginTop: 5, color: 'black' }}>KGB541</Text>
        </View>
      </View>
    </View>
  );
};

export default PilotDetails;
