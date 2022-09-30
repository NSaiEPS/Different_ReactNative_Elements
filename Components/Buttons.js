import {  Pressable, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'


const Buttons = () => {
  return (
    <View>
                                    {/* Normal */}

      <Button 
      title='clickme'
      />

<Button 
      title='clickme'
      color='red'
      />


                           {/* React native elemets */}


      <Button
      title='native elemts' 
      type='outline'
    //   color='red'
      
      />

<Button
      title='native elemts' 
      type='outline'
    //   color='red'
    disabled
      
      />


                       {/* With view */}

      <View
      
      style={{
        borderColor:'red',
        borderWidth:1,
        backgroundColor:'blue'
        

      }}
      >
       <Text> clicke me</Text>
      </View>




         {/* With Touchable Items */}

     <TouchableOpacity
     
     style={{
        borderColor:'white',
        borderWidth:1,
        backgroundColor:'blue',
        marginTop:5
     }}
     activeOpacity={0.5}
     >
       <Text> Touchable opacity</Text>


     </TouchableOpacity>


     <TouchableHighlight
         style={{
            borderColor:'red',
            borderWidth:1,
            // backgroundColor:'blue',
            marginTop:5
    }}
    activeOpacity={0.5}

         underlayColor='#dddddd'
         >
           <Text> Touchable opacity heifhlight </Text>

     </TouchableHighlight>


     <View
     style={{
        borderColor:'blue',
        borderWidth:1
     }}
     >

     <TouchableWithoutFeedback>
     <Text> Touchable  </Text>


     </TouchableWithoutFeedback>
     </View>


   {/* With pressable */}

     <Pressable
     style={ ({pressed})=>  [{
        borderColor:'red',
        borderWidth:1,
        backgroundColor:pressed? '#00ffee' :'red',
        height:35,
        marginTop:5
     }]}
     onPress={()=>alert("Just pressed")}
     onLongPress={()=>alert("Long pressed")}
     delayLongPress={2000}
     >

        {({pressed})=>(
        <Text>
            {pressed ? 'pressed':
            'Preeme'}
        </Text>

        )}
     {/* <Text> Pressable  </Text> */}


     </Pressable>



     {/* With pressable around HitSlop*/}



     <Pressable
      hitSlop={{
        top:100,
        bottom:100,
        left:100,
        right:100

      }}



     style={ ({pressed})=>  [{
        borderColor:'red',
        borderWidth:1,
        backgroundColor:pressed? '#00ffee' :'red',
        height:35,
        marginTop:5
     }]}
     onPress={()=>alert("Just pressed")}
     onLongPress={()=>alert("Long pressed")}
     delayLongPress={2000}

     
     >

        {({pressed})=>(
        <Text>
            {pressed ? 'pressed':
            'Preeme'}
        </Text>

        )}
     {/* <Text> Pressable  </Text> */}


     </Pressable>


{/* Android ripple pressable */}


     <Pressable
      hitSlop={{
        top:100,
        bottom:100,
        left:100,
        right:100

      }}
      android_ripple={{
        color:'#00f'
      }}



     style={ ({pressed})=>  [{
        borderColor:'red',
        borderWidth:1,
        backgroundColor:pressed? '#00ffee' :'red',
        height:35,
        marginTop:5
     }]}
     onPress={()=>alert("Just pressed")}
     onLongPress={()=>alert("Long pressed")}
     delayLongPress={2000}

     
     >

        {({pressed})=>(
        <Text>
            {pressed ? 'pressed':
            'Preeme'}
        </Text>

        )}
     {/* <Text> Pressable  </Text> */}


     </Pressable>




    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({})