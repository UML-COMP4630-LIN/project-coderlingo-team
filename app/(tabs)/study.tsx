import { Text, View, StyleSheet } from 'react-native';

{/** WIP Study Screen */}
export default function StudyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This will be the study screen</Text>
    </View>
  );
}

{/** CSS for Study screen */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});