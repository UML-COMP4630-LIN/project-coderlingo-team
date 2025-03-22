import { Text, View, StyleSheet } from 'react-native';

export default function StudyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This will be the study screen</Text>
    </View>
  );
}

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