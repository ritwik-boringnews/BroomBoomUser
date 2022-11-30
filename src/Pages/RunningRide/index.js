import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import UserIcon from "../../../assets/truckDriver.png";
import amazonIcon from "../../../assets/amazonLogo.png";
import AppLocationLabel from "../../Components/AppLocationLabel";

const RunningRide = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.box]}>
        {/* <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 20,
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#828282",
            marginVertical: 20,
          }}>
          <Image
            source={require("../../../assets/LineRide.png")}
            style={{height: 4, width: 48, position: "absolute", top: 0}}
          />
          <Text style={styles.header}>Start your ride PIN: 2030</Text>
        </View> */}
        <View style={{paddingHorizontal: 20}}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <Image
                source={UserIcon}
                style={{height: 48, width: 48, marginRight: 15}}
              />
              <View style={{display: "flex", flexDirection: "column"}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#333",
                    marginBottom: 10,
                  }}>
                  Ramesh
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <Icon name="star" size={25} color={"#FDD835"} />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "#333",
                      marginLeft: 6,
                    }}>
                    4.5
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 2,
                  paddingHorizontal: 4,
                  borderColor: "#000",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: "500", color: "#333"}}>
                  D66LSCDSDSD
                </Text>
              </View>
              <Text
                style={{fontSize: 16, fontWeight: "700", color: "dodgerblue"}}>
                Pulsar 220
              </Text>
            </View>
          </View>
          <TextInput
            placeholder="Any pickup instructions?"
            style={{
              marginTop: 20,
              backgroundColor: "#e0e0e0",
              color: "#4f4f4f",
              paddingHorizontal: 20,
              borderRadius: 6,
              fontWeight: "500",
            }}
            placeholderTextColor="#4f4f4f"
          />
        </View>
        <View style={[styles.box, {marginHorizontal: 20, marginVertical: 20}]}>
          <View
            style={{
              paddingLeft: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#828282",
              marginVertical: 10,
              paddingVertical: 10,
            }}>
            <Text style={styles.SubHeader}>More about Ramesh</Text>
          </View>
          {/* card body */}
          <View style={{paddingVertical: 16, paddingHorizontal: 15}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#828282",
                paddingBottom: 16,
              }}>
              <View
                style={{
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 30,
                  paddingVertical: 5,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#D5DDE0",
                }}>
                <Image
                  source={require("../../../assets/star.png")}
                  style={{
                    height: 30,
                    width: 30,
                    marginBottom: 5,
                  }}
                />
                <Text style={{color: "#333", fontWeight: "700"}}>4.5</Text>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 30,
                  paddingVertical: 5,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#D5DDE0",
                }}>
                <Image
                  source={require("../../../assets/aeroplane.png")}
                  style={{
                    height: 30,
                    width: 30,
                    marginBottom: 5,
                  }}
                />
                <Text style={{color: "#333", fontWeight: "500"}}>1126</Text>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#D5DDE0",
                }}>
                <Image
                  source={require("../../../assets/Subtract.png")}
                  style={{
                    height: 30,
                    width: 30,
                    marginBottom: 5,
                  }}
                />
                <Text style={{fontSize: 16, color: "#333", fontWeight: "500"}}>
                  1 years
                </Text>
              </View>
            </View>
            <View style={{alignItems: "center", width: "100%"}}>
              <View>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 22,
                    fontWeight: "500",
                    marginVertical: 15,
                  }}>
                  Pilot Speaks
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}>
                <TouchableOpacity style={styles.btnWarning}>
                  <Text
                    style={{color: "#333", fontWeight: "600", fontSize: 16}}>
                    English
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnWarning}>
                  <Text
                    style={{color: "#333", fontWeight: "600", fontSize: 16}}>
                    Hindi
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnWarning}>
                  <Text
                    style={{color: "#333", fontWeight: "600", fontSize: 16}}>
                    Bengali
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* card body close */}
        </View>
      </View>

      {/* Pickup */}
      {/* <View style={[styles.box, {marginVertical: 10}]}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#828282",
            marginVertical: 10,
            paddingVertical: 10,
            flexDirection: "row",
          }}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Icon
              name="circle"
              size={15}
              style={{color: "#F5C001", marginRight: 10}}
            />
            <Text style={styles.SubHeader}>Pickup Details</Text>
          </View>
          <TouchableOpacity>
            <Icon name="heart-o" size={22} style={{color: "#BDBDBD"}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: 5,
            alignItems: "center",
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              color: "#000",
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 24,
            }}>
            Kumar Ashutosh Institution (Main), Dum Dum Station Road, Satpuku...
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              borderWidth: 2,
              borderColor: "#000",
              width: "100%",
              alignItems: "center",
              borderRadius: 50,
              marginBottom: 18,
            }}>
            <Text style={{fontSize: 16, fontWeight: "500", color: "#000"}}>
              Edit Location
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* Drop */}
      {/* <View style={[styles.box, {marginVertical: 10}]}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#828282",
            marginVertical: 10,
            paddingVertical: 10,
            flexDirection: "row",
          }}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Icon
              name="circle"
              size={15}
              style={{color: "#333", marginRight: 10}}
            />
            <Text style={styles.SubHeader}>Drop Details</Text>
          </View>
          <TouchableOpacity>
            <Icon name="heart-o" size={22} style={{color: "#BDBDBD"}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: 5,
            alignItems: "center",
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              color: "#000",
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 24,
            }}>
            International Airport, Motilal Colony,City Rajbari, Dum Dum,
            Kolkata, West...
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              borderWidth: 2,
              borderColor: "#000",
              width: "100%",
              alignItems: "center",
              borderRadius: 50,
              marginBottom: 18,
            }}>
            <Text style={{fontSize: 16, fontWeight: "500", color: "#000"}}>
              Edit Location
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <AppLocationLabel locLabel={"pickup"} />
      <AppLocationLabel locLabel={"drop"} />
      {/* Payment */}
      <View style={[styles.box, {marginVertical: 10}]}>
        <View
          style={{
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#828282",
            marginVertical: 10,
            paddingVertical: 10,
          }}>
          <Text style={styles.SubHeader}>Payment</Text>
        </View>
        {/* card body */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}>
          <View style={{flexDirection: "row"}}>
            <Image source={amazonIcon} />
            <Text
              style={[styles.SubHeader, {fontWeight: "bold", marginLeft: 10}]}>
              Amazon Pay
            </Text>
          </View>
          <Text style={styles.SubHeader}>₹280</Text>
        </View>
        {/* card body close */}
      </View>

      {/* <TouchableOpacity
        style={{
          backgroundColor: "#F5C001",
          paddingVertical: 15,
          borderWidth: 2,
          borderColor: "#828282",
          width: "100%",
          alignItems: "center",
          borderRadius: 50,
          marginTop: 28,
          marginBottom: 30,
        }}>
        <Text style={{fontSize: 16, fontWeight: "500", color: "#000"}}>
          Cancel Ride
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{
          width: "90%",
          padding: 10,
          borderWidth: 1,
          borderRadius: 50,
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#F4B400",
        }}>
        <Text style={{color: "black", fontWeight: "bold"}}>Cancel Ride</Text>
      </TouchableOpacity>
    </ScrollView>
  );
  R;
};
export default RunningRide;
const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
    // paddingTop: 10,
    // flex: 1,
    backgroundColor: "white",
  },
  header: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1D192B",
    padding: 0,
  },
  SubHeader: {
    fontSize: 18,
    fontWeight: "500",
    color: "#1D192B",
    padding: 0,
  },
  box: {
    // backgroundColor: "#fff",
    // // width: '100%',
    // borderColor: "rgba(0, 0, 0, 0.15)",
    // borderWidth: 1,
    // borderRadius: 10,
  },
  btnWarning: {
    backgroundColor: "#F5C001",
    width: 80,
    borderRadius: 50,
    textAlign: "center",
    alignItems: "center",
    padding: 3,
    borderWidth: 1,
    borderColor: "#828282",
  },
});
