import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react';
import Images from '../../Constants/Images';
import { FlatList } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { transform } from '@babel/core';
import { onScrollEvent } from 'react-native-redash/src/v1/Gesture'
// import Items from './Items';

const { width, height } = Dimensions.get('screen');


const Indicator = ({ scrollX }) => {
  return <View style={{ position: 'absolute', bottom: '30%', flexDirection: 'row' }}>
    {data.map((_, i) => {
      const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1.4, 0.8],
        extrapolate: 'clamp'
      })

      return (<Animated.View
        key={`indicator-${i}`}
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: '#333',
          margin: 10,
          transform: [
            { scale, }
          ]
        }}
      />
      )
    })}
  </View>
}


const data = [
  {
    id: '1',
    title: "Bengal's Own Cab",
    body: "Short description",
    // image: require('../../../assets/Card.png'),
    image: "https://broomboomimages.s3.ap-south-1.amazonaws.com/Order+Done+1.png",
  },
  {
    id: '2',
    title: "Bengal's Own Bike Taxi",
    body: "Short description",
    image: "https://broomboomimages.s3.ap-south-1.amazonaws.com/Order+Done+1.png",
    // image: require('../../../assets/Card.png'),
  },
  {
    id: '3',
    title: "Be a BroomBoom Pilot",
    body: "Short description",
    image: "https://broomboomimages.s3.ap-south-1.amazonaws.com/Order+Done+1.png",
    // image: require('../../../assets/Card.png'),
  },
];

const Welcome = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Image source={Images.Logo} style={{ width: 54, height: 54, position: 'absolute', top: 25 }} />
      <View style={{ marginTop: '25%', alignItems: "center" }}>
        <Animated.FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          style={{ width: width + 5, height: 'auto' }}
          data={data}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => {
            return (
              <View style={{ width, alignItems: 'center', padding: 20 }}>
                <View style={{ justifyContent: 'center' }}>
                  <Image source={{ uri: item.image }} style={{ height: 320, width: 320, resizeMode: 'contain', marginTop: 16 }} />
                  {/* <Image source={item.image} style={{ width: 320, height: 460, resizeMode: 'contain' }} /> */}
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.decs}>{item.body}</Text>
                </View>
              </View>
            )
          }}
          bounces={false}
          keyExtractor={(item) => item.id}
        />

        <Indicator scrollX={scrollX} />
      </View>



      {/* <View style={{ alignItems: 'center' }}>
          <Image source={Images.Card} style={{ height: 320, width: 320, resizeMode: 'contain', marginTop: 16 }} />
          <View style={{marginVertical: 8, alignItems:'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '700', marginTop: 12, color: '#000000' }}>Title of the tutorial</Text>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>Short description</Text>
          </View>
          <Image source={Images.Slider} style={{ height: 10, width: 87, resizeMode: 'contain', marginVertical: 28 }} />
        </View> */}

      <View style={{width: '100%', position: 'absolute', bottom: 0}}>
        <TouchableOpacity style={{ width: '100%', borderWidth: 1, padding: 12, alignItems: 'center', borderRadius: 50 }}>
          <Text style={{ fontWeight: '500', fontSize: 16, color: '#000' }}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '100%', borderWidth: 1, padding: 12, backgroundColor: 'rgba(245, 192, 1, 0.2)', marginVertical: 15, alignItems: 'center', borderRadius: 50 }}>
          <Text style={{ fontWeight: '500', fontSize: 16, color: '#333' }}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  decs: {
    fontSize: 16,
    fontWeight: '500',
    color: '#62656b'
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 12,
    color: '#000000'
  }
});

export default Welcome;
