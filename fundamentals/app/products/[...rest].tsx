import { Text, View, StyleSheet } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function CatchAllProductDetails() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();
  return (
    <View style={styles.container}>
      <Text>Catch all Products</Text>
      <Text>Detail About the Product {rest.join("/")}</Text>
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
