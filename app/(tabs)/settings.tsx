import { Text, View, StyleSheet } from 'react-native';

{/** WIP Settings Screen */}
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This will be the settings screen</Text>
    </View>
  );
}

{/** CSS for Settings screen */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});