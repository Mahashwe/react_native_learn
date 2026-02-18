import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import Box from "@/components/box";

export default function HomeScreen() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "60%" : "90%",
            height: windowHeight > 500 ? "60%" : "90%",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              fontSize: windowWidth > 500 ? 32 : 24,
            },
          ]}
        >
          Welcome
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "lightblue",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
