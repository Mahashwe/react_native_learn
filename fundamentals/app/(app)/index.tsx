import { Pressable, Text, View, StyleSheet } from "react-native";
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
      <Link href={"/profile"}>Go to Profile Page</Link>
      <Link href={"/products"}>Go to Products Page</Link>
      <Link href={"/products/bestsellers/playstation-5"} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.linkText}>Go to Bestsellers Page</Text>
        </Pressable>
      </Link>

      <Link href={"/login"} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.linkText}>Go to Login Page</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  linkText: {
    color: "blue",
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 5,
  },
});
