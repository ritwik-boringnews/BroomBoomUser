import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Dimensions,
} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import MyLocation from "react-native-vector-icons/MaterialIcons";
import Geolocation from "@react-native-community/geolocation";
import HambergerHome from "../../Components/HambergerHome";
import EnterDestination from "../../Components/enterDestination";
import ChooseLocation from "../../Components/chooseLocation";
import ChooseVehicleScooty from "../ChooseVehicleScooty";
import PerfectPilot from "../../Components/perfectPilot";
import RatePilot from "../../Components/ratePilot";
import FindingPilot from "../../Components/findingPilot";
import ServiceNotAvailable from "../../Components/serviceNotAvailable";
const GOOGLE_MAPS_APIKEY = "AIzaSyCkVARy-jUojHtiIxcu90g3heAEJDyhqrE";
import {useDispatch} from "react-redux";
import {notify} from "../../../Redux/Actions";

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const {width, height} = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [type, setType] = useState("CHOOSE_DESTINATION");

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info =>
        info &&
        setLocation({
          ...info.coords,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
    );
  }, []);

  const MapType = ({type}) => {
    switch (type) {
      case "CHOOSE_LOCATION":
        return (
          <ChooseLocation
            onConfirmPickup={() => setType("SERVICE_NOT_AVAILABLE")}
          />
        );
      case "CHOOSE_DESTINATION":
        return (
          <EnterDestination
            onConfirmPickup={() => setType("SERVICE_NOT_AVAILABLE")}
          />
        );
      case "CHOOSE_VEHICLE_TYPE":
        return <ChooseVehicleScooty />;
      case "CHOOSE_PERFECT_PILOT":
        return <PerfectPilot />;
      case "RATE_PILOT":
        return <RatePilot />;
      case "FINDING_PILOT":
        return <FindingPilot />;
      case "SERVICE_NOT_AVAILABLE":
        return (
          <ServiceNotAvailable
            onChooseAnotherPlace={() => setType("CHOOSE_DESTINATION")}
          />
        );
    }
  };

  const MarkerType = ({type, location}) => {
    switch (type) {
      case "CAR":
        return (
          <Marker
            key={`marker${1}`}
            coordinate={location}
            image={require("../../../assets/car.png")}
            height={40}
            width={40}
          />
        );
      case "SCOOTY":
        return (
          <Marker
            key={`marker${2}`}
            coordinate={location}
            image={require("../../../assets/bike.png")}
            height={30}
            width={30}
          />
        );
      case "AUTO-RIKSHAW":
        return (
          <Marker
            key={`marker${3}`}
            coordinate={location}
            image={require("../../../assets/rikshaw.png")}
            height={30}
            width={30}
          />
        );
      case "MOTOR-BIKE":
        return (
          <Marker
            key={`marker${4}`}
            coordinate={location}
            image={require("../../../assets/bike.png")}
            height={50}
            width={50}
          />
        );
      case "TOTO":
        return (
          <Marker
            key={`marker${5}`}
            coordinate={location}
            image={require("../../../assets/car.png")}
            height={30}
            width={30}
          />
        );
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getOneTimeLocation();
      } else {
        throw new Error("Location permission denied");
      }
    } catch (err) {
      dispatch(
        notify({
          message: err.message || "Something went wrong",
          notifyType: "error",
        }),
      );
    }
  };
  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
        setLocation({
          ...info.coords,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      },
      error => {
        // See error code charts below.
        dispatch(
          notify({
            message: error.message || "Something went wrong",
            notifyType: "error",
          }),
        );
      },
    );
  };

  return (
    <View style={{flex: 1}}>
      <HambergerHome navigation={navigation} />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={location}
          provider={PROVIDER_GOOGLE}
          region={location}>
          {/* <MarkerType type="MOTOR-BIKE" location={location} /> */}
          <Marker key={`marker${2}`} coordinate={location} />
        </MapView>
        <View
          style={{
            position: "absolute",
            bottom: 40,
            padding: 8,
            borderRadius: 10,
            right: 20,
            backgroundColor: "white",
          }}>
          <TouchableOpacity onPress={getOneTimeLocation}>
            <MyLocation name="my-location" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <MapType type={type} />
    </View>
  );
};
