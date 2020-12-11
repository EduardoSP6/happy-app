import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import Routes from './src/routes';

export default function App() {

    // carregando as fontes
    const [fontsLoaded] = useFonts({
      Nunito_600SemiBold, 
      Nunito_700Bold, 
      Nunito_800ExtraBold,
    });
  
    if (!fontsLoaded) {
      return null;
    }

  return (
    <Routes />
  );
}

/** Styles */
const styles = StyleSheet.create({
});
