import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const DestinationLocation = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: '#fff',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back"
          size={30}
          color="#000"
          style={{
            marginTop: 16,
          }}
        />
      </TouchableOpacity>

      {/* <View
        style={{
          width: '100%',
          padding: 0,
          borderWidth: 1,
          borderRadius: 50,
          marginTop: 30,
          backgroundColor: 'rgba(245, 192, 1, 0.2)',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="search-outline" size={15} style={{marginLeft: 8}} />
        <TextInput
          placeholder="Search Drop Location"
          style={{
            fontSize: 16,
            fontWeight: '500',
            width: '100%',
          }}></TextInput>
      </View> */}

      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: 'AIzaSyCkVARy-jUojHtiIxcu90g3heAEJDyhqrE',
          language: 'en',
        }}
        onPress={(data, details = null) => console.log(data)}
        onFail={error => console.error(error)}
        requestUrl={{
          url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }}
        styles={{
          container: {
            justifyContent: 'flex-start',
          },
        }}
      />

      <View>
        <Image
          source={require('../../../assets/DropLocation.png')}
          style={{width: '100%', resizeMode: 'contain'}}
        />
        <TouchableOpacity
          style={{
            width: '100%',
            padding: 10,
            borderWidth: 1,
            borderRadius: 50,
            alignItems: 'center',
            top: '25%',
          }}>
          <Text>Search From Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DestinationLocation;
