import * as React from "react";
import { Image, FlatList, StyleSheet, View, TouchableOpacity, Alert } from "react-native";

{/** Code for the list of categories in the courses screen. */}


// define property values for data
type Props = {
    id: string;
    name: string;
    img: any;
}


// define data set
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


// Display an alert when an image button is pressed. Hit the cancel button to continue.
function imagePressed(item : Props) {
    return(
        Alert.alert('Course Not Available', `The ${item.name} course is not available yet.`, [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
    },]));
};

// Dim the image buttons when they are pressed on
// return a clickable image for each button in the data list
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
    // Update the state of a clicked image
    const [images, setImages] = React.useState(data);
    return(
        <View style={styles.container}>
            <FlatList data={images} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2}/> 
        </View>
           
    );
}

// CSS for the Categories component
const styles = StyleSheet.create({
    // Style the container to center the elements
    container: {
        backgroundColor: "#FFFFFF",
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
        borderColor: "#D3D3D3",
    }
});