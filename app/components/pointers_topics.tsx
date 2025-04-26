import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect } from "react";
import CustomHeader from "../components/header";

type Subtopic = {
  id: string;
  name: string;
}
// list of subtopics for pointers
const pointerSubtopics = [
  { id: '1', name: 'Pointer Basics' },
  { id: '2', name: 'Memory Management' },
  { id: '3', name: 'Pointer Arithmetic' },
  { id: '4', name: 'Pointer Errors' },
  { id: '5', name: 'Double Pointers' },
];

export default function PointerTopics() {
  const router = useRouter();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleSubtopicPress = (subtopic: Subtopic) => {
    router.push({
      pathname: "/quiz",
      params: { subtopic: subtopic.name.toLowerCase() },
    });
  };
  

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={styles.title}>Pointer Topics</Text>
        {pointerSubtopics.map((subtopic) => (
          <TouchableOpacity
            key={subtopic.id}
            style={styles.button}
            onPress={() => handleSubtopicPress(subtopic)}
          >
            <Text style={styles.buttonText}>{subtopic.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4169E1',
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
