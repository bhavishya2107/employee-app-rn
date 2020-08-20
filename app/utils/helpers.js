import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";

const pickImageFromGallery = async (handleImageUpload) => {
  const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (granted) {
    const imageDetails = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!imageDetails.cancelled) {
      let newFile = {
        uri: imageDetails.uri,
        type: `app/${imageDetails.uri.split(".")[1]}`,
        name: `app.${imageDetails.uri.split(".")[1]}`,
      };
      handleImageUpload(newFile);
    }
  } else {
    Alert.alert("Please grant access permission");
  }
};

const pickImageFromCamera = async (handleImageUpload) => {
  const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (granted) {
    const imageDetailsFromCam = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!imageDetailsFromCam.cancelled) {
      let newFile = {
        uri: imageDetailsFromCam.uri,
        type: `app/${imageDetailsFromCam.uri.split(".")[1]}`,
        name: `app.${imageDetailsFromCam.uri.split(".")[1]}`,
      };
      handleImageUpload(newFile);
    }
  } else {
    Alert.alert("Please grant access permission");
  }
};

export { pickImageFromGallery, pickImageFromCamera };
