import React, { useState } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { TextInput, Button, IconButton, Colors } from "react-native-paper";
import { pickImageFromCamera, pickImageFromGallery } from "../utils/helpers";

const CreateEmployee = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

  const handleImageUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "employee-app-rn");
    data.append("cloud_name", "saktgamerr");
    fetch("https://api.cloudinary.com/v1_1/saktgamerr/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.url);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        style={styles.inputStyle}
        value={name}
        mode="outlined"
        theme={theme}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Phone"
        style={styles.inputStyle}
        value={phone}
        mode="outlined"
        keyboardType="number-pad"
        theme={theme}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        label="Email"
        style={styles.inputStyle}
        value={email}
        mode="outlined"
        theme={theme}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Salary"
        style={styles.inputStyle}
        value={salary}
        mode="outlined"
        theme={theme}
        onChangeText={(text) => setSalary(text)}
      />
      {picture ? <Text>Uploaded</Text> : null}
      <Button
        style={styles.inputStyle}
        icon="upload"
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        style={styles.inputStyle}
        icon="content-save"
        mode="contained"
        onPress={() => setModal(true)}
        theme={theme.colors.secondary}
      >
        Save
      </Button>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={styles.modalView}>
          <View style={styles.modalButtons}>
            <Button
              icon="camera-image"
              mode="contained"
              onPress={() => pickImageFromCamera(handleImageUpload)}
            >
              Camera
            </Button>
            <Button
              icon="folder-image"
              mode="contained"
              onPress={() => pickImageFromGallery(handleImageUpload)}
            >
              Gallery
            </Button>
          </View>
          <IconButton
            style={{
              alignSelf: "center",
            }}
            icon="close-circle"
            color={Colors.black}
            size={50}
            onPress={() => setModal(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CreateEmployee;
const theme = {
  myOwnProperty: true,
  colors: {
    primary: "dodgerblue",
    secondary: "springgreen",
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputStyle: {
    marginVertical: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    top: 550,
    width: "100%",
    borderRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "rgba(34,100,250,0.7)",
    alignSelf: "center",
  },
});
