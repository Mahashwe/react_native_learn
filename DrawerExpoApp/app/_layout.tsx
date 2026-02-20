import { Tabs } from "expo-router";
import "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="app" options={{ href: null }} />
    </Tabs>
  );
}
