import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import ButtonsScreen from './Screens/ButtonScreen';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }} // Set the header title for this screen
        />
                <Stack.Screen
          name="Buttons"
          component={ButtonsScreen}
          options={{ title: 'Button Showcase',headerBackButtonDisplayMode:'minimal' }} // Set the header title for this screen
        />
      </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
