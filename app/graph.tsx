import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function GraphView() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📊 Graph View</Text>

      <Text style={styles.subtitle}>
        Visualizing relationships between sources, claims, and fact-checks
      </Text>

      <View style={styles.graphContainer}>
        <View style={styles.node}>
          <Text style={styles.nodeText}>🌐 Source</Text>
        </View>

        <Text style={styles.arrow}>↓</Text>

        <View style={styles.node}>
        <Text style={styles.nodeText}>📝 Claim X</Text>
        </View>

        <Text style={styles.arrow}>↓</Text>

        <View style={styles.node}>
          <Text style={styles.nodeText}>✅ Fact Check</Text>
        </View>

        <Text style={styles.arrow}>↓</Text>

        <View style={styles.safeNode}>
          <Text style={styles.nodeText}>✔ Verified</Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Graph Insights</Text>

        <Text style={styles.infoText}>
          • Claim found in 12 related posts
        </Text>

        <Text style={styles.infoText}>
          • 3 trusted fact-check sources detected
        </Text>

        <Text style={styles.infoText}>
          • Confidence Score: 92%
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
    marginBottom: 30,
  },

  graphContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  node: {
    backgroundColor: "#DBEAFE",
    padding: 15,
    borderRadius: 12,
    width: 180,
    alignItems: "center",
  },

  safeNode: {
    backgroundColor: "#DCFCE7",
    padding: 15,
    borderRadius: 12,
    width: 180,
    alignItems: "center",
  },

  nodeText: {
    fontWeight: "bold",
  },

  arrow: {
    fontSize: 30,
    marginVertical: 10,
    color: "#2563EB",
  },

  infoCard: {
    backgroundColor: "#F8FAFC",
    padding: 20,
    borderRadius: 15,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

  infoText: {
    fontSize: 15,
    marginBottom: 10,
  },
});