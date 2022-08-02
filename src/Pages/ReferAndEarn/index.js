import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReferAndEarn = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.title}>
          INVITE YOUR FRIEND AND EARN UPTO 100 BROOMBOOM COINS
        </Text>
        <Image
          source={require('../../../assets/ReferAndEarn.png')}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.subTitle}>
          COPY & SEND THE CODE TO YOUR FRIEND TO REGISTER AND EARN NOW
        </Text>
        <View style={styles.copyCodeContainer}>
          <Text style={styles.copyCodeText}>C7TCC9G</Text>
          <TouchableOpacity>
            <Icon name="copy" size={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.inviteTextContainer}>
          <View style={styles.row}>
            <Icon name="gift" size={20} />
            <Text style={styles.inviteText}>Invite Friends to Broomboom</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.link}>Invite</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 30}}>
          <Text style={styles.stepsTitle}>Steps</Text>
          <View style={styles.stepsBorder1} />
          <View style={styles.row}>
            <View style={styles.stepsCounterContainer}>
              <Text style={styles.stepsCounterText}>1</Text>
            </View>
            <View>
              <Text style={styles.stepsCounterTitle}>
                YOUR FRIEND REGISTERED WITH US
              </Text>
              <Text style={styles.mutedText}>YOUR EARNING ₹0 </Text>
            </View>
          </View>
          <View style={styles.stepsBorder2} />
          <View style={styles.row}>
            <View style={styles.stepsCounterContainer}>
              <Text style={styles.stepsCounterText}>2</Text>
            </View>
            <View>
              <Text style={styles.stepsCounterTitle}>
                YOUR FRIEND COMPLETES FIRST 10 RIDES
              </Text>
              <Text style={styles.mutedText}>YOU EARN 100 BROOMBOOM COINS</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReferAndEarn;
