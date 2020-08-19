import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";

const pickImageFromGallery = async () => {
  const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (granted) {
    const imageDetails = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    console.log(imageDetails);
  } else {
    Alert.alert("Please grant access permission");
  }
};

const pickImageFromCamera = async () => {
  const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (granted) {
    const imageDetailsFromCam = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    console.log(imageDetailsFromCam);
  } else {
    Alert.alert("Please grant access permission");
  }
};

export { pickImageFromGallery, pickImageFromCamera };
