import { Image } from "expo-image";
import { Platform, StyleSheet, View, Text } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import Box from "@/components/box";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Box style={{ backgroundColor: "pink" }}>Box 1</Box>
      <Box style={{ backgroundColor: "lightblue" }}>Box 2</Box>
      <Box style={{ backgroundColor: "lightgreen" }}>Box 3</Box>
      <Box style={{ backgroundColor: "red" }}>Box 4</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 5</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 6</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
});
