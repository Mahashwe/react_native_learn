import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import PokemonList from "@/data.json";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <SafeAreaView>
        <FlatList
          data={PokemonList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.Cardtext}>{item.name}</Text>
              <Text style={styles.Cardtext}>{item.type}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.Cardtext}>No Pokémon available</Text>
          }
          ListHeaderComponent={
            <Text style={styles.Cardtext}>PokeMon List</Text>
          }
          ListFooterComponent={<Text style={styles.Cardtext}>End of List</Text>}
          contentContainerStyle={styles.scrollviewkey}
        />
      </SafeAreaView>
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
