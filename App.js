import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import Home from "./app/screens/Home";
import CreateEmployee from "./app/screens/CreateEmployee";
import ProfileScreen from "./app/screens/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const options = {
  title: "Employee List",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "dodgerblue",
  },
};

App = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ ...options, title: "Employees" }}
        />
        <Stack.Screen
          name="Employee"
          component={CreateEmployee}
          options={{ ...options, title: "Create Employee" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ ...options, title: "Employee Profile" }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "seashell",
    marginTop: Constants.statusBarHeight,
  },
});
