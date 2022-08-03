
import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView,{Marker,PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = 'AIzaSyAkOoXEDWvsDoAvaQQ3EE36wP97BUf1eNw';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => {
  
  const arambagh = {
    latitude: 22.8764,
    longitude: 87.7049,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const [region, setRegion] = useState(arambagh);
  const destination = {
    latitude: 23.4232,
    longitude: 88.3883,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View>
     <View style={styles.container}>
     <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={arambagh}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
       <MapViewDirections
        origin={arambagh}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
      <Marker
      key={1}
      coordinate={arambagh}
      title="arambagh"
    />
    <Marker
      key={1}
      coordinate={destination}
      title="mayapur"
    />
  
      </MapView>
   <Text style={styles.text}>Current latitude: {region.latitude}</Text>
    <Text style={styles.text}>Current longitude: {region.longitude}</Text>
   </View>
    
   </View>
   )
};