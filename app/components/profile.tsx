import { useState, useLayoutEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router"; 
import { useTheme } from "../theme/theme_manager";
import CustomHeader from "../components/header";
import { useNavigation } from "@react-navigation/native";
import { useUserData } from "../context/UserContext"; 
import AsyncStorage from '@react-native-async-storage/async-storage';

 
 export default function SignUpScreen() {
   const [newName, setName] = useState("");
   const [newEmail, setEmail] = useState("");
   const [newDate, setDate] = useState("");
   const [newPassword, setPassword] = useState("");
   const { userData, setUserData } = useUserData(); 
 
 
   const { isDarkMode } = useTheme();
   const navigation = useNavigation();
 
 
 
   const containerBackgroundColor = isDarkMode ? "#2C2C2C" : "#89CFF0";
   const inputBackgroundColor = isDarkMode ? "#444" : "#fff";
   const textColor = isDarkMode ? "#fff" : "#000";
   const placeholderTextColor = isDarkMode ? "#aaa" : "#555";
 
 
 
   useLayoutEffect(() => {
     navigation.setOptions({ headerShown: false });
   }, [navigation]);
 
 
   const handleReturn = async () => {
    const today = new Date();
    const dates = today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  
    setDate(dates);
  
    const stored = await AsyncStorage.getItem('userData');
    let latestUserData = userData;
  
    if (stored) {
      latestUserData = JSON.parse(stored);
    }
  
    const newUserData = { 
      ...latestUserData,
      name: newName,
      date: dates,
      email: newEmail,
      password: newPassword
    };
  
    console.log("Setting userData to:", newUserData);
  
    await setUserData(newUserData);
    await AsyncStorage.setItem('userData', JSON.stringify(newUserData));
  
    router.push({
      pathname: "/(tabs)/profile",
    });
  };
  
   
 
   return (
     <View style={{ flex: 1 }}>
       <CustomHeader />
       <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
         <Text style={[styles.title, { color: 'white' }]}>Signup/Log in</Text>
 
         <TextInput
           style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor }]}
           placeholder="Name"
           placeholderTextColor={placeholderTextColor}
           onChangeText={setName}
         />
         <TextInput
           style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor }]}
           placeholder="Email"
           keyboardType="email-address"
           placeholderTextColor={placeholderTextColor}
           onChangeText={setEmail}
         />
         <TextInput
           style={[styles.input, { backgroundColor: inputBackgroundColor, color: textColor }]}
           placeholder="Password"
           secureTextEntry
           placeholderTextColor={placeholderTextColor}
           onChangeText={setPassword}
         />
 
         <TouchableOpacity style={styles.button} onPress={handleReturn}>
           <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity>
       </View>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: { 
     flex: 1, 
     justifyContent: "center", 
     padding: 20, 
   },
 
   title: { 
     fontSize: 24, 
     fontWeight: "bold", 
     textAlign: "center", 
     marginBottom: 20 
   },
 
   input: { 
     borderWidth: 1,
     borderColor: "#ccc",
     borderRadius: 5,
     padding: 10, 
     marginBottom: 15 
   },
 
   button: { 
     backgroundColor: "green", 
     padding: 15, 
     alignItems: "center", 
     borderRadius: 5 
   },
 
   buttonText: { 
     color: "white", 
     fontSize: 18, 
     fontWeight: "bold" 
   },
 
   linkText: { 
     textAlign: "center", 
     color: "blue", 
     marginTop: 15 
   },
 });