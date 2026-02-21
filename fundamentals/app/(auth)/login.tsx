import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { router } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button onPress={() => router.push("/profile")}>Go to Profile</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
