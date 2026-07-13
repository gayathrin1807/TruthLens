import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function AnalyzeText() {
  const [inputText, setInputText] = useState("");
  const router = useRouter();

  const handleAnalyze = () => {
    if (!inputText.trim()) return;

    console.log("Analyzing:", inputText);

    router.push({
      pathname: "/analysis-result",
      params: {
        text: inputText,
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📝 Analyze Text</Text>

      <Text style={styles.subtitle}>
        Paste text to verify misinformation, fake news, or AI-generated content.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter article, social media post, news content..."
        multiline
        value={inputText}
        onChangeText={setInputText}
        textAlignVertical="top"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAnalyze}
      >
        <Text style={styles.buttonText}>Analyze</Text>
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
    minHeight: 220,
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