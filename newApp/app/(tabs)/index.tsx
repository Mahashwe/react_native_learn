import { Image } from "expo-image";
import { Platform, StyleSheet, View, Text } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to New App</Text>
      <View style={[styles.box, styles.blue]}>
        <Text>Box1</Text>
      </View>
      <View style={[styles.box, styles.pink]}>
        <Text>Box2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
  title: {
    fontSize: 50,
    color: "black",
    fontStyle: "italic",
    textAlign: "center",
  },

  box: {
    width: 100,
    height: 100,
    margin: 10,
    textAlign: "center",
    justifyContent: "center",
    padding: 20,
  },
  blue: {
    backgroundColor: "lightblue",
  },
  pink: {
    backgroundColor: "lightpink",
  },
});
