import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Images from "../../Constants/Images";
import Animated from "react-native-reanimated";
import {primaryColor} from "../../Constants";

const {width, height} = Dimensions.get("screen");

const Indicator = ({scrollX}) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: "20%",
        flexDirection: "row",
        backgroundColor: "white",
      }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "#333",
              margin: 10,
              transform: [{scale}],
            }}
          />
        );
      })}
    </View>
  );
};

const data = [
  {
    id: "1",
    title: "Bengal's Own Cab Service",
    image: require("../../../assets/welcome1.png"),
  },
  {
    id: "2",
    title: "Bengal's Own Bike Taxi Service",
    image: require("../../../assets/welcome2.png"),
  },
  {
    id: "3",
    title: "Be a BroomBoom User",
    image: require("../../../assets/welcome3.png"),
  },
];

const Welcome = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Image
        source={Images.Logo}
        style={{width: 54, height: 54, position: "absolute", top: 25}}
      />
      <View style={{marginTop: "25%", alignItems: "center"}}>
        <Animated.FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          style={{width: width + 5, height: "auto"}}
          data={data}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item}) => {
            return (
              <View style={{width, alignItems: "center", padding: 20}}>
                <View style={{justifyContent: "center"}}>
                  <Image
                    source={item.image}
                    style={{
                      height: 320,
                      width: 320,
                      resizeMode: "contain",
                      marginTop: 16,
                    }}
                  />
                  {/* <Image source={item.image} style={{ width: 320, height: 460, resizeMode: 'contain' }} /> */}
                </View>
                <View style={{alignItems: "center"}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.decs}>{item.body}</Text>
                </View>
              </View>
            );
          }}
          bounces={false}
          keyExtractor={item => item.id}
        />

        <Indicator scrollX={scrollX} />
      </View>

      <View style={{width: "100%", position: "absolute", bottom: 20}}>
        <TouchableOpacity
          style={{
            width: "100%",
            padding: 15,
            alignItems: "center",
            borderRadius: 50,
            backgroundColor: primaryColor,
          }}
          onPress={() => navigation.replace("SignUp")}>
          <Text style={{fontWeight: "600", fontSize: 16, color: "#000"}}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  decs: {
    fontSize: 16,
    fontWeight: "500",
    color: "#62656b",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
    color: "#000000",
  },
});

export default Welcome;
