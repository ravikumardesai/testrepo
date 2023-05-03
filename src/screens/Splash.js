import { View, Text, Button, Pressable, ImageBackground, Dimensions, StyleSheet, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Statusbar from '../componenets/Statusbar'
import { StackActions } from '@react-navigation/native'

const {width,height} = Dimensions.get('window')

export default function Splash({navigation}) {

    const [auth,setAuth] = useState(false)

    useEffect(()=>{
        checkAuth()
    },[])

    const checkAuth = () =>{

        // getting auth data
        const auth = true
        setTimeout(() => {
            auth ?
            navigation.dispatch(StackActions.replace("auth",{
                key:"xyz"
            }))
            // navigation.navigate("auth")
            :
            navigation.dispatch(StackActions.replace("unAuth"))
            // navigation.navigate("unAuth")
        }, 3000);
    }

  return (
    <ImageBackground 
        source={require("../res/splash_bg.png")}
        style={styles.rootStyle}
    >
        <Image
            source={require('../res/logo_splash.png')}
            style={styles.logoStyle}
            resizeMode='center'
        />
        <Text>Tagline will be here</Text>
         <Statusbar />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    rootStyle : {
        // width:width,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoStyle:{
        width:width/1.7,
        height:width/4
        // backgroundColor:'#333'
    }
})