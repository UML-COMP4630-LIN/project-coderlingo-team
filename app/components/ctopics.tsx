import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

type Props = {
  id: string;
  name: string;
};
// list of topics for C
const cTopics = [
  { id: '1', name: 'Pointers' },
  { id: '2', name: 'Arrays' },
  { id: '3', name: 'Functions' },
  { id: '4', name: 'Structures' },
  { id: '5', name: 'File I/O' },
];

export default function CTopics() {
  const router = useRouter();

  const handleButtonPress = (topic: Props) => {
    if(topic.name === 'Pointers' ) {
      router.push("/quiz");
    } else {
      alert(`The ${topic.name} topic is not available yet.`);
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>C Programming Topics</Text>
      {cTopics.map((topic) => (
        <TouchableOpacity
          key={topic.id}
          style={styles.button}
          onPress={() => handleButtonPress(topic)}
        >
          <Text style={styles.buttonText}>{topic.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#89CFF0',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
