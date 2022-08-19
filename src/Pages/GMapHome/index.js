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
import MapView, {Marker, PROVIDER_GOOGLE, Circle} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import MyLocation from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import HambergerHome from '../../Components/HambergerHome';
import EnterDestination from '../../Components/enterDestination';
import ChooseLocation from '../../Components/chooseLocation';
import ChooseVehicleScooty from '../ChooseVehicleScooty';
import PerfectPilot from '../../Components/perfectPilot';
import RatePilot from '../../Components/ratePilot';
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

const arambagh = {
  latitude: 22.8765,
  longitude: 87.791,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};
const mayapur = {
  latitude: 23.4232,
  longitude: 88.3883,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default ({navigation}) => {
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [locationStatus, setLocationStatus] = useState('');
  const [location, setLocation] = useState(arambagh);

  const MapType = ({type}) => {
    switch (type) {
      case 'CHOOSE_LOCATION':
        return <ChooseLocation />;
      case 'CHOOSE_DESTINATION':
        return <EnterDestination />;
      case 'CHOOSE_VEHICLE_TYPE':
        return <ChooseVehicleScooty />;
      case 'CHOOSE_PERFECT_PILOT':
        return <PerfectPilot />;
      case 'RATE_PILOT':
        return <RatePilot />;
    }
  };

  const MarkerType = ({type, location}) => {
    switch (type) {
      case 'CAR':
        return (
          <Marker
            key={`marker${1}`}
            coordinate={location}
            title="arambagh"
            image={require('../../../assets/car.png')}
            height={40}
            width={40}
          />
        );
      case 'SCOOTY':
        return (
          <Marker
            key={`marker${2}`}
            coordinate={location}
            title="arambagh"
            image={require('../../../assets/bike.png')}
            height={30}
            width={30}
          />
        );
      case 'AUTO-RIKSHAW':
        return (
          <Marker
            key={`marker${3}`}
            coordinate={location}
            title="arambagh"
            image={require('../../../assets/rikshaw.png')}
            height={30}
            width={30}
          />
        );
      case 'MOTOR-BIKE':
        return (
          <Marker
            key={`marker${4}`}
            coordinate={location}
            title="arambagh"
            image={require('../../../assets/bike.png')}
            height={50}
            width={50}
          />
        );
      case 'TOTO':
        return (
          <Marker
            key={`marker${5}`}
            coordinate={location}
            title="arambagh"
            image={require('../../../assets/car.png')}
            height={30}
            width={30}
          />
        );
    }
  };

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
      setLocation(mayapur);
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

  const [region, setRegion] = useState(arambagh);
  const destination = {
    latitude: 22.9,
    longitude: 88.39,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={{flex: 1}}>
      <HambergerHome navigation={navigation} />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={arambagh}
          // onRegionChangeComplete={region => setRegion(region)}
          region={location}>
          {location && destination.latitude && destination.longitude && (
            <MapViewDirections
              origin={location}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={2}
            />
          )}
          <Circle center={location} radius={500} fillColor="#ffffb77a" />

          <MarkerType type="MOTOR-BIKE" location={location} />
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

      <MapType type="CHOOSE_LOCATION" />
    </View>
  );
};
