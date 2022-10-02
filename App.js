import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage, LoginPage } from './Components/AsynchStorage';
import { Provider } from 'react-redux';
import { Store } from './Components/Redux/Store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider  store={Store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App;


