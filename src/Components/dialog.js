import * as React from "react";
import {View} from "react-native";
import {Button, Paragraph, Dialog, Portal, Provider} from "react-native-paper";

const AppDialog = ({
  visible = false,
  setVisible = () => null,
  text = "",
  onConfirm = () => null,
  onCancel = () => null,
  title = "",
}) => {
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Content style={{fontSize: 15}}>
              <Paragraph>{text}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  hideDialog();
                  onConfirm();
                }}>
                Yes
              </Button>
              <Button
                onPress={() => {
                  hideDialog();
                  onCancel();
                }}>
                No
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default AppDialog;
