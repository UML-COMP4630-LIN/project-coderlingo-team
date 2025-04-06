import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router"; 

export default function ProfileScreen() {
  const { name } = useLocalSearchParams(); 
  const { date } = useLocalSearchParams(); 
  const { CPP } = useLocalSearchParams(); 
  const { C } = useLocalSearchParams(); 
  const { python } = useLocalSearchParams(); 


  const displayName = name || "No profile"; //testing name
  const displayDate = date || "March 2nd, 2025"; //testing name

  const displayCPP = CPP || 10;
  const displayC = C || 0;
  const displayPython = python || 0;

  const newProfile = [
    { id: "1", title: "Add Profile", action: () => router.push("/components/profile") },
  ];

  return (
    <View style={styles.Container}>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
        <View>
          <Text style={styles.username}>{displayName}</Text>
          <Text style={styles.joinDate}>Date Joined: {displayName}</Text>
        </View>
      </View>

      <View style={styles.skillsContainer}>
        <Text style={styles.sectionTitle}>Languages</Text>

        <View style={styles.skillRow}>
          <Text style={styles.skillText}>C++</Text>
          <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "10%" }]} />
          </View>
        </View>

        <View style={styles.skillRow}>
          <Text style={styles.skillText}>C</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "35%" }]} />
          </View>
        </View>

        <View style={styles.skillRow}>
          <Text style={styles.skillText}>Python</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "90%" }]} />
          </View>
        </View>
      </View>

      <View style={styles.skillsContainer}>
        <Text style={styles.sectionTitle}>Achievements</Text>
      </View>

      <View style={styles.skillsContainer}>
        <Text style={styles.sectionTitle}>Friends</Text>
      </View>

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


const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#gray",
    borderRadius: 5,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4169E1",
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
