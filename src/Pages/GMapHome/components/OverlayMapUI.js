import React, {createRef, useEffect} from "react";
import {View} from "react-native";
import {useSelector} from "react-redux";
import PickupLocation from "../../../Components/pickupLocation";
import ServiceNotAvailable from "../../../Components/serviceNotAvailable";
import {primaryColor} from "../../../Constants";
import {REDUX_HOME_MAP_TYPE_OPTIONS} from "../../../Utility/optionTypes";
import ActionSheet from "react-native-actions-sheet";
import ChooseVehicleScooty from "../../ChooseVehicleScooty";

const OverlayMapUI = () => {
  const {homeMapUIType} = useSelector(state => state.map);
  const actionSheetRef = createRef();

  useEffect(() => {
    actionSheetRef.current?.show();
  }, []);

  const MapType = () => {
    switch (homeMapUIType) {
      case REDUX_HOME_MAP_TYPE_OPTIONS.PICKUP_LOCATION:
        return <PickupLocation />;
      case REDUX_HOME_MAP_TYPE_OPTIONS.SERVICE_NOT_AVAILABLE:
        return <ServiceNotAvailable />;
      case REDUX_HOME_MAP_TYPE_OPTIONS.CHOOSE_VEHICLE_TYPE:
        return <ChooseVehicleScooty />;
      // case REDUX_HOME_MAP_TYPE_OPTIONS.CHOOSE_PERFECT_PILOT:
      //   return <PerfectPilot />;
      // case REDUX_HOME_MAP_TYPE_OPTIONS.RATE_PILOT: // call, msg, pin UI
      //   return <RatePilot />;
      // case REDUX_HOME_MAP_TYPE_OPTIONS.FINDING_PILOT:
      //   return <FindingPilot />;
      default:
        return null;
    }
  };

  return (
    <ActionSheet
      ref={actionSheetRef}
      gestureEnabled
      indicatorColor={primaryColor}
      closable={false}
      backgroundInteractionEnabled
      keyboardShouldPersistTaps="handled"
      //containerStyle={{maxHeight: 200, paddingBottom: 20}}
    >
      <MapType />
    </ActionSheet>
  );
};

export default OverlayMapUI;
