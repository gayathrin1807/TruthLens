import { useRouter } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AnalyzeImage() {
    const router = useRouter();
    const handleSelectImage = () => {
  console.log("Select Image");
};

  const handleAnalyze = () => {
  router.push({
    pathname: "/analysis-result",
    params: {
      type: "image",
    },
  });
};



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🖼️ Analyze Image</Text>

      <Text style={styles.subtitle}>
        Upload an image to check for AI-generated, manipulated, or misleading
        visual content.
      </Text>

      <View style={styles.uploadBox}>
        <Text style={styles.uploadIcon}>🖼️</Text>
        <Text style={styles.uploadText}>No Image Selected</Text>
      </View>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={handleSelectImage}
      >
        <Text style={styles.secondaryButtonText}>Select Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAnalyze}>
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
  uploadBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    minHeight: 220,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  uploadIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 16,
    color: "#6B7280",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2563EB",
  },
  secondaryButtonText: {
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#2563EB",
    marginTop: 15,
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