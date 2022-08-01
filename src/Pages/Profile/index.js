import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import Plus from '../../../assets/add_24px.png';

const Profile = () => {

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 40,
            flex: 1,
            backgroundColor: '#fff',
            paddingVertical: 15
        },
        box: {
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            paddingVertical: 5,
            marginVertical: 4
        },
        input: {
            fontSize: 22,
            fontWeight: '700',
            paddingHorizontal: 0,
            paddingVertical: 6,
            color: '#1f1f1f',
            alignItems: 'center'
        },
        h1: {
            fontSize: 16,
            fontWeight: '500',
            paddingBottom: 4
        },
        para: {
            color: '#2F80ED',
            fontSize: 16,
            fontWeight: '500',
            alignItems: 'center',
            marginRight: 8,
            textAlign: 'center',
            justifyContent: 'center'
        },
        icon: {
            width: 32,
            height: 32,
            borderRadius: 50,
            backgroundColor: '#f5c001',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.h1}>Name</Text>
                <TextInput
                    style={styles.input}
                    value="Raju Paul"
                    keyboardType="text"
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.h1}>Mobile No.</Text>
                <TextInput
                    style={styles.input}
                    value='8954615841'
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.h1}>Email ID</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 'auto', alignItems: 'center', width: '100%', marginRight: 'auto' }}>
                    <TextInput
                        style={styles.input}
                        value='example@gmail.com'
                        keyboardType="numeric"
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.para}>Add Details</Text>
                        <TouchableOpacity style={styles.icon}><Image source={Plus} /></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.h1}>Gender</Text>
                <TextInput
                    style={styles.input}
                    value='Male'
                    keyboardType="text"
                />
            </View>
            <View>
                <Text style={styles.h1}>Date of Birth</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 'auto', alignItems: 'center', width: '100%', marginRight: 'auto' }}>
                    <TextInput
                        style={styles.input}
                        value='26/07/1994'
                        keyboardType="numeric"
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.para}>Add Details</Text>
                        <TouchableOpacity style={styles.icon}><Image source={Plus} /></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Profile;