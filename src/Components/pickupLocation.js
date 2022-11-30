import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {
  backToOrigin,
  setGmapHomeBackBtn,
  setLocInputType,
  setMapHomeUIType,
  setMapVisibleMarkerType,
} from "../../Redux/Actions/mapActions";
import {notify} from "../../Redux/Actions";
import {primaryColor} from "../Constants";
import Contacts from "react-native-contacts";
import Api from "../Services";
import {REDUX_HOME_MAP_TYPE_OPTIONS} from "../Utility/optionTypes";

/**
 * common component : pickupUI origin/destination
 * @returns
 */
const PickupLocation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {origin, locInputType, destination} = useSelector(state => state.map);

  const onConfirmLocations = async () => {
    if (locInputType === "origin" && origin.text === "") {
      dispatch(
        notify({
          type: "error",
          message: "Please select a pickup location",
        }),
      );
      return;
    }
    if (locInputType === "origin" && origin.text !== "") {
      dispatch(setLocInputType("destination"));
      dispatch(setGmapHomeBackBtn(true));
      return;
    }
    if (locInputType === "destination" && destination.text === "") {
      dispatch(
        notify({
          type: "error",
          message: "Please select a destination",
        }),
      );
      return;
    }
    const permissionCheck = await requestContactsPermission();
    if (!permissionCheck) {
      return;
    }
    const isContactAlreadyUploaded = await checkIfUserHaveContactsLoaded();
    if (!isContactAlreadyUploaded) {
      //! {todo} upload contacts
    }
    // console.log(
    //   "permissionCheck",
    //   permissionCheck,
    //   "isUploadNeed",
    //   isUploadNeed,
    // );

    //! web booking {todo}
    navigation.navigate("WebBooking", {
      destination: destination.text,
      origin: origin.text,
    });
    return;

    if (locInputType === "destination" && destination.text !== "") {
      // origin and destination location selection done
      // now move to service not available
      // dispatch(setMapHomeUIType("SERVICE_NOT_AVAILABLE"));
      dispatch(
        setMapHomeUIType(REDUX_HOME_MAP_TYPE_OPTIONS.CHOOSE_VEHICLE_TYPE),
      );
      // show both the Marker as origin and destination location done in selection
      dispatch(setMapVisibleMarkerType("both"));
      return;
    }
  };

  const requestContactsPermission = async () => {
    let permissionCheck = false;
    try {
      // const grantedCheck = await PermissionsAndroid.check(
      //   PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      // );
      // console.log("grantedCheck", grantedCheck);
      await Contacts.checkPermission().then(async res => {
        console.log("res", res);
        if (res === "denied") {
          Alert.alert(
            "Contact Permission",
            "Tap Settings > Permission & turn Contacts on.\n\nAllow contact permission.",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {text: "Allow", onPress: () => Linking.openSettings()},
            ],
          );
        } else if (res === "authorized") {
          permissionCheck = true;
          await Contacts.getAll()
            .then(contacts => {
              // work with contacts
              console.log("contacts", contacts);
            })
            .catch(e => {
              console.log(e);
            });
        }
      });
      return permissionCheck;
      // console.log("grantedCheck", grantedCheck);
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      // );
      // if (granted) {
      //   console.log("You can use the READ_CONTACTS");
      //   getPhoneContacts();
      // } else {
      //   console.log("READ_CONTACTS permission denied");
      // }
    } catch (err) {
      dispatch(
        notify({
          message: err?.message || "Something went wrong",
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

  return (
    <View
      style={{
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 25,
        paddingHorizontal: 20,
      }}>
      <Text
        style={{
          padding: 10,
          color: "black",
          fontSize: 15,
          fontWeight: "500",
        }}>
        {`${locInputType === "origin" ? "Select your Pick Up" : ""}`}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#E0E0E0",
          paddingHorizontal: 8,
          paddingVertical: 5,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("LocationPicker");
        }}>
        <Image
          source={require("../../assets/mapIcon.png")}
          style={{marginLeft: 4}}
        />
        <Text
          style={{marginLeft: 10, color: "black", fontWeight: "bold", flex: 1}}>
          {locInputType === "origin"
            ? origin.text === ""
              ? "Choose a pickup location"
              : origin.text
            : destination.text === ""
            ? "Choose your destination"
            : destination.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "85%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: "center",
          marginTop: 10,
          marginStart: 25,
          backgroundColor: primaryColor,
        }}
        onPress={onConfirmLocations}>
        <Text style={{color: "black", fontWeight: "bold"}}>
          Confirm Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickupLocation;
