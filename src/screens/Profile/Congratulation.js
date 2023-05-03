import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {HEADING_NAV, STYLES, height, width} from '../../styles/GenStyle';

const Congratulation = ({navigation}) => {
  return (
    <View
      style={{
        height: height,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: width / 2.5,
        }}>
        <Image
          source={require('../../res/tick.png')}
          style={{width: width / 2.5, height: width / 2.5}}
          resizeMode="center"
        />
        <Text
          style={{
            fontSize: 55,
            fontFamily: 'arial_rounded_mt_bold',
            color: '#0A0576',
            marginVertical: 25,
          }}>
          Congratulation
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'montserrat_regular',
            color: '#8E8E8E',
            marginHorizontal: 25,
            textAlign: 'center',
          }}>
          Your request has been recorded, we'll contact you soon for the
          interview
        </Text>
      </View>

      <View style={{position:'absolute',bottom:30,left:0,right:0}}>

          <Pressable style={{...STYLES.buttons}} 
            onPress={()=>navigation.navigate('Profile')}
          >
            <Text style={{...STYLES.buttonsText}}>OK</Text>
          </Pressable>
      </View>
    </View>
  );
};

export default Congratulation;
