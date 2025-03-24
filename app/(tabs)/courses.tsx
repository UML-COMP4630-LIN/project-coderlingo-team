import { View, StyleSheet } from 'react-native';
import Categories from '../components/categories';

{/** CoursesScreen: Returns a View with a list of categories */}
export default function CoursesScreen() {
  return (
    <View>
      <Categories/>
    </View>
  );
}

{/** CSS for Courses Screen */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 5,
  },
  text: {
    color: '#000',
  },
});