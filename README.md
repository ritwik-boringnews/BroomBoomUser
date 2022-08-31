Error: spawnSync ./gradlew EACCES React Native Error Fix
https://reactnativeforyou.com/error-spawnsync-gradlew-eacces-react-native-error-fix/


location permission page - dashbaord
- contact access


import Contacts from "react-native-contacts";

// PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  //   title: "Contacts",
  //   message: "This app would like to view your contacts.",
  //   buttonPositive: "Please accept bare mortal",
  // }).then(
  //   Contacts.getAll()
  //     .then(contacts => {
  //       // work with contacts
  //       console.log(contacts);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     }),
  // );

  const onSubmit = async () => {
    try {
      Contacts.checkPermission().then(permission => {
        // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
        console.log("permissionpermission", permission);

        if (permission === "undefined") {
          Contacts.requestPermission().then(permission => {
            // ...
            console.log("permissionpermission", permission);
          });
        }
        if (permission === "authorized") {
          // yay!
        }
        if (permission === "denied") {
          // x.x
        }
      });

      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Contacts",
        message: "This app would like to view your contacts.",
        buttonPositive: "Please accept bare mortal",
      }).then(() => console.log("permission granted"));
    } catch (e) {
      console.log(e);
    }
    // setIsLoading(true);

    // try {
    //   const response = await Api.post(`/user/register`, {
    //     mobile: mobile,
    //   });
    //   if (response.status === 1) {
    //     navigation.navigate("Otp", {mobile: mobile});
    //   } else {
    //     throw new Error(response.message);
    //   }
    // } catch (error) {
    //   dispatch(
    //     notify({
    //       message: error.message || "Something went wrong",
    //       notifyType: "error",
    //     }),
    //   );
    // }
    // setIsLoading(false);
  };

  const _getContact = () => {
    Contacts.getAll()
      .then(contacts => {
        // work with contacts
        console.log(contacts);
      })
      .catch(e => {
        console.log(e);
      });
  };