import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function AnalysisResult() {
 const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
      
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        AI Analysis Result
      </Text>

      {/* Summary */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Summary</Text>
        <Text>AI understood the content and detected misinformation patterns.</Text>
      </View>

      {/* Risk Score */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Risk Score</Text>
        <Text style={{ fontSize: 30, color: "red" }}>78%</Text>
      </View>

      {/* Explanation */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Explanation</Text>
        <Text>
          The content shows emotional manipulation, lacks verified sources,
          and contains exaggerated claims.
        </Text>
      </View>

      {/* Signals */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Detected Signals</Text>
        <Text>- Emotional language detected</Text>
        <Text>- No credible sources found</Text>
        <Text>- Possible AI-generated content</Text>
      </View>

       {/* Confidence */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Confidence</Text>
        <Text>92%</Text>
      </View>

      {/* Graph View Button */}
      <TouchableOpacity
        onPress={() => router.push("/graph")}
        style={{
          backgroundColor: "#2563EB",
          padding: 15,
          borderRadius: 12,
          alignItems: "center",
          marginTop: 25,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}>
          📊 View Relationship Graph
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}