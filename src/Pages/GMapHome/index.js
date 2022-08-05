
import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView,{Marker,PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = 'AIzaSyCkVARy-jUojHtiIxcu90g3heAEJDyhqrE';

const styles = StyleSheet.create({
 container: {
   flex:2
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => {
  
  const arambagh = {
    latitude: 22.8765,
    longitude: 87.7910,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const [region, setRegion] = useState(arambagh);
  const destination = {
    latitude: 22.90,
    longitude: 88.39,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={{flex:1}}>
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
      key={`marker${1}`}
      coordinate={arambagh}
      title="arambagh"
    />
    <Marker
      key={`marker${2}`}
      coordinate={destination}
      title="mayapur"
    />
  
      </MapView>
 
   </View>
    <View style={{flex:1}}>
      <Text style={{}}>sayeda</Text>
    </View>
   </View>
   )
};