import React from "react";
import {View, StatusBar, SafeAreaView, StyleSheet} from "react-native";
import metrics from "../Utility/metrics";

const AppStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default AppStatusBar;

const styles = StyleSheet.create({
  statusBar: {
    height: metrics.STATUSBAR_HEIGHT,
  },
});
