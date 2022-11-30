import {View, Text, TextInput, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import BackButtonPage from "../../Components/BackButtonPage";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CouponIcon from "react-native-vector-icons/AntDesign";
import CopyIcon from "react-native-vector-icons/Feather";
import Api from "../../Services";
import Clipboard from "@react-native-clipboard/clipboard";
import {useEffect} from "react";
const Coupon = ({navigation}) => {
  const [coupon, setCoupon] = useState([]);
  const getCoupon = async () => {
    try {
      const response = await Api.get(`/coupon/list-coupon`);

      if (response.status === 1) {
        setCoupon(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(
        notify({
          message: error.message || "Something went wrong",
          notifyType: "error",
        }),
      );
    }
  };
  useEffect(() => {
    getCoupon();
  }, []);
  const copyToClipboard = async code => {
    Clipboard.setString(code);
  };
  console.log("coupon", coupon);
  return (
    <BackButtonPage pageName="Coupon Code" navigation={navigation}>
      <View style={styles.container}>
        {/* <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter Coupon Code" />
          <TouchableOpacity>
            <Text style={styles.inputbtn}>Apply</Text>
          </TouchableOpacity>
        </View> */}
        {coupon.map(item => {
          return (
            <View style={styles.box}>
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 12,
                  backgroundColor: "grey",
                  borderRadius: 4,
                  borderBottomStartRadius: 0,
                  borderBottomEndRadius: 0,
                }}>
                <CouponIcon
                  name="tag"
                  size={23}
                  color="#F5C001"
                  style={{marginVertical: 8}}
                />
                <Text
                  style={{
                    marginVertical: 10,
                    color: "white",
                    paddingLeft: 12,
                    fontSize: 18,
                  }}>
                  {item.code}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 12,
                  marginTop: 10,
                  paddingBottom: 10,
                  justifyContent: "space-between",
                }}>
                {item.coupon_type === "discount" ? (
                  <Text style={{fontSize: 20, marginTop: 5}}>
                    Get {item.coupon_amt}% OFF
                  </Text>
                ) : (
                  <Text style={{fontSize: 20, marginTop: 5}}>
                    Get {item.coupon_amt} Flat OFF
                  </Text>
                )}

                <View style={{marginRight: 15}}>
                  <TouchableOpacity onPress={() => copyToClipboard(item.code)}>
                    <CopyIcon
                      name="copy"
                      size={20}
                      color="#347EEA"
                      style={{marginTop: 8}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </BackButtonPage>
  );
};

export default Coupon;
