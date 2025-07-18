 /*
    * File: header.tsx
    * Description: Custom header for screens that are not tabs. 
*/

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CustomHeader() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={28} color="white" />
      </TouchableOpacity>

      {/* CoderLingo Logo */}
      <Image
        source={require('../../assets/images/coderlingo_logo.png')}
        style={{ width: 120, height: 50, resizeMode: 'contain' }}
      />

      {/* Settings Button */}
      <TouchableOpacity onPress={() => router.push('/components/settings')}>
        <Ionicons name="settings-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

{/* Styling for header */}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#00008B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
