 /*
    * File: study_categories.tsx
    * Description: A list of study cateogires in the C Programming Language. 
    * Only pointers and arrays are functional 
*/


import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useTheme} from "../theme/theme_manager";

{/* Define list of study topics */}
type Props = {
  id: string;
  name: string;
};

const cTopics = [
  { id: '1', name: 'Pointers' },
  { id: '2', name: 'Arrays' },
  { id: '3', name: 'Functions' },
  { id: '4', name: 'Structures' },
  { id: '5', name: 'File I/O' },
];

export default function StudyCategories() {
  const router = useRouter();
  const { unlockedArray } = useLocalSearchParams();
  const isArrayUnlocked = unlockedArray === "true"; 
  const { isDarkMode, setIsDarkMode } = useTheme();
  const containerBackgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';

  {/* Push appropriate topic if available, otherwise send alert */}
  const handleButtonPress = (topic: Props) => {
    if (topic.name === 'Pointers') {
      router.push("/Study");
    } else if (topic.name === 'Arrays' && isArrayUnlocked) {
      router.push("/Study"); //WIP for next sections
    } else {
      alert(`The ${topic.name} topic is not available yet.`);
    }
  };

  {/* Return list of study topics */}
  return (
    <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      <Text style={styles.title}>STUDY</Text>
      <View style={styles.pathContainer}>
        {cTopics.map((topic, index) => (
          <TouchableOpacity
            key={topic.id}
            onPress={() => handleButtonPress(topic)}

            style={[
              styles.button,
              (topic.name === 'Pointers' || topic.name === 'Arrays' && isArrayUnlocked)
                ? styles.activeButton
                : styles.disabledButton,
             
            ]}
            disabled={!(topic.name === 'Pointers' || (topic.name === 'Arrays' && isArrayUnlocked))}
          >
            <Text style={styles.buttonText}>{topic.name}</Text>
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
      padding: 10,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      alignItems: 'center',
      color: '#FFFFFF',
      marginTop: 1,
      marginBottom: 10,


    },
    pathContainer: {
      position: 'relative',
      width: '70%',
      height: '60%',
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


    activeButton: {
      backgroundColor: '#4169E1',
    },
    disabledButton: {
      backgroundColor: '#808080',
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
  });
  