import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return(
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
      }}>
        <Tabs.Screen name="index" options={{title: 'Home', tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/>),}}/>
        <Tabs.Screen name="study" options={{title: 'Study', tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'book-sharp' : 'book-outline'} color={color} size={24}/>),}}/>
        <Tabs.Screen name="courses" options={{title: 'Courses',tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'school-sharp' : 'school-outline'} color={color} size={24}/>),}}/>
        <Tabs.Screen name="settings" options={{title: 'Settings',tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24}/>),}}/>

    </Tabs>
    );
    
}