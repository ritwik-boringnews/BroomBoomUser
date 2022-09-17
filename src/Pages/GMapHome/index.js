import React, {createRef, useEffect} from "react";
import {View, PermissionsAndroid} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import HamburgerHome from "../../Components/HamburgerHome";
import {useDispatch, useSelector} from "react-redux";
import {notify} from "../../../Redux/Actions";
import {getRevGeoCoding} from "../../Services/GmapServices";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import {
  setMapLocationDestination,
  setMapLocationOrigin,
} from "../../../Redux/Actions/mapActions";
import {GOOGLE_MAPS_API_KEY} from "../../Utility/config";
import MapViewDirections from "react-native-maps-directions";
import GMapHomeBackBtn from "../../Components/GMapHomeBackBtn";
import {
  REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS,
  VEHICLE_TYPE_OPTIONS,
} from "../../Utility/optionTypes";
import OverlayMapUI from "./components/OverlayMapUI";
import io from "socket.io-client";
import {
  socketUrl,
  SOCKET_ENDPOINTS,
  SOCKET_INIT_OPTIONS_CONFIG,
} from "../../Services";
import styles from "./Styles";
import LocateCurrentPosPointer from "./components/LocateCurrentPosPointer";
/**
 * ! permission issue if approximate selected {todo}
 *  LOG  getOneTimeLocation {"PERMISSION_DENIED": 1, "POSITION_UNAVAILABLE": 2, "TIMEOUT": 3, "code": 1, "message": "Location permission was not granted."}
 */
export default ({navigation}) => {
  const dispatch = useDispatch();
  const {map, auth} = useSelector(state => state);
  const actionSheetRef = createRef();
  const [socket, setSocket] = React.useState(null);

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

  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      info => {
        console.log("getOneTimeLocation", JSON.stringify(info));
        updateLatLngInStore({...info.coords});
      },
      error => {
        console.log("getOneTimeLocation", error.message);
        getOneTimeLocation();
      },
      {enableHighAccuracy: true, highAccuracyEnabled: true, timeout: 2000},
    );
  };

  useEffect(() => {
    actionSheetRef.current?.show();
  }, []);

  useEffect(() => {
    const newSocket = io(socketUrl, SOCKET_INIT_OPTIONS_CONFIG);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    let messageListener;
    if (socket) {
      messageListener = message => {
        console.log("=== LISTENER ==== ", message);
        // setMessages((prevMessages) => {
        //   const newMessages = {...prevMessages};
        //   newMessages[message.id] = message;
        //   return newMessages;
        // });
      };
      socket.on(SOCKET_ENDPOINTS.PILOT_RIDE_INCOMING_NOTIF, messageListener);
    }
    return () => {
      if (socket) {
        socket.off(SOCKET_ENDPOINTS.PILOT_RIDE_INCOMING_NOTIF, messageListener);
      }
    };
  }, [socket]);

  const initSocketOnRequestPilot = () => {
    const payload = {
      origin: {
        longitude: map.origin.longitude,
        latitude: map.origin.latitude,
      },
      // longitude: "88.27036467019616",
      // latitude: "22.570822400726108",
      longitude: map.origin.longitude,
      latitude: map.origin.latitude,
      user_id: auth.user.id,
      vehicle_type: VEHICLE_TYPE_OPTIONS.CAR,
    };
    console.log("payload", payload);
    socket.emit(SOCKET_ENDPOINTS.userRequestingRide, JSON.stringify(payload));
  };

  return (
    <>
      <HamburgerHome
        navigation={navigation}
        initSocket={() => initSocketOnRequestPilot()}
      />
      <GMapHomeBackBtn />
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
            map.visibleMarkerType ===
            REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS.ORIGIN
              ? map.origin
              : map.destination
          }>
          {(map.visibleMarkerType ===
            REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS.ORIGIN ||
            map.visibleMarkerType ===
              REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS.BOTH) && (
            <Marker
              coordinate={map.origin}
              key={`marker_origin`}
              draggable
              // draggable={map.visibleMarkerType !== "both"}
              onDragEnd={position => {
                console.log("position", position.nativeEvent.coordinate);
                updateLatLngInStore({
                  type: "origin",
                  ...position.nativeEvent.coordinate,
                });
              }}
            />
          )}

          {(map.visibleMarkerType ===
            REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS.DESTINATION ||
            map.visibleMarkerType ===
              REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS.BOTH) && (
            <Marker
              coordinate={map.destination}
              key={`marker_destination`}
              draggable
              // draggable={map.visibleMarkerType !== "both"}
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
          {map.visibleMarkerType ===
            REDUX_HOME_MAP_VISIBLE_MARKER_TYPE_OPTIONS.BOTH && (
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
          <LocateCurrentPosPointer onPress={locateCurrentPosition} />
        )}
      </View>
      <OverlayMapUI />
    </>
  );
};
