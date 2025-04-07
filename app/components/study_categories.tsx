import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  id: string;
  name: string;
};

const cTopics = [
  { id: '1', name: 'Pointers' },
  { id: '2', name: 'Arrays' },
  { id: '3', name: 'Functions' },
  { id: '4', name: 'Structures' },
  { id: '5', name: 'File I/O' },
];

export default function CTopics() {
  const router = useRouter();
  
  const handleButtonPress = (topic: Props) => {
    if (topic.name === 'Pointers') {
      router.push("/Study");
    } else {
      alert(`The ${topic.name} topic is not available yet.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>STUDY</Text>
      <View style={styles.pathContainer}>

        {cTopics.map((topic, index) => (
            //UPDATE
          <TouchableOpacity
            key={topic.id}
            style={[
              styles.button,
              topic.name === 'Pointers' ? styles.activeButton : styles.disabledButton,
              { top: `${(index % 3) * 15}%`, left: `${(index * 20) + 1}%` } 
            ]}
            onPress={() => handleButtonPress(topic)}
            disabled={topic.name !== 'Pointers'}
          >
            <Text style={styles.buttonText}>{topic.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#89CFF0',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      alignItems: 'center',
      color: '#FFFFFF',
      marginTop: 10,
      marginBottom: 40,


    },
    pathContainer: {
      position: 'relative',
      width: '100%',
      height: '60%',
    },


    button: {
      position: 'absolute',
      borderRadius: 50,
      width: 85,
      height: 85,
      borderWidth: 3, 
      borderColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
    },


    activeButton: {
      backgroundColor: '#008000',
    },
    disabledButton: {
      backgroundColor: '#808080',
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
  });
  