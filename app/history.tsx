import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function History() {
    const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📜 History</Text>

      <View style={styles.card}>
        <Text style={styles.analysisType}>📝 Text Analysis</Text>
        <Text>Risk Score: 78%</Text>
        <Text>Date: 23 Jun 2026 | 10:15 AM</Text>
    
       <TouchableOpacity
  style={styles.button}
  onPress={() => router.push("/analysis-result")}>
  <Text style={styles.buttonText}>View Result</Text>
</TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.analysisType}>🖼️ Image Analysis</Text>
        <Text>Risk Score: 45%</Text>
        <Text>Date: 22 Jun 2026 | 08:30 PM</Text>
        <TouchableOpacity
  style={styles.button}
  onPress={() => router.push("/analysis-result")}>
  <Text style={styles.buttonText}>View Result</Text>
</TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.analysisType}>🎥 Video Analysis</Text>
        <Text>Risk Score: 60%</Text>
        <Text>Date: 21 Jun 2026 | 07:00 PM</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/analysis-result")}>
  <Text style={styles.buttonText}>View Result</Text>
</TouchableOpacity>
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

  analysisType: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});