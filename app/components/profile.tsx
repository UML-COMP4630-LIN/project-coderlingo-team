import { useState, useLayoutEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router"; 
import { useTheme } from "../theme/theme_manager";
import CustomHeader from "../components/header";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");

  const { isDarkMode } = useTheme();
  const navigation = useNavigation();

  const containerBackgroundColor = isDarkMode ? "#2C2C2C" : "#89CFF0";
  const inputBackgroundColor = isDarkMode ? "#444" : "#fff";
  const textColor = isDarkMode ? "#fff" : "#000";
  const placeholderTextColor = isDarkMode ? "#aaa" : "#555";

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleSignUp = () => {
    alert("Welcome to CoderLingo!");
    router.push({ pathname: "/profile", params: { name, date } }); 
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

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
