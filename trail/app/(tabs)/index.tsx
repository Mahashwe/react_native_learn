import { Image } from "expo-image";
import { Platform, StyleSheet, View, Text, StatusBar } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import PokemonList from "@/data.json";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      {PokemonList.map((pokemon) => (
        <View style={styles.card} key={pokemon.id}>
          <ScrollView style={styles.scrollviewkey}>
            <Text style={styles.Cardtext}>
              {pokemon.name} - {pokemon.type}
            </Text>
          </ScrollView>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollviewkey: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#4dc0e0",
    borderRadius: 16,
    borderWidth: 2,
    padding: 20,
    marginBottom: 10,
  },
  Cardtext: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "bold",
  },
});
