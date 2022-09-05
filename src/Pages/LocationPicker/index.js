import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {useDispatch, useSelector} from "react-redux";
import {
  setMapLocationDestination,
  setMapLocationOrigin,
} from "../../../Redux/Actions/mapActions";

const LocationPicker = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: "white",
      color: "black",
    },
  });
  const dispatch = useDispatch();
  const {origin, locInputType, destination} = useSelector(state => state.map);

  // const config = useSelector(state => state.config);
  const [searchText, setSearchText] = useState(null);
  console.log("searchText", searchText);
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
        placeholder="Search"
        query={{
          key: "AIzaSyCkVARy-jUojHtiIxcu90g3heAEJDyhqrE",
          language: "en",
        }}
        onPress={(data, details = null) => {
          locInputType === "origin"
            ? dispatch(setMapLocationOrigin(data.description))
            : dispatch(setMapLocationDestination(data.description));
          navigation.goBack();
        }}
        onFail={error => console.error(error)}
        requestUrl={{
          url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
          useOnPlatform: "web",
        }}
        textInputProps={{
          placeholderTextColor: "#999",
          color: "black",
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 20,
          onChangeText: text => {
            setSearchText(text);
          },
        }}
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
      />
      {!searchText ? (
        <View style={{alignItems: "flex-end"}}>
          <Image
            source={require("../../../assets/DropLocation.png")}
            style={{width: "100%", resizeMode: "contain"}}
          />
          {/* <TouchableOpacity
          style={{
            width: "100%",
            padding: 10,
            borderWidth: 1,
            borderRadius: 50,
            alignItems: "center",
          }}>
          <Text>Search From Map</Text>
        </TouchableOpacity> */}
        </View>
      ) : null}
    </View>
  );
};

export default LocationPicker;
