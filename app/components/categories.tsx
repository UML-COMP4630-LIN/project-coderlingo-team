 /*
    * File: categories.tsx
    * Description: Code for rendering list of languages on the courses screen. 
*/

import { router } from "expo-router";
import * as React from "react";
import { Image, FlatList, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { useTheme } from "../theme/theme_manager"; 

{/* define property values for data*/}
type Props = {
    id: string;
    name: string;
    img: any;
}


{/* define data set*/}
const data = [
    {id: '1', name: 'C', img: require('../../assets/images/icons/clang.png')},
    {id: '2', name: 'C++', img: require('../../assets/images/icons/cplusplus.png')},
    {id: '3', name: 'C#', img: require('../../assets/images/icons/csharp.png')},
    {id: '4', name: 'Python', img: require('../../assets/images/icons/python.png')},
    {id: '5', name: 'Ruby', img: require('../../assets/images/icons/ruby.png')},
    {id: '6', name: 'Java', img: require('../../assets/images/icons/java.png')},
    {id: '7', name: 'JavaScript', img: require('../../assets/images/icons/javascript.png')},
    {id: '8', name: 'TypeScript', img: require('../../assets/images/icons/typescript.png')},
];


/**
 * 
 * @param item The name of the programming language and its image
 * @returns The topics screen corresponding to the selected programming language
 */
function imagePressed(item : Props) {
    if(item.name === 'C') {
        router.push('/components/ctopics');
    }
    else if(item.name === 'C++') {
        router.push('/components/languages/cpptopics');
    }
    else if(item.name === 'C#') {
        router.push('/components/languages/csharptopics');
    }
    else if(item.name === 'Python') {
        router.push('/components/languages/pythontopics');
    }
    else if(item.name === 'Ruby') {
        router.push('/components/languages/rubytopics');
    }
    else if(item.name === 'Java') {
        router.push('/components/languages/javatopics');
    }
    else if(item.name === 'JavaScript') {
        router.push('/components/languages/javascripttopics');
    }
    else if(item.name === 'TypeScript') {
        router.push('/components/languages/typescripttopics');
    }
    else {
        Alert.alert('Course Not Available', `The ${item.name} course is not available yet.`, [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
    },])
    };
};


{/* Dim the image buttons when they are pressed on*/}
{/* return a clickable image for each button in the data list */}

/**
 * 
 * @param item A programming language and it's image 
 * @returns A pressable object for the language
 */
function renderItem({ item }: {item: Props}) {
    return (
        <TouchableOpacity onPress={() => imagePressed(item)}>
             <Image 
            source={item.img}
            style={styles.item}
        />
        </TouchableOpacity>
       
    );
}

// return a View with a FlatList displaying the different programming languages in two colummns.
export default function Categories() {
    {/* Update the state of a clicked image */}
    const [images, setImages] = React.useState(data);
    const { isDarkMode } = useTheme();
    const containerBackgroundColor = isDarkMode ? "#2C2C2C" : "#89CFF0";

    {/** Return the list of programming languages */}
    return(
        <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
            <FlatList data={images} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2}/> 
        </View>
           
    );
}

{ /* Styles for the Categories component */}
const styles = StyleSheet.create({
    // Style the container to center the elements
    container: {
        backgroundColor: "#89CFF0",
        justifyContent: 'center',
        alignItems: 'center',
    },
    // style each image button in the FlatList so that it stands out
    item: {
        height: 180,
        width: 180,
        padding: 10, 
        margin: 5, 
        borderRadius: 10, 
        borderWidth: 3, 
        borderColor: "#4169E1",
    }
});