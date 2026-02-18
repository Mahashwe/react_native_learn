import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import PokemonCard from "@/components/PokemonCard";

const squirtleData = {
  name: "Squirtle",
  image: require("../../assets/images/1a.jpg"),
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Bubble"],
  weaknesses: ["Electric", "Grass"],
};

const pikachuData = {
  name: "Pikachu",
  image: require("../../assets/images/1b.png"),
  type: "Electric",
  hp: 35,
  moves: ["Thunder Shock", "Quick Attack"],
  weaknesses: ["Ground"],
};

const charmanderData = {
  name: "Charmander",
  image: require("../../assets/images/1c.png"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Leer"],
  weaknesses: ["Water", "Rock", "Ground"],
};

const poliwagData = {
  name: "Poliwag",
  image: require("../../assets/images/1d.jpg"),
  type: "Water",
  hp: 40,
  moves: ["Bubble", "Hypnosis"],
  weaknesses: ["Electric", "Grass"],
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...squirtleData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...charmanderData} />
        <PokemonCard {...poliwagData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#df8484",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
