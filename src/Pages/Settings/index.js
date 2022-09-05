import {View, Text, StyleSheet, TextInput} from "react-native";
import React from "react";

const Settings = () => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 40,
      flex: 1,
      backgroundColor: "#fff",
      paddingVertical: 15,
      backgroundColor: "white",
    },
    box: {
      borderBottomWidth: 1,
      borderBottomColor: "#BDBDBD",
    },

    input: {
      fontSize: 22,
      fontWeight: "500",
      paddingHorizontal: 0,
    },

    h1: {
      fontSize: 22,
      fontWeight: "700",
      color: "#1f1f1f",
      paddingTop: 5,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.h1}>App Language</Text>
        <TextInput
          style={styles.input}
          placeholder="English"
          keyboardType="text"
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.h1}>Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="Raju Paul"
          keyboardType="text"
        />
      </View>
      <View style={styles.box}>
        <Text
          style={{
            fontSize: 22,
            color: "#1f1f1f",
            paddingBottom: 18,
            fontWeight: "700",
            paddingTop: 5,
          }}>
          Favourites
        </Text>
      </View>
      <View style={styles.box}>
        <Text
          style={{
            fontSize: 22,
            color: "#1f1f1f",
            paddingBottom: 18,
            fontWeight: "700",
            paddingTop: 5,
          }}>
          Preferences
        </Text>
      </View>
      <View>
        <Text style={styles.h1}>About</Text>
        <Text
          style={{
            paddingVertical: 10,
            fontSize: 22,
            fontWeight: "400",
            paddingHorizontal: 0,
          }}>
          Version 0.1
        </Text>
      </View>
    </View>
  );
};

export default Settings;
