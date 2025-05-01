 /*
    * File: bookmarks.tsx
    * Description: The profile screen contains the user's bookmarked questions 
*/

import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../theme/theme_manager';

export default function BookmarksScreen() {

  {/* Dark mode settings */}
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';
  const cardColor = isDarkMode ? '#444' : '#4169E1';
  const textColor = '#FFF';

  const removeButtonColor = '#ff6347';

  {/* Update state of bookmarks */}
  const [bookmarks, setBookmarks] = useState<{ question: string; answerOptions: string[] }[]>([]);

  {/* Load all of the user's bookmarks  */}
  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const savedBookmarks = await AsyncStorage.getItem('bookmarks');
        setBookmarks(savedBookmarks ? JSON.parse(savedBookmarks) : []);
      } catch (error) {
        console.error('Failed to load bookmarks:', error);
      }
    };

    loadBookmarks();
  }, []);

  {/* Remove a bookmark from the bookmarks page */}
  const removeBookmark = async (index: number) => {
    Alert.alert('Remove Bookmark', 'Are you sure you want to remove this bookmark?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          const updatedBookmarks = [...bookmarks];
          updatedBookmarks.splice(index, 1);
          await AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
          setBookmarks(updatedBookmarks);
        },
      },
    ]);
  };

  {/* Return list of bookmarks on the bookmarks screen that are pressable */}
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Bookmarked Questions</Text>
      {bookmarks.length === 0 ? (
        <Text style={[styles.noBookmarksText, { color: isDarkMode ? '#ddd' : '#888' }]}>No bookmarks saved</Text>
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={[styles.bookmarkCard, { backgroundColor: cardColor }]}>
              <Text style={[styles.bookmarkText, { color: textColor }]}>{item.question}</Text>
              <TouchableOpacity onPress={() => removeBookmark(index)}>
                <Text style={[styles.removeText, { color: removeButtonColor }]}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  noBookmarksText: { fontSize: 18, textAlign: 'center' },
  bookmarkCard: { marginBottom: 15, padding: 15, borderRadius: 10 },
  bookmarkText: { fontSize: 18 },
  removeText: { fontSize: 14, marginTop: 10 },
});
