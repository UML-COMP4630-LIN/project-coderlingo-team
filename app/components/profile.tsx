import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router"; 


//This will be used for database/user info updating

/*
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from "./firebase";

//BUG
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create user profile data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        date: date,
        level: "Beginner", 
        badges: [] 
      });

*/

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");

  //get profile from database + stats
  const [name2, getName] = useState("");
  const [email2, getEmail] = useState("");
  const [level, getLevel] = useState("");
  const [badges, getbadge] = useState("");

  const handleSignUp = () => {
    alert("Welcome to CoderLingo!");
    router.push({ pathname: "/settings", params: { name, date } }); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup/Log in</Text>

      <TextInput style={styles.input} placeholder="Name" onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />


      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: "center", 
      padding: 20, 
      backgroundColor: "white" 
    },
  
    title: { 
      fontSize: 24, 
      fontWeight: "bold", 
      textAlign: "center", 
      marginBottom: 20 
    },
  
    input: { 
      borderBottomWidth: 1, 
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
  
