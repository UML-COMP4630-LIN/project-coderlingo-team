import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Menu, Provider } from 'react-native-paper';
import { useState } from 'react';
import { Pressable } from 'react-native'

{/** Settings popdown menu. */}
function SettingsMenu() {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Pressable onPress={openMenu} style={{ marginRight: 15 }}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </Pressable>
      }>
      <Menu.Item onPress={() => {}} title="Placeholder 1" />
      <Menu.Item onPress={() => {}} title="Placeholder 2" />
      <Menu.Item onPress={() => {}} title="Placeholder 3" />
    </Menu>
  );
}

{/** Layout of all the screens in the (tabs) folder. */}
export default function TabLayout() {
  {/** CSS for header and tab bars of each screen. */}
    return(
    <Provider>
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
        headerRight: () => <SettingsMenu />,
      }}>
        {/** Bottom Navigation Bar */}
        <Tabs.Screen name="index" options={{title: 'Home', tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/>),}}/>
        <Tabs.Screen name="study" options={{title: 'Study', tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'book-sharp' : 'book-outline'} color={color} size={24}/>),}}/>
        <Tabs.Screen name="courses" options={{title: 'Courses',tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'school-sharp' : 'school-outline'} color={color} size={24}/>),}}/>
        <Tabs.Screen name="settings" options={{title: 'Settings',tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24}/>),}}/>
      </Tabs>
    </Provider>
    );
    
}