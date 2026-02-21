import { Text, View } from "react-native";
import { Redirect } from "expo-router";

export default function Profilepage() {
  // const isLoggedIn = false; Hardcoded
  const isLoggedIn = true; // Change this to Login page

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Profile Page</Text>
    </View>
  );
}
