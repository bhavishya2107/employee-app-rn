import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Platform,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const ProfileScreen = ({ route, navigation }) => {
  const {
    _id,
    name,
    picture,
    email,
    position,
    address,
    salary,
    phone,
  } = route.params.item;
  const handleOpenDialer = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:+1-565434");
    } else {
      Linking.openURL("telprompt:12345");
    }
  };

  const handleDeleteEmployee = (id) => {
    axios.delete(`http://10.0.2.2:3000/employee/${id}`).then((res) => {
      Alert.alert("Deleted Successfully");
      navigation.navigate("Home");
    });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#131126", "#29c2b0", "#3629c2"]}
        style={{ height: "20%" }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          source={
            picture
              ? {
                  uri: `${picture}`,
                }
              : {
                  uri:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                }
          }
        />
      </View>
      <View style={{ alignItems: "center", margin: 5 }}>
        <Title>{name}</Title>
        <Text>{position}</Text>
      </View>
      <Card
        style={styles.card}
        onPress={() => {
          Linking.openURL(`mailto:${email}`);
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={35} />
          <Text style={styles.text}>{email}</Text>
        </View>
      </Card>
      <Card style={styles.card} onPress={handleOpenDialer}>
        <View style={styles.cardContent}>
          <MaterialIcons name="phone" size={35} />
          <Text style={styles.text}>{phone}</Text>
        </View>
      </Card>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={35} />
          <Text style={styles.text}>{salary}$</Text>
        </View>
      </Card>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <MaterialIcons name="home" size={35} />
          <Text style={styles.text}>{address}</Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 20,
        }}
      >
        <Button
          icon="account-edit"
          mode="contained"
          onPress={() => {
            navigation.navigate("Employee", { item: route.params.item });
          }}
          theme={theme}
        >
          Edit
        </Button>
        <Button
          icon="delete"
          mode="contained"
          onPress={() => handleDeleteEmployee(_id)}
          theme={theme}
        >
          Remove Employee
        </Button>
      </View>
    </View>
  );
};

export default ProfileScreen;
const theme = {
  colors: {
    primary: "dodgerblue",
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: -50,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
  },
  cardContent: { flexDirection: "row", alignItems: "center" },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});
