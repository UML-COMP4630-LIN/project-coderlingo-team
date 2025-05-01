 /*
    * File: settings.tsx
    * Description: All of the content on the settings screen
*/

import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, Alert } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import CustomHeader from './header';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme_manager'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Settings() {
  const navigation = useNavigation();
  const router = useRouter();
  const { isDarkMode, setIsDarkMode } = useTheme();

  {/* dark mode settings */}
  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';
  const cardColor = isDarkMode ? '#444' : '#4169E1';
  const textColor = '#FFFFFF';
  const iconColor = '#FFFFFF';

  {/* Set Language Option */}
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languageValue, setLanguageValue] = useState('English');
  const [languageItems, setLanguageItems] = useState([
    { label: 'English', value: 'English' },
    { label: 'Spanish', value: 'Spanish' },
  ]);

  {/* Remove Expo Ehader */}
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  {/* Toggle Dark Mode */}
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  {/* Logout Button + Alert */}
  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out? This will erase all of your data.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          // will erase all data
          text: "Log Out",
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              setIsDarkMode(false);
              Alert.alert("Logged Out", "You have been logged out.");
              router.push('/');
            } catch (error) {
              console.error("Error resetting progress and logging out:", error);
              Alert.alert("Error", "There was an issue logging you out.");
            }
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.outerContainer, { backgroundColor }]}>
      <CustomHeader />
        {/* Settings Header */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Preferences</Text>

        {/* Dark Mode Toggle */}
        <View style={[styles.settingRow, { backgroundColor: cardColor }]}>
          <View style={styles.iconLabel}>
            <Ionicons name="moon-outline" size={20} color={iconColor} />
            <Text style={[styles.settingText, { color: textColor }]}>Dark Mode</Text>
          </View>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>

        {/* Language Selector, does nothing */}
        <View style={[styles.settingRow, { backgroundColor: cardColor }]}>
          <View style={styles.iconLabel}>
            <Ionicons name="language-outline" size={20} color={iconColor} />
            <Text style={[styles.settingText, { color: textColor }]}>Change Language</Text>
          </View>
          <DropDownPicker
            open={languageOpen}
            value={languageValue}
            items={languageItems}
            setOpen={setLanguageOpen}
            setValue={setLanguageValue}
            setItems={setLanguageItems}
            containerStyle={{ width: 180 }}
            style={{ backgroundColor: '#fff', borderColor: '#ddd', borderRadius: 5 }}
            dropDownContainerStyle={{ backgroundColor: '#fafafa' }} 
            labelStyle={{ color: '#000', fontSize: 16 }}
            placeholder="Select Language"
          />
        </View>

        <Text style={[styles.sectionTitle, { color: textColor }]}>Account</Text>

        {/* Logout Button */}
        <TouchableOpacity style={[styles.settingRow, { backgroundColor: cardColor }]} onPress={handleLogout}>
          <View style={styles.iconLabel}>
            <Ionicons name="log-out-outline" size={20} color={iconColor} />
            <Text style={[styles.settingText, { color: textColor }]}>Log Out</Text>
          </View>
        </TouchableOpacity>

        {/* About Info */}
        <Text style={[styles.sectionTitle, { color: textColor }]}>About</Text>

        <View style={[styles.settingRow, { backgroundColor: cardColor }]}>
          <View style={styles.iconLabel}>
            <Ionicons name="information-circle-outline" size={20} color={iconColor} />
            <Text style={[styles.settingText, { color: textColor }]}>App Version: 1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  settingRow: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
