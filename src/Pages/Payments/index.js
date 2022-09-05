import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

const Payments = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{alignItems: "center"}}>
          <Text
            style={{
              marginBottom: 10,
              fontWeight: "400",
              fontSize: 28,
              color: "#00ad00",
            }}>
            ₹60
          </Text>
          <Text style={{fontWeight: "700", fontSize: 22, color: "#1f1f1f"}}>
            Amount to be paid
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            bottom: 0,
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 11,
            paddingHorizontal: 8,
            borderTopWidth: 1,
            borderColor: "#bdbdbd",
          }}>
          <Text style={{fontSize: 16, fontWeight: "500", color: "#1f1f1f"}}>
            Amazon Pay
          </Text>
          <Text style={{fontSize: 16, fontWeight: "500", color: "#1f1f1f"}}>
            ₹60.00
          </Text>
        </View>
      </View>
      <View style={styles.btnSec}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: "#1f1f1f",
            textAlign: "center",
            marginBottom: 16,
          }}>
          QR Scan
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "#1f1f1f",
            textAlign: "center",
            marginBottom: 28,
          }}>
          Scan QR and done your payment
        </Text>
        <TouchableOpacity
          style={{
            marginBottom: 16,
            paddingVertical: 15,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#1f1f1f",
            width: "100%",
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#1f1f1f",
              textAlign: "center",
            }}>
            Scan Code
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#1f1f1f",
            width: "100%",
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#1f1f1f",
              textAlign: "center",
            }}>
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  box: {
    height: 150,
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.15)",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  btnSec: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
  },
});

export default Payments;
