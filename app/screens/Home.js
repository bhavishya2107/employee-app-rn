import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <>
      <Card style={styles.card} onPress={() => navigation.navigate("Profile")}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
            }}
          />
          <View>
            <Text style={styles.headingText}>Riya Shefal</Text>
            <Text>Full Stack Developer</Text>
          </View>
        </View>
      </Card>
      <FAB
        style={styles.fab}
        icon="plus"
        theme={{ colors: { accent: "dodgerblue" } }}
        onPress={() => navigation.navigate("Employee")}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 5,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "600",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
