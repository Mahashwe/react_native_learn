import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About", { name: "Maha" })}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
