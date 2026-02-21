import { Slot } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FooterComponent } from "react-native-screens/lib/typescript/components/ScreenFooter";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Welcome to the App</Text>
      </View>

      <Slot />
      <View style={styles.footer}>
        <Text>This is the Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 90,
    backgroundColor: "#f7c7c7",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 40,
    backgroundColor: "#93e8f9",
    justifyContent: "center",
    alignItems: "center",
  },
});
