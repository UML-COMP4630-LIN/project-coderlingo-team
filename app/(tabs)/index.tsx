/* Mobile App Development II -- COMP.4631 Honor Statement
The practice of good ethical behavior is essential for maintaining good order in the classroom, providing an enriching learning experience for students, and training as a practicing computing professional upon graduation. This practice is manifested in the University's Academic Integrity policy. Students are expected to strictly avoid academic dishonesty and adhere to the Academic Integrity policy as outlined in the course catalog. Violations will be dealt with as outlined therein. All programming assignments in this class are to be done by the student alone unless otherwise specified. No outside help is permitted except the instructor and approved tutors.
     
I certify that the work submitted with this assignment is mine and was generated in a manner consistent with this document, the course academic policy on the course website on Blackboard, and the UMass Lowell academic code.

Date: 04/02/2025
Name: Rohan Mallu, Brendon So, William King, Shaan Gill */

import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '../theme/theme_manager'

export default function HomeScreen() {
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>

      {/* Welcome Banner */}
      <Text style={styles.welcomeText}>Welcome back!</Text>

      {/* Daily Streak */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔥 Daily Streak</Text>
      </View>

      {/* Continue Learning */}
      <Pressable style={styles.continueCard}>
        <Text style={styles.continueText}>📘 Continue Learning</Text>
      </Pressable>

      {/* Jump Back In */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Jump Back In</Text>
      </View>

       {/* Bookmarks */}
       <View style={styles.card}>
        <Text style={styles.cardTitle}>🔖 Bookmarks</Text>
      </View>

    </ScrollView>
  );
}

function Category({ label, color }: { label: string; color: string }) {
  return (
    <View style={[styles.categoryBox, { backgroundColor: color }]}>
      <Text style={styles.categoryText}>{label}</Text>
    </View>
  );
}

function BookmarkItem({ title }: { title: string }) {
  return (
    <View style={styles.bookmarkBox}>
      <Text style={styles.bookmarkText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#4169E1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  continueCard: {
    backgroundColor: '#4169E1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  continueText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginTop: 4,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryBox: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontWeight: 'bold',
    color: '#1c1c1e',
  },
  bookmarks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  bookmarkBox: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  bookmarkText: {
    color: '#1c1c1e',
    fontWeight: '600',
  },
});
