import { Image } from "expo-image";
import {
  Platform,
  SafeAreaViewBase,
  StyleSheet,
  TextInput,
  View,
  Text,
  Switch,
} from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useState } from "react";

export default function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Welcome to the Tabs App!</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
        />

        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Message"
          multiline
          numberOfLines={4}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
        />
      </SafeAreaView>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ false: "#484848", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#9cbbf9",
  },
  form: {
    gap: 15,
    color: "#fffefe",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fffefe",
    padding: 12,
    borderRadius: 8,
    color: "#fffefe",
  },
  multiline: {
    marginTop: 10,
    marginBottom: 10,
    height: 100,
    textAlignVertical: "top",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fffefe",
    textAlign: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: "#fffefe",
  },
});
