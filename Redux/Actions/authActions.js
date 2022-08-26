import {ADD_TOKEN, LOGOUT, UPDATE_USER} from "../actionTypes";
import {store} from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {notify} from "./";

export const login = payload => {
  return {
    type: ADD_TOKEN,
    payload,
  };
};

export const logout = () => {
  AsyncStorage.clear();
  return {
    type: LOGOUT,
  };
};

export const updateUser = payload => {
  return {type: UPDATE_USER, user: payload};
};
