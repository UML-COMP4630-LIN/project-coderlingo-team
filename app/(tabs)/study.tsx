import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import Categories from "../components/study_categories";
import { useTheme } from "../theme/theme_manager"; 

const topics = ["pointers", "memory", "functions"]; // example topics

export default function TopicsScreen() {
  const { isDarkMode } = useTheme();
  const containerBackgroundColor = isDarkMode ? "#2C2C2C" : "#89CFF0";
  return (
    <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      <Categories/>
      {/* <Text style={styles.title}>Select a Topic</Text>
      {topics.map((topic, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => router.push({ pathname: "/quiz", params: { topic } })}
        >
          <Text style={styles.buttonText}>{topic}</Text>
        </TouchableOpacity>
      ))}
      **/ }
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, backgroundColor: "#89CFF0" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  button: { padding: 15, backgroundColor: "#ffd33d", borderRadius: 10, marginVertical: 10 },
  buttonText: { fontSize: 18, textAlign: "center" },
});


