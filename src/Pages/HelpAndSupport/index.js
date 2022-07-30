import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const HelpAndSupport = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: 30}}>
        <View
          style={{
            width: '100%',

            borderRadius: 50,
            marginTop: 30,
            backgroundColor: 'rgba(245, 192, 1, 0.2)',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="search-outline" size={15} style={{marginLeft: 8}} />
          <TextInput
            placeholder="Search issue"
            style={{
              fontSize: 16,
              fontWeight: '500',
            }}></TextInput>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 50,
          justifyContent: 'space-between',
          paddingHorizontal: 30,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/help1.png')}
            style={{height: 45, width: 45, marginBottom: 5}}
          />
          <Text style={{textAlign: 'center'}}>FAQs{'\n'}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/help2.png')}
            style={{height: 45, width: 45, marginBottom: 5}}
          />
          <Text style={{textAlign: 'center'}}>Payment {'\n'}& Wallets </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/help3.png')}
            style={{height: 45, width: 45, marginBottom: 5}}
          />
          <Text style={{textAlign: 'center'}}>Contact {'\n'} Us</Text>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 20, width: '100%'}}>
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',

            color: 'black',
          }}>
          For more information read
          <Text style={{color: '#347EEA'}}> Terms & Conditions </Text>
          and <Text style={{color: '#347EEA'}}> Privacy Policies </Text>
          of BroomBoom Pilot
        </Text>
      </View>
    </View>
  );
};

export default HelpAndSupport;
