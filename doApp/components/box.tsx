type elements = {
  children: React.ReactNode;
  style?: object;
};

import { View, Text, StyleSheet } from "react-native";

export default function Box({ children, style }: elements) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    flexGrow: 1,
  },
  text: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
