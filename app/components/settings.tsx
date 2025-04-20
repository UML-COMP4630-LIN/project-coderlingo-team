import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, Alert } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import CustomHeader from './header';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme_manager'; 

export default function Settings() {
  const navigation = useNavigation();
  const router = useRouter();
  const { isDarkMode, setIsDarkMode } = useTheme();

  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';
  const cardColor = isDarkMode ? '#444' : '#4169E1';
  const textColor = isDarkMode ? '#FFFFFF' : '#FFFFFF';
  const iconColor = isDarkMode ? '#FFFFFF' : '#FFFFFF';

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleLogout = () => {
    Alert.alert("Logged Out", "You have been logged out.");
    router.push('/');
  };

  return (
    <View style={[styles.outerContainer, { backgroundColor }]}>
      <CustomHeader />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Preferences</Text>

        <View style={[styles.settingRow, { backgroundColor: cardColor }]}>
          <View style={styles.iconLabel}>
            <Ionicons name="moon-outline" size={20} color={iconColor} />
            <Text style={[styles.settingText, { color: textColor }]}>Dark Mode</Text>
          </View>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>

        <TouchableOpacity style={[styles.settingRow, { backgroundColor: cardColor }]} onPress={() => router.push('/components/change_language')}>
          <View style={styles.iconLabel}>
            <Ionicons name="language-outline" size={20} color={iconColor} />
            <Text style={[styles.settingText, { color: textColor }]}>Change Language</Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, { color: textColor }]}>Account</Text>

        <TouchableOpacity style={[styles.settingRow, { backgroundColor: cardColor }]} onPress={() => router.push('/components/change_password')}>
          <View style={styles.iconLabel}>
            <Ionicons name="key-outline" size={20} color={iconColor} />
            <Text style={[styles.settingText, { color: textColor }]}>Change Password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingRow, { backgroundColor: cardColor }]} onPress={handleLogout}>
          <View style={styles.iconLabel}>
            <Ionicons name="log-out-outline" size={20} color={iconColor} />
            <Text style={[styles.settingText, { color: textColor }]}>Log Out</Text>
          </View>
        </TouchableOpacity>

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
