import React, {useState} from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Ionicons from "react-native-vector-icons/Ionicons";
import Star from "react-native-vector-icons/AntDesign";
import {TextInput} from "react-native-gesture-handler";

const GOOGLE_MAPS_APIKEY = "AIzaSyCkVARy-jUojHtiIxcu90g3heAEJDyhqrE";

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const EnterDestination = ({navigation}) => {
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
    <View style={{flex: 1, backgroundColor: "white"}}>
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 25,
          backgroundColor: "white",
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
          backgroundColor: "white",
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: "#808080",
          margin: 4,
        }}>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            color: "black",
          }}>
          Start your ride with PIN : 2030
        </Text>
        <View
          style={{borderWidth: 0.5, marginTop: 10, borderColor: "#808080"}}
        />
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          <Image
            source={require("../../../assets/user.png")}
            style={{
              height: 30,
              width: 30,
              resizeMode: "contain",
              marginTop: 8,
            }}
          />
          <View>
            <Text>Ramesh</Text>
            <View style={{flexDirection: "row", marginTop: 5}}>
              <Star name="star" color="#FFBF00" size={20} />
              <Text style={{marginLeft: 4, marginTop: 3}}>4.5</Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 2,
                textAlign: "center",
                borderColor: "#808080",
              }}>
              D66LSCDSDSD
            </Text>
            <Text style={{marginTop: 5, color: "#1E90FF"}}>Pulsar 220</Text>
          </View>
        </View>
        <View style={{flexDirection: "row", marginLeft: 20}}>
          <TextInput
            placeholder="Any pickup instructions ?"
            style={{
              backgroundColor: "#DCDCDC",
              paddingRight: 70,
              borderRadius: 10,
              marginTop: 20,
              paddingLeft: 10,
            }}
          />
          <Image
            source={require("../../../assets/message.png")}
            style={{
              height: 45,
              width: 45,
              resizeMode: "contain",
              marginTop: 25,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default EnterDestination;
