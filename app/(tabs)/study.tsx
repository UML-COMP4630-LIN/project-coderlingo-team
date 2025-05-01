import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import StudyCategories from "../components/study_categories";
import { useTheme } from "../theme/theme_manager"; 
import { useUserData } from '../context/UserContext';

 /*
    * File: study.tsx
    * Description: The study screen contains the list of study modules for the user to study before taking a quiz. 
*/

{/* Main function for StudyScreen */}
export default function StudyScreen() {

  {/* Dark Mode Toggle Settingd */}
  const { isDarkMode } = useTheme();
  const containerBackgroundColor = isDarkMode ? "#2C2C2C" : "#89CFF0";


  {/* A list of C topics to study */}
  return (
    <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      <StudyCategories/>
    </View>
  );
}

{/* Styling for Study Screen */}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, backgroundColor: "#89CFF0" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  button: { padding: 15, backgroundColor: "#ffd33d", borderRadius: 10, marginVertical: 10 },
  buttonText: { fontSize: 18, textAlign: "center" },
});


