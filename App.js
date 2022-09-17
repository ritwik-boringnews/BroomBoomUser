import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {NonAuthStackNavigator} from "./src/Navigation";
import {enableLatestRenderer} from "react-native-maps";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./Redux/store";
import SnackBar from "./src/Components/AppSnackBar";
import SplashScreen from "react-native-splash-screen";
import {useDoubleBackPressExit} from "./src/Hooks/useDoubleBackPressExit";
import {BackHandler, ActivityIndicator} from "react-native";
import {primaryColor} from "./src/Constants";
enableLatestRenderer();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useDoubleBackPressExit(() => {
    BackHandler.exitApp();
  });

  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator color={primaryColor} />}
        persistor={persistor}>
        <NavigationContainer>
          <SnackBar />
          <NonAuthStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
