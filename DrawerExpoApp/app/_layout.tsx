import { Drawer } from "expo-router/drawer";
import "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Dashboard" }} />
      <Drawer.Screen name="settings" options={{ title: "Settings" }} />
    </Drawer>
  );
}
