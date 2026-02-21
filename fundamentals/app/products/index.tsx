import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function ProductList() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Product List Page</Text>
      <Link href={"/products/1"}>Go to Product 1</Link>
      <Link href={"/products/2"}>Go to Product 2</Link>
      <Link href={"/products/3"}>Go to Product 3</Link>
    </View>
  );
}
