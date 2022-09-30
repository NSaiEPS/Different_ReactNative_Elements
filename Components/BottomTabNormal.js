
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



const Stack = createStackNavigator();
const Tab=createBottomTabNavigator()

function ScreenA({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Go to Screen B
        </Text>
      </Pressable>
    </View>
  )
}

function ScreenB({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate('Screen_A');
    // navigation.goBack();
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Go Back to Screen A
        </Text>
      </Pressable>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused, size, color})=>{
          let iconName;
          if(route.name==='Screen_A'){
            iconName='autoprefixer'
            size=focused? 25:10
            // color=focused ? '#f0f' : '#555' 

          }
          else if(route.name==='Screen_B'){
            iconName='btc'
            size=focused? 25:10
            // color=focused ? '#f0f' : '#555'




          }

          return (
            <FontAwesome5 
            
            name={iconName}
            size={size}
            color={color}
            />
          )
        }
      }

      )}
      createBottomTabNavigator={{
        activeTintColor:'#f0f',
        inactiveTintColor:"#555",
        activeBackgroundColor:'#fff',
        

      }}
       
      >
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
        options={{
          // header: () => null
          tabBarBadge:3
        }}
        
        />
        <Tab.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  }
})

export default App;