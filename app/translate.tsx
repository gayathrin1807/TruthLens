import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Translate() {
    const router = useRouter();
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
  if (!text.trim()) return;

  const mockTranslation = "This is a mock translation result 🔄";
  setTranslatedText(mockTranslation);

};
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌐 Translate</Text>

      <Text style={styles.subtitle}>
        Translate text using Sarvam AI (multi-language support)
      </Text>

      {/* Language Selection (UI only for now) */}
      <View style={styles.languageBox}>
        <Text style={styles.label}>From Language</Text>
        <Text style={styles.dropdown}>Auto Detect ▼</Text>

        <Text style={styles.label}>To Language</Text>
        <Text style={styles.dropdown}>Tamil ▼</Text>
      </View>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter text..."
        value={text}
        onChangeText={setText}
        multiline
        textAlignVertical="top"
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleTranslate}>
        <Text style={styles.buttonText}>Translate</Text>
      </TouchableOpacity>

      {/* Output */}
      <Text style={styles.outputTitle}>Translated Text</Text>

      <View style={styles.outputBox}>
        <Text style={styles.outputText}>
          {translatedText || "Translation will appear here..."}
        </Text>
      </View>
<TouchableOpacity
  style={styles.button}
  onPress={() =>
    router.push({
      pathname: "/analysis-result",
      params: {
        type: "translate-analysis",
        data: translatedText,
      },
    })
  }
>
  <Text style={styles.buttonText}>🔍 Analyse</Text>
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

  languageBox: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 10,
  },

  dropdown: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginTop: 5,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    minHeight: 120,
    fontSize: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  outputTitle: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },

  outputBox: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    minHeight: 100,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  outputText: {
    fontSize: 16,
    color: "#374151",
  },
});