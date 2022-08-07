import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Ionicons from 'react-native-vector-icons/Ionicons';
const GOOGLE_MAPS_APIKEY = 'AIzaSyCkVARy-jUojHtiIxcu90g3heAEJDyhqrE';

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ({navigation}) => {
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
          <Ionicons name="menu" size={20} color="black" onPress={() => navigation.openDrawer()} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          //specify our coordinates.
          initialRegion={arambagh}
          onRegionChangeComplete={region => setRegion(region)}>
          <MapViewDirections
            origin={arambagh}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />
          <Marker key={`marker${1}`} coordinate={arambagh} title="arambagh" />
          <Marker key={`marker${2}`} coordinate={destination} title="mayapur" />
        </MapView>
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
