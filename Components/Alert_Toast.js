import { Alert, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'

const Alert_Toast = () => {
    const [name, setname] = useState('')
    const [submit, setsubmit] = useState(false)

    // Alert Message

    let handleSubmitAlert=()=>{
        if(name.length>4){
        setsubmit(true)


        }
        else{

            // Can have 1 button & max 3 for android & any number in IOS mobile
            // cancelable:true if outside click or back click is true
            // Ondismis triggerent with dismissed
            
            Alert.alert('Warning','The name must have atleast 4 characters',[
            {text:"Do not show again",
        onPress:()=>console.warn("Do not show again Pressed"),
    style:'destructive'
        },
        {text:"Cancel",
        onPress:()=>console.warn("Cancel Pressed"),
    style:'cancel'
        },
        {text:"OK",
        onPress:()=>console.warn("OK Pressed"),
    style:'default'
        },
    
    
    ],
    {cancelable:true,
    onDismiss:()=>alert('cancelled')
    }
            )
        }

    }

    // Toast Message only in android

    let handleSubmitToast=()=>{
        if(name.length>4){
        setsubmit(true)


        }
        else{

            // SHORT for short time
            // LONG for Long time


            // ToastAndroid.show("The name must be altleast 3 character",
            // ToastAndroid.LONG
            // )

            // Showwith gravituy give place where to display the toast
            // center , top, bottom

            // ToastAndroid.showWithGravity("The name must be altleast 3 character",
            // ToastAndroid.LONG,
            // ToastAndroid.TOP
            // )
            
        //   SHowwithGravity&Offset gives better place
        // 0,0 or height & left width
        ToastAndroid.showWithGravityAndOffset("The name must be altleast 3 character",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        20,
        200
        )
        }

    }


  return (
    <View>

        <TextInput
        placeholder='Enter your name'
        style={{
            borderColor:'blue',
            borderWidth:1,
            height:50
        }}
        onChangeText={(text)=>setname(text)}
        />
      <Pressable
      style={{
        borderColor:'blue',
        borderWidth:1,
        marginTop:10,
        backgroundColor:'lightblue'

      }}
      onPress={handleSubmitToast}
      android_ripple={{
        color:'red'
      }}
      >
        <Text>Submit</Text>

      </Pressable>
{submit &&
      <Text>entered text {name}</Text>}
    </View>
  )
}

export default Alert_Toast

const styles = StyleSheet.create({})