import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,

} from 'react-native';
// import Button from '../utils/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Button } from 'react-native-paper';
import { Button } from 'react-native-elements';

export const LoginPage = ({navigation}) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('Home');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name,
                    Age: age
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={{
                    uri:"https://react-native-async-storage.github.io/async-storage/img/logo.svg"
                }}
            />
            <Text style={styles.text}>
                Async Storage
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                onChangeText={(value) => setAge(value)}
            />
            <Button
                title='Login'
                color='#1eb900'
                // onPressFunction={setData}
                onPress={setData}
            />
        </View>
    )
}










export const HomePage = ({navigation, route}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setAge(user.Age);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('Success!', 'Your data has been updated.');
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <Text style={[
                // GlobalStyle.CustomFont,
                styles.text
            ]}>
                Welcome {name} !
            </Text>
            <Text style={[
                // GlobalStyle.CustomFont,
                styles.text
            ]}>
                Your age is {age}
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <Button
                title='Update'
                color='#ff7f00'
                // onPressFunction={updateData}
                onPress={updateData}
            />
            <Button
                title='Remove'
                color='#f40100'
                // onPressFunction={removeData}
                onPress={removeData}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})










import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage, LoginPage } from './Components/AsynchStorage';

const Stack = createStackNavigator();

function App() {
  return (
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
  )
}

export default App;