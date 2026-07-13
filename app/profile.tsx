import { useRouter } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

export default function Profile() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>👤 Profile</Text>

      <Text style={styles.subtitle}>
        Manage your account and preferences
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/profile-details")}
      >
        <Text style={styles.cardTitle}>👤 Profile Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/history")}
      >
        <Text style={styles.cardTitle}>📜 History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/settings")}
      >
        <Text style={styles.cardTitle}>⚙️ Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 20,
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