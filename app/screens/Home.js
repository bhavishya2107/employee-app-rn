import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Card, FAB } from "react-native-paper";
import axios from "axios";

const Home = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllEmployees();
  }, [data]);

  const getAllEmployees = () => {
    axios.get("http://10.0.2.2:3000/employee").then(({ data }) => {
      setData(data.allEmployee);
      setLoading(false);
    });
  };

  const renderItem = (item) => {
    return (
      <Card
        style={styles.card}
        onPress={() => navigation.navigate("Profile", { item })}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }}
            source={{
              uri: `${item.picture}`,
            }}
          />
          <View>
            <Text style={styles.headingText}>{item.name}</Text>
            <Text>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return renderItem(item);
          }}
          refreshing={loading}
          onRefresh={() => getAllEmployees()}
        />
      )}

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
