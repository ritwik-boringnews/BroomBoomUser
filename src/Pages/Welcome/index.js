import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Images from '../../Constants/Images';

const Welcome = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={Images.Logo} style={{ width: 54, height: 54, marginTop: 30 }} />
        <View style={{ alignItems: 'center' }}>
          <Image source={Images.Card} style={{ height: 320, width: 320, resizeMode: 'contain', marginTop: 16 }} />
          <View style={{marginVertical: 8, alignItems:'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '700', marginTop: 12, color: '#000000' }}>Title of the tutorial</Text>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>Short description</Text>
          </View>
          <Image source={Images.Slider} style={{ height: 10, width: 87, resizeMode: 'contain', marginVertical: 28 }} />
        </View>
        <TouchableOpacity style={{ width: '100%', borderWidth: 1, padding: 12, alignItems: 'center', borderRadius: 50 }}>
          <Text style={{ fontWeight: '500', fontSize: 16 }}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '100%', borderWidth: 1, padding: 12, backgroundColor: 'rgba(245, 192, 1, 0.2)', marginVertical: 15, alignItems: 'center', borderRadius: 50 }}>
          <Text style={{ fontWeight: '500', fontSize: 16 }}>Skip</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}



const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default Welcome;