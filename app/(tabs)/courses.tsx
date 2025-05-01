import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import Categories from "../components/categories";
import { useTheme } from '../theme/theme_manager'

/*
    * File: courses.tsx
    * Description: This is the screen for displaying the different programming languages available. Only C 
  is functional for now
*/

export default function TopicsScreen() {
  {/* adjust screen for dark mode */}
  const { isDarkMode, setIsDarkMode } = useTheme();

  {/* list of all of the programming languages on the courses screen */}
  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <Categories/>
    </View>
  );
}

{ /* Styling for Courses Screen */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  lightBackground: {
    backgroundColor: "#89CFF0",
  },
  darkBackground: {
    backgroundColor: "#2C2C2C",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    padding: 15,
    backgroundColor: "#ffd33d",
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
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