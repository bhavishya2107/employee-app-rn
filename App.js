import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import Home from "./app/screens/Home";
import CreateEmployee from "./app/screens/CreateEmployee";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <CreateEmployee />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    marginTop: Constants.statusBarHeight,
  },
});
