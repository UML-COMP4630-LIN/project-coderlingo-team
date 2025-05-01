import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Menu, Provider } from 'react-native-paper';
import { useState } from 'react';
import { Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { UserDataProvider } from '../context/UserContext'; 

 {/** This is the main layout fiel for all of the tabs */}


{/* A button at the top right of the screen to access the settings page */}
function SettingsButton() {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push('/components/settings')} style={{ marginRight: 15, marginBottom: 15 }}>
      <Ionicons name="settings-outline" size={24} color="#fff" />
    </Pressable>
  );
}

{/*The logo for CoderLingo in the header */}
function HeaderLogo() {
  return (
    <Image
    source={require('../../assets/images/coderlingo_logo.png')}
    style={{ width: 120, height: 40, resizeMode: 'contain', marginTop: -15, marginLeft: -10 }}
    />
  );
}

{/* A drop down menu of different programming languages at the center of the header */}

function LangMenu() {
  // State functions for opening and closing the language 
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // List of languages available in the drop down menu
  const data = [
    { id: '1', name: 'C', img: require('../../assets/images/icons/clang.png') },
    { id: '2', name: 'C++', img: require('../../assets/images/icons/cplusplus.png') },
    { id: '3', name: 'C#', img: require('../../assets/images/icons/csharp.png') },
    { id: '4', name: 'Python', img: require('../../assets/images/icons/python.png') },
    { id: '5', name: 'Ruby', img: require('../../assets/images/icons/ruby.png') },
    { id: '6', name: 'Java', img: require('../../assets/images/icons/java.png') },
    { id: '7', name: 'JavaScript', img: require('../../assets/images/icons/javascript.png') },
    { id: '8', name: 'TypeScript', img: require('../../assets/images/icons/typescript.png') },
  ];

  // State function for changing the language
  const [selectedLanguage, setSelectedLanguage] = useState(data[0]);

  {/* Create the header for the top of the tab screens */}
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Pressable onPress={openMenu} style={{ marginRight: 5 }}>
          <Image
            source={selectedLanguage.img}
            style={{ width: 30, height: 30, borderRadius: 12, marginTop: -10 }}
          />
        </Pressable>
      }
    >
      {data.map((item) => (
        <Menu.Item
          key={item.id}
          onPress={() => {
            setSelectedLanguage(item);
            closeMenu();
          }}
          title={item.name}
          leadingIcon={() => (
            <Image source={item.img} style={{ width: 25, height: 25, marginRight: 10}} />
          )}
        />
      ))}
    </Menu>
  );
}

{/** Layout of all the screens in the (tabs) folder. */}
export default function TabLayout() {
  {/** CSS for header and tab bars of each screen. */}
    return(
      <UserDataProvider>
    <Provider>
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00008B',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#00008B',
        },
        headerLeft: () => <HeaderLogo />,
        headerTitle: () => <LangMenu />,
        headerRight: () => <SettingsButton />,
      }}>
        {/** Bottom Navigation Bar */}
        <Tabs.Screen name="index" options={{title: 'Home', tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/>),}}/>
        <Tabs.Screen name="study" options={{title: 'Study', tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'book-sharp' : 'book-outline'} color={color} size={24}/>),}}/>
        <Tabs.Screen name="courses" options={{title: 'Courses',tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'school-sharp' : 'school-outline'} color={color} size={24}/>),}}/>
        <Tabs.Screen name="profile" options={{title: 'Profile',tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24}/>),}}/>
      </Tabs>
    </Provider>
    </UserDataProvider>
    );
    
}