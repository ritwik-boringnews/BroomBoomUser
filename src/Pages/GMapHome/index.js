import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Button,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyLocation from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
const GOOGLE_MAPS_APIKEY = 'AIzaSyCkVARy-jUojHtiIxcu90g3heAEJDyhqrE';

Geolocation.getCurrentPosition(info => console.log(info));
const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ({navigation}) => {
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [locationStatus, setLocationStatus] = useState('');
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
    latitudeDelta: '',
    longitudeDelta: '',
  });
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getOneTimeLocation();
          // subscribeLocationLocation();
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    // requestLocationPermission();
    // return () => {
    //   Geolocation.clearWatch(watchID);
    // };
  }, []);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log(info.coords);
<<<<<<< HEAD
      setLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09,
      });
=======
      // setLocation({
      //   latitude: info.coords.latitude,
      //   longitude: info.coords.longitude,
      //   latitudeDelta: 0.09,
      //   longitudeDelta: 0.09,
      // });
>>>>>>> c296dfdbce061cd1fdfd2f1aaf2c67db4baf3812
    });
    // setLocationStatus('Getting Location ...');
    // Geolocation.getCurrentPosition(
    //   //Will give you the current location
    //   position => {
    //     setLocationStatus('You are Here');

    //     //getting the Longitude from the location json
    //     const currentLongitude = JSON.stringify(position.coords.longitude);
    //     console.log(currentLongitude);
    //     //getting the Latitude from the location json
    //     const currentLatitude = JSON.stringify(position.coords.latitude);

    //     //Setting Longitude state
    //     setCurrentLongitude(currentLongitude);

    //     //Setting Longitude state
    //     setCurrentLatitude(currentLatitude);
    //   },
    //   error => {
    //     setLocationStatus(error.message);
    //   },
    //   {
    //     enableHighAccuracy: false,
    //     timeout: 30000,
    //     maximumAge: 1000,
    //   },
    // );
  };

  // const subscribeLocationLocation = () => {
  //   watchID = Geolocation.watchPosition(
  //     position => {
  //       //Will give you the location on location change

  //       setLocationStatus('You are Here');
  //       console.log(position);

  //       //getting the Longitude from the location json
  //       const currentLongitude = JSON.stringify(position.coords.longitude);

  //       //getting the Latitude from the location json
  //       const currentLatitude = JSON.stringify(position.coords.latitude);

  //       //Setting Longitude state
  //       setCurrentLongitude(currentLongitude);

  //       //Setting Latitude state
  //       setCurrentLatitude(currentLatitude);
  //     },
  //     error => {
  //       setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       maximumAge: 1000,
  //     },
  //   );
  // };

  const arambagh = {
    latitude: 22.8765,
    longitude: 87.791,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const [region, setRegion] = useState(arambagh);
  const destination = {
    latitude: 22.9,
    longitude: 88.39,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 25,
          backgroundColor: 'white',
          zIndex: 1,
          padding: 8,
          borderRadius: 10,
        }}>
        <TouchableOpacity>
          <Ionicons
            name="menu"
            size={20}
            color="black"
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={arambagh}
          onRegionChangeComplete={region => setRegion(region)}
          region={location}>
          <MapViewDirections
            origin={location}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={2}
          />
          {/* <Marker key={`marker${1}`} coordinate={location} title="arambagh" /> */}
          {/* <Marker key={`marker${2}`} coordinate={destination} title="mayapur" /> */}
        </MapView>
        <View
          style={{
            position: 'absolute',
            bottom: 40,
            padding: 8,
            borderRadius: 10,
            right: 20,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity onPress={getOneTimeLocation}>
            <MyLocation name="my-location" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 20,
          borderBottomEndRadius: 0,
          borderBottomStartRadius: 0,
        }}>
        <Text style={{marginTop: 20, marginLeft: 20, color: 'black'}}>
          Select your Pick Up
        </Text>
        <View
          style={{
            backgroundColor: '#C8C8C8',
            marginHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 10,
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/mapIcon.png')}
            style={{marginTop: 3}}
          />
          <Text style={{marginLeft: 10, color: 'black'}}>
            South Dumdum, West Bengal 700028...
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            marginHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 20,
            marginTop: 20,
          }}>
          <Text style={{textAlign: 'center', color: 'black'}}>
            Confirm Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
