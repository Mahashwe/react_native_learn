import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Homepage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Page </Text>
      <Link href={"/about"}>Go to About Page</Link>
      <Link href={"/profile/index"}>Go to Profile Page</Link>
    </View>
  );
}
