import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Dimensions,
  Text,
} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import MyLocation from "react-native-vector-icons/MaterialIcons";
import Geolocation from "@react-native-community/geolocation";
import HambergerHome from "../../Components/HambergerHome";
import PickupLocation from "../../Components/pickupLocation";
import ChooseVehicleScooty from "../ChooseVehicleScooty";
import PerfectPilot from "../../Components/perfectPilot";
import RatePilot from "../../Components/ratePilot";
import FindingPilot from "../../Components/findingPilot";
import ServiceNotAvailable from "../../Components/serviceNotAvailable";
import {useDispatch, useSelector} from "react-redux";
import {notify, setModuleActive} from "../../../Redux/Actions";
import Contacts from "react-native-contacts";
import Api, {ApiPilot} from "../../Services";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import io from "socket.io-client";
import {setMapLocationOrigin} from "../../../Redux/Actions/mapActions";
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_API_KEY} from "../../Utility/config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  const {
    auth: {user},
    map,
  } = useSelector(state => state);

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [destination, setDestination] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      if (info) {
        setLocation({
          ...info.coords,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
        getGeoLocationText(info.coords);
      }
    });
  }, []);

  useEffect(() => {
    _changePickupHandler();
    if (map.origin === "") {
      setDestination({
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
      Geolocation.getCurrentPosition(info => {
        if (info) {
          setLocation({
            ...info.coords,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          });
        }
      });
    }
  }, [map.origin]);

  useEffect(() => {
    _changePickupHandler(true);
  }, [map.destination]);

  const _changePickupHandler = async (drop = false) => {
    if (map.origin) {
      const data = await getGeoLocationText(null, false, map.origin);
      if (data) {
        if (drop)
          setDestination({
            latitude: data.latitude,
            longitude: data.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          });
        else
          setLocation({
            latitude: data.latitude,
            longitude: data.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          });
      }
    }
  };

  const getGeoLocationText = async (
    coords = {},
    encode = true,
    location = "",
  ) => {
    try {
      const queryParams = new URLSearchParams({
        latitude: coords?.latitude,
        longitude: coords?.longitude,
        encode,
        location,
      }).toString();
      const response = await ApiPilot.get(`map/get-geo-code?${queryParams}`);
      if (response.status === 1) {
        dispatch(setMapLocationOrigin(response.data.formattedAddress));
        return response.data;
      }
      throw new Error(response.message);
    } catch (error) {
      // dispatch(notify({type: "error", message: error.message}));
      console.log(error.message);
      return null;
    }
  };

  const initRequestRideAndSocketConn = () => {
    if (!location.latitude && !location.longitude) {
      return;
    }
    const newSocket = io(`${localIps}:7000`, {
      path: "/api/socket",
    });
    setSocket(newSocket);
    socket.emit("user_requesting_ride", {
      latitude: location?.latitude,
      longitude: location?.longitude,
      user_id: user.id,
      vehicle_type: "car",
    });
  };

  const MapType = () => {
    switch (map.homeMapUIType) {
      case "PICKUP_LOCATION":
        return <PickupLocation />;
      case "CHOOSE_VEHICLE_TYPE":
        return <ChooseVehicleScooty />;
      case "CHOOSE_PERFECT_PILOT":
        return <PerfectPilot />;
      case "RATE_PILOT": // call, msg, pin UI
        return <RatePilot />;
      case "FINDING_PILOT":
        return <FindingPilot />;
      case "SERVICE_NOT_AVAILABLE":
        return <ServiceNotAvailable />;
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
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      ]);
      console.log("granted", granted);
      if (
        granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        getOneTimeLocation();
      }
      if (
        granted[PermissionsAndroid.PERMISSIONS.READ_CONTACTS] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log("contact access");
        getPhoneContacts();
      } else {
        // throw new Error("Location permission denied");
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

  const checkIfUserHaveContactsLoaded = async () => {
    let isUploadNeeded = false;
    try {
      const response = await Api.get(`/user/get_contacts_uploaded`);
      // data -> 0 // no data in db; 1 // has data in db
      if (response.status === 1) {
        if (response.data == 0) isUploadNeeded = true;
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(
        notify({
          message: error.message || "Something went wrong",
          notifyType: "error",
        }),
      );
    }
    return isUploadNeeded;
  };

  const getPhoneContacts = async () => {
    const isUploadNeeded = await checkIfUserHaveContactsLoaded();
    let phoneContactsList = [];
    if (isUploadNeeded) {
      await Contacts.getAll()
        .then(contacts => {
          // work with contacts
          phoneContactsList = contacts;
        })
        .catch(e => {
          console.log(e);
        });
    }
    if (Array.isArray(phoneContactsList) && phoneContactsList?.length) {
      const payload = [];
      phoneContactsList.map(phone => {
        payload.push({
          name: phone.displayName || phone.givenName || "",
          phone: parseInt(phone?.phoneNumbers[0]?.number) || 0,
          user_id: user.id,
        });
      });
      Api.post("/user/save_phone_contacts", {
        phoneContactsList: payload,
      });
    }
  };

  const getOneTimeLocation = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(data => {
        // The user has accepted to enable the location services
        // data can be :
        //  - "already-enabled" if the location services has been already enabled
        //  - "enabled" if user has clicked on OK button in the popup
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
            // dispatch(
            //   notify({
            //     // message: error.message || "Something went wrong",
            //     notifyType: "error",
            //   }),
            // );
          },
          {enableHighAccuracy: true},
        );
      })
      .catch(err => {
        // The user has not accepted to enable the location services or something went wrong during the process
        // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
        // codes :
        //  - ERR00 : The user has clicked on Cancel button in the popup
        //  - ERR01 : If the Settings change are unavailable
        //  - ERR02 : If the popup has failed to open
        //  - ERR03 : Internal error
      });
  };

  return (
    <View style={{flex: 1}}>
      <HambergerHome navigation={navigation} />
      <View style={styles.container}>
        <MapView
          // mapType={Platform.OS == "android" ? "none" : "standard"}
          style={styles.map}
          initialRegion={location}
          provider={PROVIDER_GOOGLE}
          region={location}>
          <Marker key={`marker2`} coordinate={location} draggable />
          {destination.latitude !== 0 && (
            <Marker key={"marker3"} coordinate={destination} draggable />
          )}
          {/* {location.latitude !== 0 && destination.latitude !== 0 && (
            <MapViewDirections
              origin={location}
              destination={destination}
              apikey={GOOGLE_MAPS_API_KEY}
              strokeWidth={3}
              optimizeWaypoints={true}
              timePrecision={"now"}
              onReady={result => {
                console.log(`Distance: ${result.distance} km`);
                console.log(`Duration: ${result.duration} min.`);
              }}
            />
          )} */}
          {/* <MarkerType type="MOTOR-BIKE" location={location} /> */}
        </MapView>
        <View
          style={{
            position: "absolute",
            bottom: 220,
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
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        {/* <Text onPress={initRequestRideAndSocketConn}>--- REQUEST RIDE----</Text> */}

        <MapType />
      </View>
    </View>
  );
};
