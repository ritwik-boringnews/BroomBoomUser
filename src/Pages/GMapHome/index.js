import React, {useEffect} from "react";
import {
  View,
  TouchableOpacity,
  PermissionsAndroid,
  StyleSheet,
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
import {notify} from "../../../Redux/Actions";
import Api from "../../Services";
import {getRevGeoCoding} from "../../Services/GmapServices";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import {
  setMapLocationDestination,
  setMapLocationOrigin,
} from "../../../Redux/Actions/mapActions";
import {GOOGLE_MAPS_API_KEY} from "../../Utility/config";
import MapViewDirections from "react-native-maps-directions";
/**
 * ! permission issue if approximate selected {todo}
 *  LOG  getOneTimeLocation {"PERMISSION_DENIED": 1, "POSITION_UNAVAILABLE": 2, "TIMEOUT": 3, "code": 1, "message": "Location permission was not granted."}
 */
export default ({navigation}) => {
  const dispatch = useDispatch();
  const {map} = useSelector(state => state);

  useEffect(() => {
    locateCurrentPosition();
  }, []);

  const updateLatLngInStore = async ({type, latitude, longitude, text}) => {
    let payload = type === "origin" ? {...map.origin} : {...map.destination};
    if (!text) {
      const geoRevText = await getRevGeoCoding({
        latitude,
        longitude,
      });
      console.log("geoRevText", geoRevText);
      payload = {...payload, latitude, longitude, text: geoRevText};
    } else {
      payload = {...payload, latitude, longitude, text};
    }

    console.log(payload, "payload");
    if (type === "destination") {
      dispatch(setMapLocationDestination(payload));
      return;
    }
    //! default should be origin all time
    dispatch(setMapLocationOrigin(payload));
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

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted) {
        console.log("You can use the ACCESS_FINE_LOCATION");
        getOneTimeLocation();
      } else {
        console.log("ACCESS_FINE_LOCATION permission denied");
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
        locateCurrentPosition();
      })
      .catch(err => {
        console.log("getOneTimeLocation", err);
        // The user has not accepted to enable the location services or something went wrong during the process
        // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
        // codes :
        //  - ERR00 : The user has clicked on Cancel button in the popup
        //  - ERR01 : If the Settings change are unavailable
        //  - ERR02 : If the popup has failed to open
        //  - ERR03 : Internal error
      });
  };

  const locateCurrentPosition = async () => {
    Geolocation.getCurrentPosition(
      info => {
        console.log("getOneTimeLocation", JSON.stringify(info));
        updateLatLngInStore({...info.coords});
      },
      error => {
        console.log("getOneTimeLocation", error);
      },
      {enableHighAccuracy: true},
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <HambergerHome navigation={navigation} />
      <View style={styles.container}>
        <MapView
          initialRegion={map.origin}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          // region={
          //   map.locInputType === "origin" || map.destination.text === ""
          //     ? map.origin
          //     : map.destination
          // }
          //! should be: union of destination and origin {todo}
          region={
            map.visibleMarkerType === "origin" ? map.origin : map.destination
          }>
          {(map.visibleMarkerType === "origin" ||
            map.visibleMarkerType === "both") && (
            <Marker
              coordinate={map.origin}
              key={`marker_origin`}
              draggable={map.visibleMarkerType !== "both"}
              onDragEnd={position => {
                console.log("position", position.nativeEvent.coordinate);
                updateLatLngInStore({
                  type: "origin",
                  ...position.nativeEvent.coordinate,
                });
              }}
            />
          )}

          {(map.visibleMarkerType === "destination" ||
            map.visibleMarkerType === "both") && (
            <Marker
              coordinate={map.destination}
              key={`marker_destination`}
              draggable={map.visibleMarkerType !== "both"}
              onDragEnd={position => {
                console.log("position", position.nativeEvent.coordinate);
                updateLatLngInStore({
                  type: "destination",
                  ...position.nativeEvent.coordinate,
                });
              }}
              pinColor={"green"}
            />
          )}
          {map.visibleMarkerType === "both" && (
            <MapViewDirections
              origin={map.origin}
              destination={map.destination}
              apikey={GOOGLE_MAPS_API_KEY}
              strokeWidth={2}
              strokeColor={"#000"}
              mode="DRIVING" // "DRIVING", "BICYCLING", "WALKING" "TRANSIT"
              onError={errorMessage => {
                console.log("GOT AN ERROR", errorMessage);
                //! {todo} need to handle -> Error on GMAPS route request: ZERO_RESULTS
              }}
            />
          )}
        </MapView>

        {map.locInputType !== "destination" && (
          <View
            style={{
              position: "absolute",
              bottom: 220,
              padding: 8,
              borderRadius: 10,
              right: 20,
              backgroundColor: "white",
            }}>
            <TouchableOpacity onPress={locateCurrentPosition}>
              <MyLocation name="my-location" size={20} color="black" />
            </TouchableOpacity>
          </View>
        )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
