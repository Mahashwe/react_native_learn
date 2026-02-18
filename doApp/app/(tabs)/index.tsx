import { Image } from "expo-image";
import { Platform, StyleSheet, View, Text, Dimensions } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import Box from "@/components/box";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: windowWidth > 500 ? "60%" : "90%",
    height: windowHeight > 500 ? "60%" : "90%",
    backgroundColor: "lightblue",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: windowWidth > 500 ? 32 : 24,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
