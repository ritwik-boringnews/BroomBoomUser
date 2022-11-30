import React from "react";
import {Linking, PermissionsAndroid, View} from "react-native";
import {WebView} from "react-native-webview";
import styles from "./styles";
import {useSelector} from "react-redux";
import {Buffer} from "buffer";

const WebBooking = ({route}) => {
  const {clientToken} = useSelector(state => state.auth);
  const [isUrlReady, setUrlReady] = React.useState();

  React.useEffect(() => {
    formWebUrl();
  }, []);

  const formWebUrl = async () => {
    if (!clientToken) {
      return;
    }
    // const {status} = await PermissionsAndroid.check(
    //   PermissionsAndroid.PERMISSIONS.CAMERA_ROLL,
    // );
    // const {status_camera_roll} = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.CAMERA,
    // );
    const items = await getBase64();
    console.log("items", items);
    // const url = "https://dev.broomboom.com/test-call";
    // const url = "https://github.com/react-native-webview/react-native-webview/issues/1084";
    const url = `https://dev.broomboom.com/token-user/${clientToken}/${items?.base64Origin}/${items?.base64Destination}`;
    setUrlReady(url);
    console.log(url);
  };

  const getBase64 = () => {
    return new Promise((resolve, reject) => {
      const base64Origin = new Buffer(route?.params?.origin).toString("base64");
      const base64Destination = new Buffer(route?.params?.destination).toString(
        "base64",
      );
      resolve({base64Origin, base64Destination});
    });
  };

  return (
    <View style={styles.container}>
      {isUrlReady && (
        <WebView
          source={{uri: isUrlReady}}
          style={styles.loginWebView}
          startInLoadingState={true}
          javaScriptEnabled
          // originWhitelist={["http://*", "https://*", "intent://*"]}
          originWhitelist={[
            "http://*",
            "https://*",
            "intent://*",
            "tel:*",
            "mailto:*",
            "*",
          ]}
          onShouldStartLoadWithRequest={e => {
            console.log(e);
            if (e?.url.includes("whatsapp") || e?.url.includes("tel:")) {
              Linking.openURL(e.url);
              return false;
            }
            return true;
          }}
          // contentMode="mobile"
          // allowsInlineMediaPlayback
          // useWebKit
        />
      )}
    </View>
  );
};

export default WebBooking;
