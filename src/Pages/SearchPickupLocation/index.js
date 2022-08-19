import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const SearchPickupLocation = () => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 40,
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  return (
    <View style={styles.container}>
      <Icon
        name="arrow-back"
        size={30}
        color="#000"
        style={{
          marginTop: 16,
        }}
      />
      <View
        style={{
          width: '100%',
          padding: 8,
          borderWidth: 1,
          borderRadius: 50,
          marginTop: 30,
          backgroundColor: 'rgba(245, 192, 1, 0.2)',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="search-outline" size={15} style={{marginLeft: 8}} />
        <TextInput
          placeholder="Search Pickup Location"
          style={{
            fontSize: 16,
            fontWeight: '500',
          }}></TextInput>
      </View>

      <Text
        style={{
          color: 'black',
          marginTop: 15,
          fontWeight: '500',
          fontSize: 16,
        }}>
        History
      </Text>
      <View>
        <Text
          style={{
            fontWeight: '700',
            color: 'black',
            marginTop: 15,
            fontSize: 16,
          }}>
          South Dumdum,West Bengal 700028
        </Text>
        <Text style={{marginTop: 10, fontWeight: '700', fontSize: 14}}>
          Dum Dum Junction,Dum Dum Junction
        </Text>
        <Text
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#828282',
            paddingBottom: 7,
            fontSize: 14,
          }}>
          Railway Station Kolkata West Bengal
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: '500',
            color: 'black',
            marginTop: 15,
          }}>
          South Dumdum,West Bengal 700028
        </Text>
        <Text style={{marginTop: 10, fontSize: 14}}>
          Dum Dum Junction,Dum Dum Junction
        </Text>
        <Text
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#828282',
            paddingBottom: 7,
            fontSize: 14,
          }}>
          Railway Station Kolkata West Bengal
        </Text>
      </View>
      <View>
        <Text style={{fontWeight: '500', color: 'black', marginTop: 16}}>
          South Dumdum,West Bengal 700028
        </Text>
        <Text style={{marginTop: 10, fontSize: 14}}>
          Dum Dum Junction,Dum Dum Junction
        </Text>
        <Text
          style={{
            paddingBottom: 7,
            fontSize: 14,
            fontWeight: '700',
          }}>
          Railway Station Kolkata West Bengal
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: 'center',
          top: '25%',
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Select From Map
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchPickupLocation;
