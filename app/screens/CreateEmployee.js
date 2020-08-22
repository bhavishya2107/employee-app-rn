import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { TextInput, Button, IconButton, Colors } from "react-native-paper";
import { pickImageFromCamera, pickImageFromGallery } from "../utils/helpers";
import Axios from "axios";

const CreateEmployee = ({ navigation, route }) => {
  // const { item } = route.params;
  const inputValueItem = (type) => {
    if (route.params) {
      switch (type) {
        case "name":
          return route.params.item.name;
        case "phone":
          return route.params.item.phone.toString();
        case "email":
          return route.params.item.email;
        case "salary":
          return route.params.item.salary;
        case "picture":
          return route.params.item.picture;
        case "address":
          return route.params.item.address;
        case "position":
          return route.params.item.position;
      }
    }
    return "";
  };

  const [name, setName] = useState(inputValueItem("name"));
  const [phone, setPhone] = useState(inputValueItem("phone"));
  const [email, setEmail] = useState(inputValueItem("email"));
  const [salary, setSalary] = useState(inputValueItem("salary"));
  const [picture, setPicture] = useState(inputValueItem("picture"));
  const [address, setAddress] = useState(inputValueItem("address"));
  const [position, setPosition] = useState(inputValueItem("position"));
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

  const handleSubmit = () => {
    const data = {
      name,
      email,
      phone,
      salary,
      address,
      picture,
    };
    if (name === "" && phone === "" && email === "" && salary === "") {
      Alert.alert("Please fill all the details");
    } else {
      Axios.post("http://10.0.2.2:3000/employee", data).then((res) => {
        Alert.alert("Employee Created Successfully");
        navigation.navigate("Home");
      });
    }
  };

  const handleUpdate = (id) => {
    const data = {
      name,
      email,
      phone,
      salary,
      address,
      picture,
    };
    if (
      name === "" &&
      phone === "" &&
      email === "" &&
      salary === "" &&
      picture === ""
    ) {
      Alert.alert("Please fill all the details");
    } else {
      Axios.put(`http://10.0.2.2:3000/employee/${id}`, data).then((res) => {
        Alert.alert("Employee Updated Successfully");
        navigation.navigate("Home");
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={null}>
          <ScrollView>
            <TextInput
              label="Name"
              style={styles.inputStyle}
              value={name}
              mode="outlined"
              theme={theme}
              onChangeText={(text) => setName(text)}
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
              label="Position"
              style={styles.inputStyle}
              value={position}
              mode="outlined"
              theme={theme}
              onChangeText={(text) => setPosition(text)}
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
              label="Salary"
              style={styles.inputStyle}
              value={salary}
              mode="outlined"
              theme={theme}
              onChangeText={(text) => setSalary(text)}
            />
            <TextInput
              label="City"
              style={styles.inputStyle}
              value={address}
              mode="outlined"
              theme={theme}
              onChangeText={(text) => setAddress(text)}
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
            {route.params ? (
              <Button
                style={styles.inputStyle}
                icon="content-save"
                mode="contained"
                onPress={() => handleUpdate(route.params.item._id)}
                theme={theme.colors.secondary}
              >
                Update
              </Button>
            ) : (
              <Button
                style={styles.inputStyle}
                icon="content-save"
                mode="contained"
                onPress={handleSubmit}
                theme={theme.colors.secondary}
              >
                Save
              </Button>
            )}
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
                  color={Colors.white}
                  size={50}
                  onPress={() => setModal(false)}
                />
              </View>
            </Modal>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
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
