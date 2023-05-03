import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
  Alert,
  SafeAreaView,
  LogBox,
} from 'react-native';
import React, {useState} from 'react';
import Statusbar from '../componenets/Statusbar';
import Checkbox from 'react-native-modest-checkbox';
import {StackActions} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Signup = ({navigation}) => {
  
const [firstName,setFirstName] = React.useState("");
const [lastName,setLastName] = React.useState("");
const [email,setEmail] = React.useState("");
const [mobile,setMobile] = React.useState("");
const [password,setPassword] = React.useState("");
const [cnfpassword,setCnfPassword] = React.useState("");
const [agree, setAgree] = React.useState(false);

  const toLogin = () => {
    navigation.goBack();
  };

  const toAuth = () => {
    if (firstName == '') {
      Alert.alert('Please Enter Proper Firstname');
    } else if (lastName == '') {
      Alert.alert('Please Enter Proper lastName');
    } else if (email == '') {
      Alert.alert('Please Enter Proper email');
    } else if (mobile == '') {
      Alert.alert('Please Enter Proper mobile number');
    } else if (password == '') {
      Alert.alert('Please Enter Proper password');
    } else if (password !== cnfpassword) {
      Alert.alert('Password and confirm password should be same');
    } else {
        Alert.alert("HOYEHOYE")
        console.log(firstName,lastName,email,mobile,password,cnfpassword);
    }
  };

  return (
    <View style={styles.rootStyle}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Statusbar /> */}

        {/* form inputs */}
        <SafeAreaView>
        <Text style={styles.signupText}>SIGN UP</Text>

        <Text style={styles.label}>First Name</Text>
        <TextInput
          fontSize={20}
          style={{...styles.textInput}}
          onChangeText={setFirstName}
          value={firstName}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          fontSize={20}
          style={{...styles.textInput}}
          onChangeText={setLastName}
          value={lastName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          fontSize={20}
          inputMode="email"
          keyboardType="email-address"
          style={{...styles.textInput}}
          onChangeText={setEmail}
          value={email}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          inputMode="numeric"
          keyboardType="phone-pad"
          fontSize={20}
          style={{...styles.textInput}}
          onChangeText={setMobile}
          value={mobile}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          fontSize={20}
          style={{...styles.textInput}} 
          onChangeText={setPassword}
          value={password}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          secureTextEntry={true}
          fontSize={20}
          style={{...styles.textInput}}
          onChangeText={setCnfPassword}
          value={cnfpassword}
        />
      </SafeAreaView>

        {/* terms an condition checkbox */}
        <View
        style={{
          flexDirection: 'row',
          justifyContent:'space-around',
          marginVertical: width / 15,
        }}>
        <Checkbox
          label=""
          noFeedback
          labelBefore={false}
          checkedImage={require('../res/check.png')}
          uncheckedImage={require('../res/uncheck.png')}
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
        <Text
          style={{
            fontFamily: 'montserrat_regular',
            fontSize: 20,
            width: width - 90,
          }}>
          I agree to the &nbsp;
          <Text style={{textDecorationLine: 'underline'}}>
            Terms & Conditions & Privacy Policy.
          </Text>
        </Text>
      </View>

        {/* Singup */}
        <Pressable
          disabled={!agree}
          style={
            agree
              ? {
                  ...styles.buttons,
                  backgroundColor: '#000000',
                  marginTop: width / 20,
                }
              : {
                  ...styles.buttons,
                  backgroundColor: '#DDD',
                  marginTop: width / 20,
                }
          }
          onPress={toAuth}>
          <Text style={styles.buttonsText}>SIGN UP</Text>
        </Pressable>

        <Text style={styles.bootomText}>
          Already have an account?{' '}
          <Text
            onPress={toLogin}
            style={{
              textDecorationLine: 'underline',
              borderBottomColor: '#000',
            }}>
            Login
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignSelf: 'center',
  },
  signupText: {
    // backgroundColor:'#333',
    fontSize: width / 11,
    fontWeight: '500',
    fontFamily: 'montserrat_semi_bold',
    color: '#000',
    marginVertical: width / 10,
  },
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
  bootomText: {
    fontSize: width / 30,
    fontFamily: 'poppins_regular',
    alignSelf: 'center',
    marginTop: 20,
  },
});
