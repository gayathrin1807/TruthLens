import React from "react";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>TruthLens</Text>

      <Text style={styles.subtitle}>
        Detect misinformation with AI
      </Text>

      <View>
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/analyze-text")}
        >
          <Text style={styles.cardTitle}>📝 Analyze Text</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/analyze-image")}
        >
          <Text style={styles.cardTitle}>🖼️ Analyze Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/analyze-video")}
        >
          <Text style={styles.cardTitle}>🎥 Analyze Video</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/analyze-link")}
        >
          <Text style={styles.cardTitle}>🔗 Analyze Link</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/translate")}
        >
          <Text style={styles.cardTitle}>🌐 Translate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/profile")}
        >
          <Text style={styles.cardTitle}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F7FB",
    minHeight: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2563EB",
    marginTop: 50,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
});