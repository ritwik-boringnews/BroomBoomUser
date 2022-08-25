import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import locationContext from '../../../context/locationContext';

const DestinationLocation = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: '#fff',
      color: 'black',
    },
  });
  const {setLoc} = useContext(locationContext);
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

      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: 'AIzaSyCkVARy-jUojHtiIxcu90g3heAEJDyhqrE',
          language: 'en',
        }}
        onPress={(data, details = null) => {
          setLoc(data.description);
          navigation.goBack();
        }}
        onFail={error => console.error(error)}
        requestUrl={{
          url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }}
        textInputProps={{
          placeholderTextColor: '#999',
          color: 'black',
        }}
        styles={{
          listView: {backgroundColor: 'white', color: 'black'},
          row: {backgroundColor: 'white', color: 'black'},
          description: {color: 'black', backgroundColor: 'white'},
          predefinedPlacesDescription: {
            color: 'black',
            backgroundColor: 'white',
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
