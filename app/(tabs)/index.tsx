<<<<<<< HEAD
import { Text, View, StyleSheet } from "react-native";

{/** WIP Home Screen */}
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Coderlingo Official App. More Coming Soon.</Text>
    </View>
  );


}

{/** CSS for Home Screen */}
=======
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coderlingo Official App</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/quiz")}>
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

>>>>>>> 7c52e55 (Initial commit)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
  },
  text: {
    color: '#000',
  },
});
=======
    padding: 20,
  },
  text: {
    color: '#000',
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffd33d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
});
>>>>>>> 7c52e55 (Initial commit)
