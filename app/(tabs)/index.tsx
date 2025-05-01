/* Mobile App Development II -- COMP.4631 Honor Statement
The practice of good ethical behavior is essential for maintaining good order in the classroom, providing an enriching learning experience for students, and training as a practicing computing professional upon graduation. This practice is manifested in the University's Academic Integrity policy. Students are expected to strictly avoid academic dishonesty and adhere to the Academic Integrity policy as outlined in the course catalog. Violations will be dealt with as outlined therein. All programming assignments in this class are to be done by the student alone unless otherwise specified. No outside help is permitted except the instructor and approved tutors.
     
I certify that the work submitted with this assignment is mine and was generated in a manner consistent with this document, the course academic policy on the course website on Blackboard, and the UMass Lowell academic code.

Date: 04/02/2025
Name: Rohan Mallu, Brendon So, William King, Shaan Gill */

import { View, Text, ScrollView, StyleSheet, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/theme_manager';
import { router, useRouter } from 'expo-router';
import { Alert } from 'react-native';

 /*
    * File: index.tsx
    * Description: All of the content rendered on the home screen of the app. 
*/
 
 {/** Create props to render all of the components on the home page */}
type Props = {
  id: string,
  name: string,
};

{/* * data to render clickable quizzes and study modules on the home screen */}
const quizCards = [{id: '1', name: "Pointer Basics"}, {id: '2', name: "Memory Management"}, {id: '3', name: "Pointer Arithmetic"}];
const studyCards = [{id: '1', name: "Pointers"}, {id: '2', name: "Arrays"}];

/**
 * 
 * @param item an object from one of the JSON arrays
 * @returns A clickable component that takes you to a study module or quiz
 */

function renderItem({item} : {item: Props}) {
  return(
    <TouchableOpacity onPress={() => itemPressed(item)}>
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  );

}

/**
 * 
 * @param item An object from one the JSON arrays
 * This function take you to the correct module/quiz depending on the name of the item
 */
function itemPressed(item: Props) {
  // pressable components for quizzes
  if(item.name === "Pointer Basics" || item.name === "Memory Management" || item.name === "Pointer Arithmetic") {
    router.push({
      pathname: "/quiz",
      params: { subtopic: item.name.toLowerCase() },
    });
  }
  // pressable components for quizzes
  else {
    router.push('/Study');
  }
}

/**
 * Main function for rendering the home screen
 * @returns A fully functional homescreen
 */
export default function HomeScreen() {
  { /* dark mode settings */}
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';
  const sectionBackgroundColor = isDarkMode ? '#444' : '#4169E1';
  const buttonColor = isDarkMode ? '#28a745' : '#28a745';
  const textColor = '#FFF';
  
  {/* used to navigate to other pages  */}
  const router = useRouter();

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>

      {/* Welcome Banner */}
      <Text style={[styles.welcomeText, { color: textColor }]}>Welcome back!</Text>

      {/* Ideally, users should be able to continue were they left off from here*/}
      {/* Quiz Section */}
      <Section title="Quizzes" backgroundColor={backgroundColor}>
        {/*A list of cards that lead to a quiz in the Quiz Section*/}
        <FlatList data={quizCards} renderItem={renderItem} horizontal={true} keyExtractor={(item) => item.id} numColumns={1}/>
      </Section>
      

      {/* Study Section */}
      <Section title="Study" backgroundColor={backgroundColor}>
        {/*A list of cards that lead to a study module in the Quiz Section*/}
        <FlatList data={studyCards} renderItem={renderItem} horizontal={true} keyExtractor={(item) => item.id} numColumns={1}/>
      </Section>

      {/* Bookmarks Section */}
      <Section title="Bookmarks" backgroundColor={backgroundColor}>
        {/* Button to navigate to Bookmarks */}
        <Pressable style={[styles.continueCard, { backgroundColor: buttonColor }]} onPress={() => router.push("/components/bookmarks")}>
          <Text style={[styles.continueText, { color: textColor }]}>Go to Bookmarks</Text>
        </Pressable>
      </Section>

    </ScrollView>
  );
}

/**
 * 
 * @param title The name of the section, which is a view
 * @param children Any other components inside the section such as Text and TouchableOpacity Elements
 * @param backgroundColor Change the color when dark mode is toggled on 
 * @returns A section header with elements such as quizzes, study modules, and bookmarks
 */
function Section({ title, children, backgroundColor }: { title: string; children: React.ReactNode; backgroundColor: string }) {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.cardTitle, { color: '#FFF' }]}>{title}</Text>
      <ScrollView style={styles.scrollableContent}>{children}</ScrollView>
    </View>
  );
}

{/* Styling for Home Screen */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollableContent: {
    maxHeight: 300,
  },
  continueCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  continueText: {
    fontSize: 18,
    fontWeight: '600',
  },
  noProgressText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  item: {
    height: 120,
    width: 150,
    padding: 10, 
    margin: 5, 
    borderRadius: 10, 
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
}
});