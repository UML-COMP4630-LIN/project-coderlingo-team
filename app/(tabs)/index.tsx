/* Mobile App Development II -- COMP.4631 Honor Statement
The practice of good ethical behavior is essential for maintaining good order in the classroom, providing an enriching learning experience for students, and training as a practicing computing professional upon graduation. This practice is manifested in the University's Academic Integrity policy. Students are expected to strictly avoid academic dishonesty and adhere to the Academic Integrity policy as outlined in the course catalog. Violations will be dealt with as outlined therein. All programming assignments in this class are to be done by the student alone unless otherwise specified. No outside help is permitted except the instructor and approved tutors.
     
I certify that the work submitted with this assignment is mine and was generated in a manner consistent with this document, the course academic policy on the course website on Blackboard, and the UMass Lowell academic code.

Date: 04/02/2025
Name: Rohan Mallu, Brendon So, William King, Shaan Gill */

import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '../theme/theme_manager';
import { useRouter } from 'expo-router';

export default function HomeScreen() {

  // dark mode settings
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';
  const sectionBackgroundColor = isDarkMode ? '#444' : '#4169E1';
  const buttonColor = isDarkMode ? '#28a745' : '#28a745';
  const textColor = '#FFF';
  
  const router = useRouter();

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>

      {/* Welcome Banner */}
      <Text style={[styles.welcomeText, { color: textColor }]}>Welcome back!</Text>

      {/* Ideally, users should be able to continue were they left off from here*/}
      {/* Quiz Section */}
      <Section title="Quiz" backgroundColor={sectionBackgroundColor}>
        <Text style={[styles.noProgressText, { color: textColor }]}>n/a</Text>
      </Section>

      {/* Study Section */}
      <Section title="Study" backgroundColor={sectionBackgroundColor}>
        <Text style={[styles.noProgressText, { color: textColor }]}>n/a</Text>
      </Section>

      {/* Bookmarks Section */}
      <Section title="Bookmarks" backgroundColor={sectionBackgroundColor}>
        {/* Button to navigate to Bookmarks */}
        <Pressable style={[styles.continueCard, { backgroundColor: buttonColor }]} onPress={() => router.push("/components/bookmarks")}>
          <Text style={[styles.continueText, { color: textColor }]}>Go to Bookmarks</Text>
        </Pressable>
      </Section>

    </ScrollView>
  );
}

function Section({ title, children, backgroundColor }: { title: string; children: React.ReactNode; backgroundColor: string }) {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.cardTitle, { color: '#FFF' }]}>{title}</Text>
      <ScrollView style={styles.scrollableContent}>{children}</ScrollView>
    </View>
  );
}

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
    fontSize: 18,
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
});