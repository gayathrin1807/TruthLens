import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

export default function AnalyzeLink() {
    const router = useRouter();
  const [url, setUrl] = useState("");

 const handleAnalyze = () => {
  if (!url.trim()) return;

  router.push({
    pathname: "/analysis-result",
    params: {
      type: "link",
      data: url,
    },
  });
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🔗 Analyze Link</Text>

      <Text style={styles.subtitle}>
        Paste a website, article, or social media URL to verify its credibility
        and detect misinformation.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="https://example.com"
        value={url}
        onChangeText={setUrl}
        autoCapitalize="none"
        keyboardType="url"
      />

      <TouchableOpacity style={styles.button} onPress={handleAnalyze}>
        <Text style={styles.buttonText}>Analyze Link</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F9FF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    backgroundColor: "#2563EB",
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});