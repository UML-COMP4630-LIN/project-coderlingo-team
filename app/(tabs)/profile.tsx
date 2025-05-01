import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router"; 
import { useTheme } from '../theme/theme_manager'
import { useUserData } from '../context/UserContext';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

 /*
    * File: profile.tsx
    * Description: The profile screen contains profile information, a sign-up button and other sensitive info. 
*/
 
{/* Main function for Profile screen */}
export default function ProfileScreen() {
  {/* Display the user's name and date  */}
  const { date } = useLocalSearchParams();
  const { userData, setUserData } = useUserData();

  const displayName = userData.name;

  const displayDate = userData.date;
  
  {/* Display the user's progress on different programming languages */}
  const displayCPP = userData.cppProgress || 0;
  const displayC = userData.cProgress || 0;
  const displayPython = userData.pythonProgress || 0;
  
  
  {/* Use AsyncStorage to save the user's data and progress  */}
  const reloadUserData = async () => {
    const stored = await AsyncStorage.getItem('userData');
    if (stored) {
      const parsed = JSON.parse(stored);
      await setUserData(parsed); 
    }
  };
  
  console.log("test", userData);

  {/* Toggle light and dark mode */}
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? '#2C2C2C' : '#89CFF0';
  const cardBackgroundColor = isDarkMode ? '#444' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';
  const sectionTitleColor = isDarkMode ? '#fff' : '#000';



  //via CONTEXT
  {/* Create a new profile using the new profile button and login screen  */}
  const newProfile = [
    { id: "1", title: "Add Profile", action: () => router.push("/components/profile") },
  ];

  return (
    <View style={[styles.Container, { backgroundColor }]}>
      {/* User's name and date joined  */}
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
        <View>
          <Text style={[styles.username, { color: textColor }]}>{userData.name}</Text>
          <Text style={[styles.joinDate, { color: textColor }]}>Date Joined: {displayDate}</Text>
        </View>
      </View>
  
      {/* Display the user's progress on different languages  */}
      <View style={[styles.skillsContainer, { backgroundColor: cardBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Language</Text>
  
        {/* Progress on C++  */}
        <View style={styles.skillRow}>
          <Text style={[styles.skillText, { color: textColor }]}>C++</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${userData.cppProgress}%` }]} />
          </View>
        </View>
  
       {/* Progress on C  */}
        <View style={styles.skillRow}>
          <Text style={[styles.skillText, { color: textColor }]}>C</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${userData.cProgress}%` }]} />
          </View>
        </View>
  
       {/* Progress on Python  */}
        <View style={styles.skillRow}>
          <Text style={[styles.skillText, { color: textColor }]}>Python</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${userData.pythonProgress}%` }]} />
          </View>
        </View>
      </View>
  
      {/* List of achievements, which are not fully implemented  */}
      <View style={[styles.skillsContainer, { backgroundColor: cardBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Achievements</Text>
      </View>
  
      {/* List of friends, which is not fully  */}
      <View style={[styles.skillsContainer, { backgroundColor: cardBackgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Friends</Text>
      </View>
  
      {/* Button for adding a new profile  */}
      <FlatList
        data={newProfile}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.Button} onPress={item.action}>
            <Text style={styles.ButtonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}  

{/* Styling for profile screen  */}
const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#gray",
    borderRadius: 5,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#008000",
    borderRadius: 5,
  },


  Container: {
    flex: 1,
    backgroundColor: "#89CFF0",
    padding: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,

  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",

  },
  joinDate: {
    fontSize: 14,
    color: "gray",
  },
  skillsContainer: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  skillRow: {
    flexDirection: "column",

    marginBottom: 5,
  },


  skillText: {
    fontSize: 16,
  },
  skillLevel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  Button: {
    padding: 15,
    color: "white",
    fontSize: 20,
    backgroundColor: "#4169E1",
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    
  },
  ButtonText: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white"
  },

});
