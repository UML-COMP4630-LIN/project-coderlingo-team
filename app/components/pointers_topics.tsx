import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect } from "react";
import CustomHeader from "../components/header";
import { useTheme } from '../theme/theme_manager';

type Subtopic = {
  id: string;
  name: string;
}

// List of subtopics for pointers
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

  // dark mode settings
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';
  const buttonBackgroundColor = isDarkMode ? '#444' : '#4169E1';
  const buttonTextColor = '#FFF';
  const titleColor = '#FFF';

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
    <View style={{ flex: 1, backgroundColor }}>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={[styles.title, { color: titleColor }]}>Pointer Topics</Text>
        {pointerSubtopics.map((subtopic) => (
          <TouchableOpacity
            key={subtopic.id}
            style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
            onPress={() => handleSubtopicPress(subtopic)}
          >
            <Text style={[styles.buttonText, { color: buttonTextColor }]}>{subtopic.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
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
    fontWeight: 'bold',
  },
});
