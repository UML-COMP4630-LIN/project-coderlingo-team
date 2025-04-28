import { useLocalSearchParams, router } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useUserData } from "../context/UserContext"; 
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ResultScreen() {
  const { score, total } = useLocalSearchParams();
  const { userData, setUserData } = useUserData(); 

  const finalScore = Number(score);
  const totalQuestions = Number(total);

  const handleReturn = async () => {
    const stored = await AsyncStorage.getItem('userData');
    
    let UserData = userData;
    
    if (stored) {
      UserData = JSON.parse(stored);
    }
  
    const newUserData = { 
      ...UserData, 
      cProgress: UserData.cProgress + 10 
    };
    await setUserData(newUserData); 
    await AsyncStorage.setItem('userData', JSON.stringify(newUserData)); 
  
    router.push({
      pathname: "/(tabs)/study",
      params: { unlockedArray: "true" },
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icons/party.png")}
        style={styles.image}
      />
      <Text style={styles.congratsText}>Congrats!</Text>
      <Text style={styles.completedText}>Completed Pointers Section</Text>

      <TouchableOpacity
        onPress={handleReturn} 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#008000", padding: 20 },
  congratsText: { fontSize: 32, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  completedText: { fontSize: 20, color: "#fff", marginBottom: 20 },
  scoreText: { fontSize: 24, marginBottom: 30, color: "#fff", textAlign: "center" },
  button: { padding: 12, backgroundColor: "#ffd33d", borderRadius: 8, minWidth: 200 },
  buttonText: { fontSize: 18, textAlign: "center" },
  image: { width: 200, height: 200, marginBottom: 20 },
});
