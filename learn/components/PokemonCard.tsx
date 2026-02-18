import { View, Text, StyleSheet, Platform, Image } from "react-native";

interface PokemonCardProps {
  name: string;
  image: any;
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}

const getTypeDetails = (type: string) => {
  switch (type) {
    case "Water":
      return { color: "#4A90E2", icon: "💧" };
    case "Electric":
      return { color: "#F5A623", icon: "⚡" };
    case "Fire":
      return { color: "#D0021B", icon: "🔥" };
    default:
      return { color: "#000", icon: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}: PokemonCardProps) {
  const { color, icon } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>
      <Image
        style={styles.pokemonImage}
        source={image}
        accessibilityLabel={`${name} image`}
        resizeMode="contain"
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor: color }]}>
          <Text style={styles.icon}>{icon}</Text>
          <Text style={styles.text}>Type</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Moves:</Text>
        <Text style={styles.value}>{moves.join(", ")}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Weaknesses:</Text>
        <Text style={styles.value}>{weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    padding: 20,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowColor: "#333",
      },
      android: {
        elevation: 5,
      },
    }),
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 18,
    color: "#888",
  },
  pokemonImage: {
    width: 500,
    height: 200,
    alignSelf: "center",
    marginBottom: 16,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    marginRight: 8,
    fontSize: 18,
  },
  value: {
    fontSize: 16,
    color: "#555",
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    alignSelf: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  icon: {
    fontSize: 30,
    marginRight: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
