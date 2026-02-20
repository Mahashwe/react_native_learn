import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen({ route }: any) {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About Screen</Text>
        <Text style={styles.subtitle}>Hello, {name}!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
    color: "#666",
  },
});
