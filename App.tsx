import React from 'react';
import Routes from './src/routes';
import { useFonts } from '@expo-google-fonts/montserrat';

export default function App() {
  useFonts({
    'Montserrat-Italic': require('./src/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
    'Montserrat': require('./src/assets/fonts/Montserrat-VariableFont_wght.ttf'),
  });

  return (
    <>
      <Routes />
    </>
  );
}