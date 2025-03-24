import { Text, View, StyleSheet } from "react-native";

{/** WIP Home Screen */}
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Coderlingo Official App. More Coming Soon.</Text>
    </View>
  );


}

{/** CSS for Home Screen */}
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