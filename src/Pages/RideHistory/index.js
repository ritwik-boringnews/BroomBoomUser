import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Box from '../RideHistory/box.js'

const RideHistory = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                < Box />
                < Box />
                < Box />
                < Box />
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