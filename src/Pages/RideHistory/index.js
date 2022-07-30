import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Box from '../RideHistory/box.js'

const RideHistory = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Box status={'COMPLETE'} date={'11Mar 2022'} placeFrom={'Kumar Ashutosh Institution(Main)'} placeTo={'Dum Dum Airport Gate No. 1'} sourceTime={'15:20'} destinationTime={'15:40'} />
                <Box status={'CANCELLED'} date={'11Mar 2022'} placeFrom={'Kumar Ashutosh Institution(Main)'} placeTo={'Dum Dum Airport Gate No. 1'} sourceTime={'15:20'} destinationTime={'15:40'} />
                <Box status={'COMPLETE'} date={'11Mar 2022'} placeFrom={'Kumar Ashutosh Institution(Main)'} placeTo={'Dum Dum Airport Gate No. 1'} sourceTime={'15:20'} destinationTime={'15:40'} />
                <Box status={'CANCELLED'} date={'11Mar 2022'} placeFrom={'Kumar Ashutosh Institution(Main)'} placeTo={'Dum Dum Airport Gate No. 1'} sourceTime={'15:20'} destinationTime={'15:40'} />
            </View>
        </ScrollView>
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

export default RideHistory;