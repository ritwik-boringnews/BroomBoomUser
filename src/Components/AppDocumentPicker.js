import {View, TouchableOpacity, Text, ActivityIndicator} from "react-native";
import React, {useState} from "react";
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
          onDocumentPicked(res.data.data);
        } catch (error) {
          setError("error!");
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
    <>
      <View style={containerStyle}>
        <TouchableOpacity
          style={[buttonStyle, errormsg && {backgroundColor: "red"}]}
          onPress={() => {
            handleDocumentSelection();
          }}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <>
              <Icon name="upload" size={20} color="#fff" />
              {/* <UploadIcon size={18} color="white" /> */}
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "600",
                  color: "white",
                  marginLeft: 8,
                }}>
                {errormsg || title}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AppDocumentPicker;
