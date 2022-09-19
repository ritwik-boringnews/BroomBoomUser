import React, {useState, useEffect} from "react";
import {StyleSheet, Text, Pressable, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Api from "../../Services";
import {useDispatch} from "react-redux";
import {Modal, Portal, Provider} from "react-native-paper";
const CancelOrderModalReason = ({visible, setVisible}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cancelReasons, setCancelReasons] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    const getCancelOrderReasons = async () => {
      try {
        const response = await Api.get(`/cancel-reasons/get-reasons`);

        if (response.status === 1) {
          setCancelReasons(response.data);
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        dispatch(
          notify({
            message: error.message || "Something went wrong",
            notifyType: "error",
          }),
        );
      }
    };
    getCancelOrderReasons();

    setIsLoading(false);
  }, []);
  console.log("cancel", cancelReasons);
  return (
    <Provider>
      <Portal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onDismiss={() => {
            // Alert.alert('Modal has been closed.');
            setVisible(!visible);
          }}>
          <View style={styles.modalView}>
            <View style={{justifyContent: "flex-end", flexDirection: "row"}}>
              <Pressable onPress={() => setVisible(!visible)}>
                <Icon name="cross" size={18} />
              </Pressable>
            </View>
            <Text
              style={{
                color: "black",
                marginTop: 25,
                textAlign: "center",
                fontSize: 15,
              }}>
              Why do you want to cancel the ride?
            </Text>
            <Text style={{textAlign: "center", marginTop: 10, fontSize: 13}}>
              Please select the reason for cancelation
            </Text>
            <View
              style={{borderWidth: 1, borderColor: "#828282", marginTop: 20}}
            />
            <View style={{padding: 23}}>
              {cancelReasons.map(item => (
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 15,
                    color: "black",
                    marginTop: 14,
                  }}>
                  {item.reason}
                </Text>
              ))}
            </View>
            <Text
              style={{
                color: "red",
                fontSize: 12,
                textAlign: "center",
                marginBottom: 15,
              }}>
              Note* Penalty will be applied if you cancel the ride
            </Text>
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "white",
  },
  modalView: {
    margin: 35,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },
});

export default CancelOrderModalReason;
