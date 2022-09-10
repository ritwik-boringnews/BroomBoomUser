import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {useDispatch, useSelector} from "react-redux";
import {
  setMapLocationDestination,
  setMapLocationOrigin,
  setMapVisibleMarkerType,
} from "../../../Redux/Actions/mapActions";
import {
  GOOGLE_PLACES_AUTO_COMPLETE_DETAILS_QUERY_OBJECT,
  GOOGLE_PLACES_AUTO_COMPLETE_QUERY_OBJECT,
  GOOGLE_PLACES_AUTO_COMPLETE_REQUEST_URL_OBJECT,
} from "../../Utility/config";

const LocationPicker = ({navigation}) => {
  const dispatch = useDispatch();
  const {locInputType} = useSelector(state => state.map);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "flex-start"}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={30}
            color="#000"
            style={{
              marginTop: 16,
            }}
          />
        </TouchableOpacity>
        <View style={{width: "80%"}}>
          <Text
            style={{
              color: "black",
              fontWeight: "600",
              marginTop: 22,
              marginLeft: 5,
              fontSize: 18,
              textAlign: "center",
              marginBottom: 20,
            }}>
            {`Choose ${
              locInputType === "origin" ? "a pick up" : "destination"
            }`}
          </Text>
        </View>
      </View>

      <GooglePlacesAutocomplete
        autoFocus
        GooglePlacesDetailsQuery={
          GOOGLE_PLACES_AUTO_COMPLETE_DETAILS_QUERY_OBJECT
        }
        fetchDetails={true} // you need this to fetch the details object onPress
        placeholder="Search"
        query={GOOGLE_PLACES_AUTO_COMPLETE_QUERY_OBJECT}
        onPress={(data, details = null) => {
          // console.log("data", data);
          // console.log("details", details);
          const payload = {
            latitude: details?.geometry?.location?.lat || 0,
            longitude: details?.geometry?.location?.lng || 0,
            text: data.description || "",
          };
          if (locInputType === "origin") {
            dispatch(setMapLocationOrigin(payload));
          } else {
            // only if destination is selected from autocomplete, change the
            // map ui to destination context
            dispatch(setMapLocationDestination(payload));
            dispatch(setMapVisibleMarkerType("destination"));
          }
          navigation.goBack();
        }}
        requestUrl={GOOGLE_PLACES_AUTO_COMPLETE_REQUEST_URL_OBJECT}
        onFail={error => console.error(error)}
        styles={{
          listView: {backgroundColor: "white", color: "black"},
          row: {
            backgroundColor: "white",
            color: "black",
          },
          description: {
            color: "black",
            backgroundColor: "white",
          },
          predefinedPlacesDescription: {
            color: "black",
            backgroundColor: "white",
          },
        }}
        textInputProps={{
          placeholderTextColor: "#999",
          color: "black",
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 20,
        }}
      />
      <View style={{alignItems: "flex-end"}}>
        <Image
          source={require("../../../assets/DropLocation.png")}
          style={{width: "100%", resizeMode: "contain"}}
        />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
    color: "black",
  },
});
