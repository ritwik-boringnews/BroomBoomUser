import React from "react";
import {TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useSelector, useDispatch} from "react-redux";
import {backToOrigin, backToDestination} from "../../Redux/Actions/mapActions";
import {REDUX_HOME_MAP_TYPE_OPTIONS} from "../Utility/optionTypes";

const GMapHomeBackBtn = () => {
  const dispatch = useDispatch();
  const {isShowHomeMapBackBtn, homeMapUIType, locInputType} = useSelector(
    state => state.map,
  );
  if (!isShowHomeMapBackBtn) return;

  const handleBack = () => {
    if (
      homeMapUIType === REDUX_HOME_MAP_TYPE_OPTIONS.PICKUP_LOCATION &&
      locInputType === "destination"
    ) {
      dispatch(backToOrigin());
      return;
    }
    if (homeMapUIType === REDUX_HOME_MAP_TYPE_OPTIONS.SERVICE_NOT_AVAILABLE) {
      dispatch(backToDestination());
    }
  };

  return (
    <TouchableOpacity
      onPress={handleBack}
      style={{
        position: "absolute",
        top: 50,
        right: 25,
        backgroundColor: "white",
        zIndex: 1,
        padding: 8,
        borderRadius: 10,
      }}>
      <Ionicons name="arrow-back-outline" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default GMapHomeBackBtn;
