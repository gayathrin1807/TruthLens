import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Settings() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>🌐 Language</Text>
        <Text style={styles.value}>English</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>ℹ️ About TruthLens</Text>
        <Text style={styles.value}>
          Version 1.0
        </Text>

        <Text style={styles.about}>
          AI-powered misinformation detection platform that helps users identify misleading content across text, images, videos, and links.
        </Text>
      </View>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
    marginTop: 50,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  value: {
    fontSize: 16,
    color: "#333",
  },

  about: {
    marginTop: 10,
    color: "#666",
    lineHeight: 22,
  },
});