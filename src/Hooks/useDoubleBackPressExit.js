import {BackHandler, ToastAndroid} from "react-native";

let currentCount = 0;
export const useDoubleBackPressExit = exitHandler => {
  // no need for iOS
  if (Platform.OS === "ios") return;
  const subscription = BackHandler.addEventListener("hardwareBackPress", () => {
    if (currentCount === 1) {
      exitHandler();
      subscription.remove();
      return true;
    }
    backPressHandler();
    return true;
  });
};
const backPressHandler = () => {
  if (currentCount < 1) {
    currentCount += 1;
    ToastAndroid.showWithGravityAndOffset(
      "Press again to close!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }
  setTimeout(() => {
    currentCount = 0;
  }, 2000);
};
