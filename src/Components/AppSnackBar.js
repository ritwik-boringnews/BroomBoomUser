import React from "react";
import {Snackbar} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {hide} from "../../Redux/Actions/notificationActions";

const SnackBar = () => {
  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();

  const onDismissSnackBar = () => {
    dispatch(hide());
  };

  return (
    <Snackbar
      visible={notification.isVisible}
      onDismiss={onDismissSnackBar}
      // action={{
      //   label: "Done",
      //   onPress: onDismissSnackBar,
      // }}
    >
      {notification.message}
    </Snackbar>
  );
};

export default SnackBar;
