import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES, HEADING_NAV, width, height} from '../../styles/GenStyle';

const BecomeTeacher = ({navigation, route}) => {
  const status = route.params.status;
  const [ansWhyWould, setAnsWhyWould] = useState('');

  const toCongratulation = () => {
    if (ansWhyWould.length < 10) {
      Alert.alert('Please Enter Proper Description...');
    } else {
      navigation.navigate('congratulation');
    }
  };

  return (
    <View style={{height: height, padding: 20,backgroundColor:"#fff"}}>
      {/* nav */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../res/aerrow.png')}
            style={{width: 40, height: 40}}
            resizeMode="center"
          />
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: HEADING_NAV,
              fontFamily: 'montserrat_semi_bold',
              color: '#0F0A79',
              marginLeft: HEADING_NAV / 2,
            }}>
            BECOME TEACHER
          </Text>
          <Text
            style={{
              fontSize: HEADING_NAV - 5,
              fontFamily: 'montserrat_regular',
              color: (status === 'REQUEST SENT') ? '#F0BC6A': "#31BC4C" ,
              marginLeft: width / 6,
            }}>
            {status === 'REQUEST SENT' && 'Pending'}
            {status === 'APPROVED' && 'Approved'}
          </Text>
        </View>
      </View>

      {status !== 'APPROVED' && (
        <View style={{justifyContent: 'space-between', height: '95%'}}>
          {/* label and input */}
          <View style={{marginTop: 40}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'montserrat_bold',
                color: '#000',
              }}>
              Why would you like to become teacher?
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#767676',
                marginTop: 10,
                textAlignVertical: 'top',
                padding: 20,
                fontSize: 20,
                borderRadius: 10,
              }}
              placeholder="Write Here..."
              placeholderTextColor="#767676"
              multiline={true}
              numberOfLines={10}
              value={ansWhyWould}
              onChangeText={setAnsWhyWould}
            />
          </View>
          <View>
            {status === '' && (
              <Pressable style={{...STYLES.buttons}} onPress={toCongratulation}>
                <Text style={{...STYLES.buttonsText}}>SUBMIT REQUEST</Text>
              </Pressable>
            )}
            {status === 'REQUEST SENT' && (
              <Pressable
                style={{...STYLES.buttons}}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={{...STYLES.buttonsText}}>EDIT REQUEST</Text>
              </Pressable>
            )}
          </View>
        </View>
      )}

      {status === 'APPROVED' && (
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
              marginTop: width / 3.5,
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
                marginTop: 20,
                marginBottom:10
              }}>
              Congratulation
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'montserrat_regular',
                color: '#8E8E8E',
                textAlign: 'center',
              }}>
              You became a teacher
            </Text>

            <Text
              style={{
                fontSize: 18,
                fontFamily: 'montserrat_semi_bold',
                color: '#000',
                textAlign: 'center',
                marginHorizontal:15,
                marginVertical:20
              }}>
              Teacher section is activated, you can create the course now.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default BecomeTeacher;
