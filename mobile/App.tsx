import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import Widget from './src/components/Widget';
import { theme } from './src/theme';
import AppLoading from 'expo-app-loading';

import { 
  Inter_400Regular,
  Inter_500Medium,
  useFonts } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}>
        <StatusBar 
          style="light"
          backgroundColor='transparent'
          translucent
        />
        <Widget />
      </View>
    </KeyboardAvoidingView>
  );
}
