import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function ProductList() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Product List Page</Text>
      <Link href={"/products/1"}>Go to Product 1</Link>
      <Link href={"/products/2"}>Go to Product 2</Link>
      <Link href={"/products/3"}>Go to Product 3</Link>

      <Link href="/products/bestseller/playstation-5">PS5 (Bestsellers) </Link>

      <Link href="/products/deals/blackfridaysale/playstation-5">
        PS5 (Black Friday Sale)
      </Link>

      <Link href="/products/search/playstation-5">PS5 (Search) </Link>
    </View>
  );
}
