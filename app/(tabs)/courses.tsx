import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import Categories from "../components/categories";

const topics = ["pointers", "memory", "functions"]; // example topics

export default function TopicsScreen() {
  return (
    <View style={styles.container}>
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
  container: { flex: 1, padding: 5, backgroundColor: "#fff" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  button: { padding: 15, backgroundColor: "#ffd33d", borderRadius: 10, marginVertical: 10 },
  buttonText: { fontSize: 18, textAlign: "center" },
});
















/**import { View, StyleSheet } from 'react-native';
import Categories from '../components/categories';

{ CoursesScreen: Returns a View with a list of categories }
export default function CoursesScreen() {
  return (
    <View>
      <Categories/>
    </View>
  );
}

{/** CSS for Courses Screen }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 5,
  },
  text: {
    color: '#000',
  },
}); */