import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/Screens/HomeScreen";
import AboutScreen from "@/Screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{
          name: "Guest",
        }}
      />
    </Stack.Navigator>
  );
}
