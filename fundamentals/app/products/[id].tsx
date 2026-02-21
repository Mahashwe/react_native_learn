import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Detail About the Product with ID: {id}</Text>
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
