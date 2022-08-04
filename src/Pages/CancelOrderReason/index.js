import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const CancelOrderReason = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="cross" size={18} />
            </Pressable>
          </View>
          <Text
            style={{
              color: 'black',
              marginTop: 25,
              textAlign: 'center',
              fontSize: 15,
            }}>
            Why do you want to cancel the ride?
          </Text>
          <Text style={{textAlign: 'center', marginTop: 10, fontSize: 13}}>
            Please select the reason for cancelation
          </Text>
          <View
            style={{borderWidth: 1, borderColor: '#828282', marginTop: 20}}
          />
          <View style={{padding: 23}}>
            <Text style={{fontWeight: '600', fontSize: 17, color: 'black'}}>
              Change of plans
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 17,
                color: 'black',
                marginTop: 14,
              }}>
              Drop location denied
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 17,
                color: 'black',
                marginTop: 14,
              }}>
              Ask to pay extra
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 17,
                color: 'black',
                marginTop: 14,
              }}>
              Wrong pickup location
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 17,
                color: 'black',
                marginTop: 14,
              }}>
              Asked to change payment mode
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 17,
                color: 'black',
                marginTop: 14,
              }}>
              Taking longer than expected
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 17,
                color: 'black',
                marginTop: 14,
              }}>
              Found better price elsewhere
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 17,
                color: 'black',
                marginTop: 14,
              }}>
              Others
            </Text>
          </View>
          <Text
            style={{
              color: 'red',
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 15,
            }}>
            Note* Penalty will be applied if you cancel the ride
          </Text>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 35,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
});

export default CancelOrderReason;
