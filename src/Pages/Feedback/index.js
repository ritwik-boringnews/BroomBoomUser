import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Feedback = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          marginHorizontal: 16,
          paddingVertical: 30,
          marginTop: 20,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/right.png')}
          style={{height: 90, width: 90, resizeMode: 'contain'}}
        />
        <Text style={{fontWeight: '800', fontSize: 16}}>Payment Complete</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          marginHorizontal: 16,
          paddingVertical: 30,
          marginTop: 20,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Text>Rate Your Pilot</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {[1, 2, 3, 4, 5].map(item => {
            if (item <= 4) {
              return <Icon name="star" size={45} color="yellow" key={item}/>;
            } else {
              return <Icon name="star" size={45} color="#E6E6E6" key={item}/>;
            }
          })}
        </View>
      </View>
      <View style={{display: 'flex', alignItems: 'center', marginTop: 30}}>
        <Text style={{color: 'black', fontSize: 18}}>How was the Pilot?</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginHorizontal: 40,
        }}>
        <Pressable
          style={{
            paddingHorizontal: 12,
            marginHorizontal: 40,
            borderRadius: 48,
            elevation: 3,
            backgroundColor: '#FFFBC8',
            borderWidth: 1,
          }}>
          <Text style={{color: 'black'}}>Polite</Text>
        </Pressable>

        <Pressable
          style={{
            paddingHorizontal: 12,
            marginHorizontal: 40,
            borderRadius: 48,
            elevation: 3,
            backgroundColor: '#FFFBC8',
            borderWidth: 1,
          }}>
          <Text style={{color: 'black'}}>Timely</Text>
        </Pressable>

        <Pressable
          style={{
            paddingHorizontal: 12,
            marginHorizontal: 40,
            borderRadius: 48,
            elevation: 3,
            backgroundColor: '#FFFBC8',
            borderWidth: 1,
          }}>
          <Text style={{color: 'black'}}>Friendly</Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 12,
            marginHorizontal: 40,
            borderRadius: 48,
            elevation: 3,
            backgroundColor: '#FFFBC8',
            borderWidth: 1,
          }}>
          <Text style={{color: 'black'}}>Others</Text>
        </Pressable>
      </View>
      <TextInput
        placeholder="Comment(optional)"
        style={{
          backgroundColor: '#E6E6E6',
          marginHorizontal: 30,
          marginTop: 30,
          borderRadius: 6,
          paddingHorizontal: 15,
        }}
      />
      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          marginHorizontal: 50,
          marginTop: 40,
        }}>
        <Text style={{textAlign: 'center', color: 'black'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feedback;
