import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserData = {
  name: string;
  date: string;
  email: string;
  password: string;
  cppProgress: number;
  cProgress: number;
  pythonProgress: number;
};

type UserDataContextType = {
  userData: UserData;
  setUserData: (value: UserData) => void;
};

//for the context obj 
const UserContext = createContext<UserDataContextType>({
  userData: { 
    name: ' ', date: ' ',email: ' ', password: ' ',
    cppProgress: 0, cProgress: 0, pythonProgress: 0 },
  setUserData: () => {},
});

export const useUserData = () => useContext(UserContext);

//actual data for updating
export const UserDataProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserDataState] = useState<UserData>({
    name: ' ',
    email: ' ',
    password:' ',
    date:' ',
    cppProgress: 0,
    cProgress: 0,
    pythonProgress: 0,
  });

  
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const stored = await AsyncStorage.getItem('userData');
        if (stored) {
          setUserDataState(JSON.parse(stored) as UserData);
        }
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };
    loadUserData();
  }, []);

  const saveUserData = async (value: UserData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save user data:', error);
    }
  };

  const setUserData = async (value: UserData) => {
    setUserDataState(value);
    await saveUserData(value);
  };
  
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
