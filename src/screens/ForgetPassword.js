import { View, Text, Image, Dimensions, SafeAreaView, StyleSheet, SafeAreaViewComponent, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get('window')

const ForgetPassword = ({navigation}) => {
    const [email,setEmail] = React.useState("");


    const toSubmit = () =>{
        if(email.length == 0){
            Alert.alert("Please Enter Email")
        }
        else {
            Alert.alert(`Hurrey ${email}`)
        }
    }

  return (
    <View style={styles.rootStyle}>
     {/* nav */}
     <View style={styles.navStyle}>
        <Pressable
            onPress={()=>{
                navigation.goBack()
            }}
        >
        <Image
            source={require('../res/back.png')}
            style={{
                width: width / 20,
                height: width / 20,
            }}
        />
        </Pressable>

        <Text style={styles.navTitle}>FORGOT PASSWORD?</Text>
     </View>
    {/* forgotpassword logo */}
     <Image
        source={require('../res/icon_forgetpass.png')}
        style={styles.iconStyle}
        resizeMode='center'
        />
    {/* description */}
        <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, optio. Minima, modi.
        </Text>
    {/* email */}
    <View>
    <Text style={styles.label}>Email</Text>
        <TextInput
          fontSize={20}
          inputMode="email"
          placeholder='example@gmail.com'
          keyboardType="email-address"
          style={{...styles.textInput}}
          onChangeText={setEmail}
          value={email}
        />
    </View>

    {/* submit */}
            <Pressable
              style={{
                ...styles.buttons,
                backgroundColor: '#000000',
                marginTop: width / 5,
              }}
              onPress={toSubmit}
              >
              <Text style={styles.buttonsText}>SUBMIT</Text>
            </Pressable>


    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    navStyle:{
        flexDirection:"row",
        width:width,
        height:width/5,
        // backgroundColor:'#ddd',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal:width/20,
        marginTop:10
    },navTitle :{
        marginHorizontal:width/30,
        fontSize:25,
        fontFamily: 'montserrat_regular',
        color:"#0A0576",
        fontWeight:"400"
    },rootStyle:{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'center'
    },iconStyle:{
        width:width/1.4,
        height:width/2
    },description:{
        marginHorizontal:width/25,
        width:width-80,
        fontSize:20,
        textAlign:'center',
        fontFamily:'montserrat_regular',
        color:'#BFBFBF'
    },
    // textinput
    label: {
        fontSize: width / 25,
        marginTop: width / 20,
        fontFamily: 'montserrat_regular',
        color: '#B4B4B4',

      },
      textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#D1CFCF',
        width: width - 50,
        fontSize: 20,
        marginTop: -10,
        fontFamily: 'montserrat_regular',
        color: '#000000',
      },
      buttons: {
        width: width - 120,
        borderRadius: (width - 120) / 3,
        height: width / 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonsText: {
        fontSize: width / 25,
        color: '#FFFFFF',
        fontFamily: 'montserrat_regular',
      },
})