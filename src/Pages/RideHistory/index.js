import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Box from '../RideHistory/box.js';
import Api from '../../Services';
import moment from 'moment';
const RideHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rideHistory, setRideHistory] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const getRideHistory = async () => {
      try {
        const response = await Api.get(`/ride-details/get-ride-history`);

        setRideHistory(response.data.updatedRideHistory);
      } catch (error) {
        console.log(error);
      }
    };
    getRideHistory();
    setIsLoading(false);
  }, []);
  console.log(rideHistory);
  return (
    <ScrollView>
      <View style={styles.container}>
        {rideHistory &&
          rideHistory.map((item, id) => {
            return (
              <Box
                status={item.status}
                date={moment(item.createdAt).format('ll')}
                placeFrom={item.sources}
                placeTo={item.destination}
                sourceTime={moment(item.createdAt).format('LT')}
                destinationTime={moment(item.createdAt).format('LT')}
              />
            );
          })}

        {!rideHistory.length && <Text>You have not taken any rides yet</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default RideHistory;
