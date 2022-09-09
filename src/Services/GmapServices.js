import Geolocation from "@react-native-community/geolocation";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import {notify} from "../../Redux/Actions";
import {store} from "../../Redux/store";
import {GOOGLE_MAPS_API_KEY} from "../Utility/config";

/**
 * Reverse geocoding status codes
 * _______________________________
"OK" indicates that no errors occurred and at least one address was returned.
"ZERO_RESULTS" indicates that the reverse geocoding was successful but returned no results. This may occur if the geocoder was passed a latlng in a remote location.
"OVER_QUERY_LIMIT" indicates that you are over your quota.
"REQUEST_DENIED" indicates that the request was denied. Possibly because the request includes a result_type or location_type parameter but does not include an API key.
"INVALID_REQUEST" generally indicates one of the following:
The query (address, components or latlng) is missing.
An invalid result_type or location_type was given.
"UNKNOWN_ERROR" indicates that the request could not be processed due to a server error. The request may succeed if you try again. 
 */

const getRevGeoCoding = async ({latitude, longitude}) => {
  console.log("getRevGeoCoding", {latitude, longitude});
  try {
    let f = await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        latitude +
        "," +
        longitude +
        "&key=" +
        GOOGLE_MAPS_API_KEY,
    );
    f = await f.json();
    console.log(f, "f");
    if (f.status === "OK") {
      f = f?.results[0]?.formatted_address;
    } else {
      f = "";
    }
    return f;
  } catch (e) {
    console.log(e, e.message);
  }
};

const getCurrentLocation = new Promise((resolve, reject) => {
  Geolocation.getCurrentPosition(
    info => {
      console.log("getOneTimeLocation", JSON.stringify(info));
      return resolve(info.coords);
    },
    async error => {
      console.log("getOneTimeLocation", error.message);
      await getOneTimeLocation();
      // reject(error);
      // if (error.code === 3) locateCurrentPosition(false);
    },
    {enableHighAccuracy: true, highAccuracyEnabled: true, timeout: 2000},
  );

  /**
   * @return
   *
   mock_info_data: {"mocked":false,"timestamp":1662403302461,"coords":{"speed":0,"heading":0,"altitude":-82.7,"accuracy":6.900000095367432,"longitude":88.42332666666668,"latitude":22.651828333333334}}
   **/
});

const getOneTimeLocation = new Promise((resolve, reject) => {
  RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000,
  })
    .then(async data => {
      // The user has accepted to enable the location services
      // data can be :
      //  - "already-enabled" if the location services has been already enabled
      //  - "enabled" if user has clicked on OK button in the popup
      await getCurrentLocation();
      return resolve(data);
    })
    .catch(err => {
      console.log("getOneTimeLocation", err);
      // reject(err);
      // The user has not accepted to enable the location services or something went wrong during the process
      // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
      // codes :
      //  - ERR00 : The user has clicked on Cancel button in the popup
      //  - ERR01 : If the Settings change are unavailable
      //  - ERR02 : If the popup has failed to open
      //  - ERR03 : Internal error
    });
});

export {getRevGeoCoding, getCurrentLocation};
