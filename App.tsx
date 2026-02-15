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
import { colors } from './src/utills/Colors';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './src/Views/ProfileScreen';
import Header from './src/Components/Header';
import { fonts } from './src/utills/fonts';
import SearchScreen from './src/Views/SearchScreen';
import ConversationScreen from './src/Views/ConversationScreen';

function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.backgroundBlack }}>
      <StatusBar barStyle='light-content' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="DrawerLayout">
          <Stack.Screen name="DrawerLayout" component={DrawerLayout} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Conversation" component={ConversationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const DrawerLayout = () => {
  const Drawer = createDrawerNavigator<RootStackParamList>();
  // Fix: Use navigation prop to open drawer instead of Drawer.openDrawer (which doesn't exist on the Drawer object)
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: '#000',
        width: 280,
        borderRightWidth: 1,
        borderRightColor: '#FFD700',
      },
      drawerActiveTintColor: '#FBF5B7',
      drawerActiveBackgroundColor: '#7A5C12',
      drawerInactiveTintColor: '#ccc',
      drawerInactiveBackgroundColor: '#000',
      drawerLabelStyle: {
        fontSize: 20,
        ...fonts.Cormorant.Medium,
        letterSpacing: 1.5,
      },
    }}>
      <Drawer.Screen
        name="Chats"
        component={MainScreen}
        options={({ navigation }) => ({
          header: () => <Header onMenuPress={() => navigation.openDrawer()} />,
          headerStyle: { backgroundColor: colors.backgroundBlack },
        })}
      />
      <Drawer.Screen name="My Account" component={ProfileScreen} options={{ header: () => null }} />
    </Drawer.Navigator>
  )
}

export default App; 
