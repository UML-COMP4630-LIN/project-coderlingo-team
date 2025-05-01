 /*
    * File: ctopics.tsx
    * Description: A list of topics in the C Programming Language. Only topics is functional 
*/

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import CustomHeader from "../components/header";
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from "react";
import { useTheme } from '../theme/theme_manager';

{/* Define properties for list of topics */}
type Props = {
  id: string;
  name: string;
};

{/* List of topics for C */}
const cTopics = [
  { id: '1', name: 'Pointers' },
  { id: '2', name: 'Arrays' },
  { id: '3', name: 'Functions' },
  { id: '4', name: 'Structures' },
  { id: '5', name: 'File I/O' },
];

export default function CTopics() {

  const router = useRouter();
  const navigation = useNavigation();

  {/* Dark mode settings */}
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';
  const buttonBackgroundColor = isDarkMode ? '#444' : '#4169E1';
  const buttonTextColor = '#FFF';
  const titleColor = '#FFF';

   {/* Remove expo header */}
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

   {/* Navigate to Pointers subtopic page, otherwise return an alert */}
  const handleButtonPress = (topic: Props) => {
    if (topic.name === 'Pointers') {
      router.push("/components/pointers_topics");
    } else {
      alert(`The ${topic.name} topic is not available yet.`);
    }
  };

   {/* A list of pressable topics in the C language */}
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={[styles.title, { color: titleColor }]}>C Programming Topics</Text>
        {cTopics.map((topic) => (
          <TouchableOpacity
            key={topic.id}
            style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
            onPress={() => handleButtonPress(topic)}
          >
            <Text style={[styles.buttonText, { color: buttonTextColor }]}>{topic.name}</Text>
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
