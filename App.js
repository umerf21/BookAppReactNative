import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import BookDetails from './screens/BookDetails';
import Tabs from './navigation/tabs';
import Login from './screens/Login';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent'
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'home'}
      >

        <Stack.Screen name="home" component={Tabs}/>

        <Stack.Screen name="Bookdetails" component={BookDetails} 
        
        // options={{headerShown:false}}
        />

        <Stack.Screen name="Login" component={Login}/>

      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
