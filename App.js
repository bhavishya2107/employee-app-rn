import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

// import Home from "./app/screens/Home";
import CreateEmployee from "./app/screens/CreateEmployee";
import ProfileScreen from './app/screens/ProfileScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <CreateEmployee /> */}
      <ProfileScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "seashell",
    marginTop: Constants.statusBarHeight,
  },
});
