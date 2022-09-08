import React, {useEffect, useState} from "react";
import {PermissionsAndroid, Alert, Linking} from "react-native";
import Contacts from "react-native-contacts";

export const PERMISSIONS_TYPES = {
  GRANTED: "granted",
  DENIED: "denied",
  NEVER_ASK_AGAIN: "never_ask_again",
  UNDEFINED: "undefined",
};

export default useContactPermission = async () => {
  let permissionCheck = PERMISSIONS_TYPES.DENIED;
  try {
    const grantedCheck = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    );
    console.log("grantedCheck", grantedCheck);
    const pkContactPermissionCheck = await Contacts.checkPermission();
    if (
      pkContactPermissionCheck === PERMISSIONS_TYPES.DENIED ||
      pkContactPermissionCheck === PERMISSIONS_TYPES.UNDEFINED ||
      !grantedCheck
    ) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      console.log("granted", granted);
      permissionCheck = granted;
      if (granted === PERMISSIONS_TYPES.GRANTED) {
        console.log("You can use the READ_CONTACTS");
        // permissionCheck = true;
      } else {
        // permissionCheck = granted;
        console.log("READ_CONTACTS permission denied");
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
      }
    } else {
      // confirmed granted
      permissionCheck = PERMISSIONS_TYPES.GRANTED;
    }
  } catch (err) {
    console.log("err", err);
  }
  return permissionCheck;
};
