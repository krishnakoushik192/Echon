import { NavigationContainer } from '@react-navigation/native';
import './global.css';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/Views/SplashScreen';
import MainScreen from './src/Views/MainScreen';
import type { RootStackParamList } from './src/types/navigation';

function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <SafeAreaView className='flex-1'>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
