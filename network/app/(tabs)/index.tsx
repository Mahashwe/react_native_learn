import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useEffect } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function HomeScreen() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [PostTitle, setPostTitle] = useState("");
  const [PostBody, setPostBody] = useState("");
  const [isposting, setIsPosting] = useState(false);

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f27070" />
      </View>
    );
  }

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData(20);
    setRefreshing(false);
  };

  const addPost = async () => {
    if (!PostTitle || !PostBody) {
      alert("Please fill in both fields");
      return;
    }
    setIsPosting(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: PostTitle,
            body: PostBody,
            userId: 1,
          }),
        },
      );
      const newPost = await response.json();
      setData((prevData) => [newPost, ...prevData]);
      setPostTitle("");
      setPostBody("");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter post title"
            value={PostTitle}
            onChangeText={setPostTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter post body"
            value={PostBody}
            onChangeText={setPostBody}
          />
          <Button
            title={isposting ? "Posting..." : "Create Post"}
            onPress={addPost}
            disabled={isposting}
          />
        </View>
        <View style={styles.ListContainer}>
          <FlatList
            ListHeaderComponent={() => (
              <Text
                style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}
              >
                Posts
              </Text>
            )}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            )}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  ListContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 16,
    borderBlockColor: "#ccc",
    borderWidth: 5,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 12,
    backgroundColor: "white",
  },
});
