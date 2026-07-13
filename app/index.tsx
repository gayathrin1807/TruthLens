import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
  source={require("../assets/images/logo.png")}
  style={styles.logo}
/>

      <Text style={styles.title}>TruthLens</Text>

      <Text style={styles.tagline}>
        Detect! Verify! Trust!
      </Text>

      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
  width: 220,
  height: 220,
  resizeMode: "contain",
  marginBottom: 25,
},

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2563EB",
  },

  tagline: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },

  loading: {
    marginTop: 50,
    fontSize: 14,
    color: "#999",
  },
});