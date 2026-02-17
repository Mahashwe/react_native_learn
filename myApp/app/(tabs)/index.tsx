import { Platform, StyleSheet, View } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Text, Image } from "react-native";
const logo = require('../../assets/images/1.jpg');


export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "plum" }}>
      <Text style={{ fontSize: 50, color: "black", fontStyle: "italic" }}>Hello World</Text>
      <Image source={logo} style={{ width: 200, height: 200 }} />
    </View>
  );
}