import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Statusbar from '../componenets/Statusbar';
import { StackActions } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  // form data
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // backbutton as per design
  const BackButtonView = () => {
    return (
      <View
        style={{marginVertical: 20, marginLeft: 30, alignSelf: 'flex-start'}}>
        <Image source={require('../res/back.png')} style={styles.backButton} />
      </View>
    );
  };

  const toSignup = () => {
    navigation.navigate('signup');
  };

  const toAuth = () => {
    if (email == '') {
      Alert.alert('Please Enter Proper Email');
    } else if (password == '') {
      Alert.alert('Please Enter Proper Passoword');
    } else {
      navigation.dispatch(StackActions.replace("auth"))
    }
  };


  return (
    <ScrollView>
      <ImageBackground
        source={require('../res/splash_bg.png')}
        style={styles.imageBackgrond}>
        <SafeAreaView style={styles.rootStyle}>
          {/* <BackButtonView /> */}

          {/* card for login */}
          <View style={styles.cardStyle}>
            <Image
              source={require('../res/logo_splash.png')}
              style={styles.logoStyle}
              resizeMode="center"
            />
            <Text style={styles.loginText}>LOGIN</Text>

            {/* email */}

            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="example@gmail.com"
              style={styles.textInput}
              inputMode="email"
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
            />

            {/* password */}

            <Text style={styles.label}>Password</Text>
            <TextInput
              secureTextEntry={true}
              fontSize={20}
              style={{...styles.textInput}}
              onChangeText={setPassword}
              value={password}
            />

            {/* Buttons */}

            <Pressable
              style={{
                ...styles.buttons,
                backgroundColor: '#000000',
                marginTop: width / 10,
              }}
              onPress={toAuth}>
              <Text style={styles.buttonsText}>LOGIN</Text>
            </Pressable>

            {/* forget password */}

            <Pressable 
            style={{...styles.alignCenter, marginTop: width / 25}}
            onPress={()=>{
              navigation.navigate("forgotPassword")
            }}
            >
              <Text
                style={{
                  ...styles.buttonsText,
                  color: '#000',
                  alignSelf: 'center',
                }}>
                Forget Password?
              </Text>
            </Pressable>

            {/* Signin with google, facebook */}

            <Pressable
              style={{
                ...styles.buttons,
                elevation: 2,
                backgroundColor: '#FFFFFF',
                marginTop: width / 20,
              }}>
              <Image
                source={require('../res/google.png')}
                style={styles.buttonLogos}
              />
              <Text style={{...styles.buttonsText, color: '#000'}}>
                SIGNIN WITH GOOGLE
              </Text>
            </Pressable>

            <Pressable
              style={{
                ...styles.buttons,
                elevation: 2,
                backgroundColor: '#FFFFFF',
                marginTop: 10,
                // shadowColor:'#FBFBFB'
              }}>
              <Image
                source={require('../res/facebok.png')}
                style={styles.buttonLogos}
              />
              <Text style={{...styles.buttonsText, color: '#000'}}>
                SIGNIN WITH FACEBOOK
              </Text>
            </Pressable>
          </View>

          <Text style={styles.bootomText}>
            Don't have an account?{' '}
            <Text
              onPress={toSignup}
              style={{
                textDecorationLine: 'underline',
                borderBottomColor: '#000',
              }}>
              Register now
            </Text>
          </Text>
          <Statusbar />
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageBackgrond: {
    // width:width,
    flex: 1,
    height: height,
  },
  logoStyle: {
    width: width / 2.5,
    // height:width/4,
    // backgroundColor:'#333'
    alignSelf: 'center',
  },
  cardStyle: {
    // height: height / 1.5,
    width: width - 50,
    backgroundColor: '#DDD',
    elevation: 10,
    borderRadius: 30,
    shadowColor: '#98EAEC',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: width / 15,
    paddingHorizontal: width / 17,
  },
  loginText: {
    // backgroundColor:'#333',
    fontSize: width / 15,
    fontWeight: '500',
    fontFamily: 'montserrat_semi_bold',
    color: '#000',
  },
  label: {
    fontSize: width / 25,
    marginTop: width / 20,
    fontFamily: 'montserrat_regular',
    color: '#B4B4B4',
  },
  textInput: {
    borderBottomWidth: 1,
    width: width - 100,
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
  alignCenter: {
    alignSelf: 'center',
  },
  buttonLogos: {
    position: 'absolute',
    start: width / 30,
    width: width / 15,
    height: width / 15,
  },
  backButton: {
    width: width / 20,
    height: width / 20,
    // backgroundColor:'#FFF'
  },
  bootomText: {
    fontSize: width / 30,
    fontFamily: 'poppins_regular',
  },
});
