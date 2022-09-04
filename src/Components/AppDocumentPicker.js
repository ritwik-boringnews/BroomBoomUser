import React, {useState} from "react";
import {View, TouchableOpacity, Text, ActivityIndicator} from "react-native";
// import DocumentPicker, { types } from "react-native-document-picker";
import axios from "axios";
// import {UploadIcon} from "../../Utility/iconLibrary";
import DocumentPicker, {types} from "react-native-document-picker";
import {useDispatch} from "react-redux";
import {notify} from "../../Redux/Actions";
import {API_UPLOAD_BASE_URL} from "../Utility/config";
import Icon from "react-native-vector-icons/FontAwesome5";

const AppDocumentPicker = ({
  title,
  onDocumentPicked,
  containerStyle,
  buttonStyle,
}) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [errormsg, setError] = useState("");
  const handleDocumentSelection = () => {
    DocumentPicker.pick({
      type: [types.pdf, types.images],
    })
      .then(async response => {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", {
          name: response[0].name,
          uri: response[0].uri,
          type: response[0].type,
        });
        try {
          // throw new Error("error");
          const res = await axios.post(
            `${API_UPLOAD_BASE_URL}/upload/single`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            },
          );
          setError("");
          onDocumentPicked(res.data.data, true);
        } catch (error) {
          setError("error!");
          onDocumentPicked("Something error happened", false);
          dispatch(
            notify({
              message: error.message || "Error uploading document",
              type: "error",
            }),
          );
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          backgroundColor: "#347EEA",
          paddingVertical: 10,
          paddingHorizontal: 25,
          borderRadius: 50,
        },
        errormsg && {backgroundColor: "red"},
      ]}
      onPress={handleDocumentSelection}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          <Icon name="upload" size={20} color="#fff" />
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
              color: "white",
              marginLeft: 8,
            }}>
            Upload
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default AppDocumentPicker;
