import {Text, View, TouchableOpacity, Image, StyleSheet} from "react-native";
import CustomHeader from "../header";
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from "react";
 
// This component is for the Ruby screen
// It will not be fully implemented with content
// but will have a screen to demonstrate pur app's original intention for programming languages

type Props = {
    id: string;
    name: string;
};

const rubytopics = [
    {id: "1", name: "Basics"}, 
    {id: "2", name: "Data Structures"}, 
    {id: "3", name: "Functional Programming"}, 
    {id: "4", name: "Ruby on Rails"}, 
    {id: "5", name: "Multithreading"}
];

export default function RubyTopics() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    const handleButtonPress = (topic: Props) => {
        alert(`The ${topic.name} module is not available yet.`);
    };

    return(
        <View style={styles.outerContainer}>
            <CustomHeader/>
            <View style={styles.container}>
                <Text style={styles.title}>Ruby Programming Topics</Text>
                {rubytopics.map((topic) =>(
                    <TouchableOpacity key={topic.id} style={styles.button} onPress={() => handleButtonPress(topic)}>
                        <Text style={styles.buttonText}>{topic.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
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
      color: '#FFFFFF',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#4169E1',
      borderRadius: 8,
      paddingVertical: 15,
      paddingHorizontal: 25,
      marginVertical: 10,
      width: 250,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
    },
    buttonText: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });