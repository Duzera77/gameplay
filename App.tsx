import React from 'react';
import {StatusBar, LogBox } from 'react-native';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoadding from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {Background} from './src/components/Background';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';

export default function App() {
    const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontLoaded){
    return <AppLoadding/>
  }

    return (
      <Background>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
    />

      <AuthProvider>
        <Routes />
      </AuthProvider>
      </Background>
    );
  }



