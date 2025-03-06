import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './navigation/AppNavigator'; // 导航器
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      {/* 暂时直接渲染 HomeScreen */}
      <HomeScreen />
    </NavigationContainer>
  );
}
