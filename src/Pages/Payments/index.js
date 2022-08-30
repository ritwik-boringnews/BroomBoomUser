import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  AmazonLogo,
  Cash,
  Google,
  Paytm,
  Qr,
  Upi,
  ArrowLeft,
} from '../../Constants/Images';

const Payments = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#1F1F1F',
          height: '100%',
        }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ArrowLeft} style={{width: 16, height: 16}} />
          </TouchableOpacity>
          <Text style={styles.header_title}>Payment</Text>
          <View />
        </View>

        <View style={styles.container}>
          <View style={styles.list_title}>
            <Text>Personal Wallet</Text>
          </View>
          <View>
            <View style={styles.list_item}>
              <View style={styles.list_item_icon}>
                <Image source={AmazonLogo} style={{width: 39, height: 33}} />
              </View>
              <View style={styles.list_item_desc}>
                <View>
                  <Text style={styles.list_item_title}>Amazon Pay</Text>
                  <Text style={styles.list_item_subtitle}>
                    15 Cashback | Min.ride value - 45 | Once
                  </Text>
                </View>
              </View>
              <View style={styles.list_item_account}>
                <Text style={styles.list_item_account_desc}>₹280</Text>
              </View>
            </View>
            <View style={styles.list_item}>
              <View style={styles.list_item_icon}>
                <Image source={Paytm} style={{width: 38, height: 12}} />
              </View>
              <View style={styles.list_item_desc}>
                <View>
                  <Text style={styles.list_item_title}>Paytm</Text>
                  <Text style={styles.list_item_subtitle}>
                    15 Cashback | Min.ride value - ₹45 |Once
                  </Text>
                </View>
              </View>
              <View style={styles.list_item_account}>
                <Text style={styles.list_item_account_desc}>₹280</Text>
              </View>
            </View>
            <View style={styles.list_item}>
              <View style={styles.list_item_icon}>
                <Image source={Google} style={{width: 32, height: 32}} />
              </View>
              <View style={styles.list_item_desc}>
                <View>
                  <Text style={styles.list_item_title}>Google Pay</Text>
                </View>
              </View>
              <View style={styles.list_item_account}>
                <Text style={styles.list_item_account_desc}>₹280</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.list_title}>
            <Text>UPI</Text>
          </View>
          <View>
            <View style={styles.list_item}>
              <View style={styles.list_item_icon}>
                <Image source={Upi} style={{width: 37, height: 10}} />
              </View>
              <View style={styles.list_item_desc}>
                <View>
                  <Text style={styles.list_item_title}>UPI</Text>
                  <Text style={styles.list_item_subtitle}>
                    Choose any upi | add your upi id
                  </Text>
                </View>
              </View>
              <View style={styles.list_item_account}>
                <Text style={styles.list_item_account_desc}>₹280</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />
          <View style={styles.list_title}>
            <Text>Other</Text>
          </View>
          <View>
            <View style={styles.list_item}>
              <View style={styles.list_item_icon}>
                <Image source={Qr} style={{width: 32, height: 32}} />
              </View>
              <View style={styles.list_item_desc}>
                <View>
                  <Text style={styles.list_item_title}>QR Code Scan</Text>
                  <Text style={styles.list_item_subtitle}>
                    Go cashless, after ride pay by scanning QR code
                  </Text>
                </View>
              </View>
              <View style={styles.list_item_account}>
                <Text style={styles.list_item_account_desc}>₹280</Text>
              </View>
            </View>
            <View style={styles.list_item}>
              <View style={styles.list_item_icon}>
                <Image source={Cash} style={{width: 36, height: 18}} />
              </View>
              <View style={styles.list_item_desc}>
                <View>
                  <Text style={styles.list_item_title}>Cash</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 30,
    paddingTop: 55,
    padding: 30,
    backgroundColor: '#1F1F1F',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_title: {
    color: '#F2F2F2',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
  },

  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 35,
    paddingBottom: 10,
    paddingHorizontal: 24,
  },
  list_title: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    marginBottom: 14,
  },
  list_item: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  list_item_icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  list_item_desc: {
    flex: 1,
  },
  list_item_title: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28,
    color: '#1F1F1F',
    marginBottom: 2,
  },
  list_item_subtitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#1F1F1F',
  },
  list_item_account: {
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_item_account_desc: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28,
    color: '#1F1F1F',
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#828282',
    marginVertical: 8,
  },
});

// const Payments = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.box}>
//                 <View style={{ alignItems: 'center' }}>
//                     <Text style={{ marginBottom: 10, fontWeight: '400', fontSize: 28, color: '#00ad00' }}>₹60</Text>
//                     <Text style={{ fontWeight: '700', fontSize: 22, color: '#1f1f1f' }}>Amount to be paid</Text>
//                 </View>
//                 <View style={{
//                     width: '100%',
//                     bottom: 0,
//                     position: 'absolute',
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     paddingVertical: 11,
//                     paddingHorizontal: 8,
//                     borderTopWidth: 1,
//                     borderColor: '#bdbdbd',
//                 }}>
//                     <Text style={{ fontSize: 16, fontWeight: '500', color: '#1f1f1f', }}>Amazon Pay</Text>
//                     <Text style={{ fontSize: 16, fontWeight: '500', color: '#1f1f1f' }}>₹60.00</Text>
//                 </View>
//             </View>
//             <View style={styles.btnSec}>
//                 <Text style={{fontSize: 22, fontWeight: '700', color: '#1f1f1f',textAlign: 'center', marginBottom: 16}}>QR Scan</Text>
//                 <Text style={{fontSize: 14, fontWeight: '500', color: '#1f1f1f',textAlign: 'center', marginBottom: 28}}>Scan QR and done your payment</Text>
//                 <TouchableOpacity style={{marginBottom: 16,paddingVertical: 15, borderRadius: 50, borderWidth: 1, borderColor: '#1f1f1f', width: '100%'}}>
//                     <Text style={{fontSize: 16, fontWeight: '500', color: '#1f1f1f',textAlign: 'center'}}>Scan Code</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{paddingVertical: 15, borderRadius: 50, borderWidth: 1, borderColor: '#1f1f1f', width: '100%'}}>
//                     <Text style={{fontSize: 16, fontWeight: '500', color: '#1f1f1f',textAlign: 'center'}}>Pay Now</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         height: '100%',
//         backgroundColor: "#fff",
//         alignItems: "center",
//         paddingHorizontal: 20,
//     },
//     box: {
//         height: 150,
//         width: '100%',
//         backgroundColor: '#f2f2f2',
//         borderRadius: 6,
//         borderWidth: 2,
//         borderColor: 'rgba(0,0,0,0.15)',
//         marginTop: 20,
//         paddingHorizontal: 10,
//         paddingVertical: 10,
//         alignItems: 'center',
//     },
//     btnSec: {
//         width: '100%',
//         alignItems: 'center',
//         position: 'absolute',
//         bottom: 50,
//     }
// });

export default Payments;
