import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {HomeNavigator} from "./src/Navigation";
import {enableLatestRenderer} from "react-native-maps";
import locationContext from "./context/locationContext";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./Redux/store";
import SnackBar from "./src/Components/AppSnackBar";
import SplashScreen from "react-native-splash-screen";
import {useDoubleBackPressExit} from "./src/Hooks/useDoubleBackPressExit";
import {BackHandler} from "react-native";
enableLatestRenderer();

const App = () => {
  const [loc, setLoc] = useState("");
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useDoubleBackPressExit(() => {
    BackHandler.exitApp();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <locationContext.Provider value={{loc, setLoc}}>
          <NavigationContainer>
            <SnackBar />
            <HomeNavigator />
          </NavigationContainer>
        </locationContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;

// signup
// otp
// serach city
//
