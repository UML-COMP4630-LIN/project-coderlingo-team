import { useLocalSearchParams, router } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ResultScreen() {
  const { score, total } = useLocalSearchParams();

  // Convert from string to number
  const finalScore = Number(score);
  const totalQuestions = Number(total);

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>
        You scored {finalScore} out of {totalQuestions}
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/(tabs)/courses")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back to Module</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  scoreText: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  button: {
    padding: 12,
    backgroundColor: "#ffd33d",
    borderRadius: 8,
    minWidth: 200,
  },
  buttonText: { fontSize: 18, textAlign: "center" },
});