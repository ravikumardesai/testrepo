import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const topBg = require('../res/top.png');
const romil = require('../res/romil.png');
const edit = require('../res/edit.png');
const donationProfile = require('../res/donation_profile.png');
const becomePng = require('../res/become.png');
const becomeApproved = require('../res/user_checked.png');
const publicCourses = require('../res/public_courses_light.png');
const privateCourses = require('../res/private_courses_light.png');
const enrollmentPng = require('../res/enrollment_request.png');
const settingsPng = require('../res/setting.png');
const helpPng = require('../res/help.png');

const {height, width} = Dimensions.get('window');



const Profile = ({navigation}) => {


  const [status, setStatus] = useState('APPROVED'); // '' , REQUEST SENT ,APPROVED , 

  const toBecomeTeacher = () => {

    navigation.navigate('becomeTeacher',{
      status:status
    });

  }

  const Cards = props => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E6EBF2',
          width: width / 2 - 20,
          height: width / 2 - 20,
          borderRadius: (width / 2) / 6,
          position:'relative',
        }}>


      {props.checkReq && 
          <View style={{

            position:'absolute',
            right:0,
            top:0,
            padding:10,
            backgroundColor:"#E58D00",
            overflow:'hidden',
            zIndex:-10,
            borderTopRightRadius:width/2,
            borderBottomLeftRadius:width/2,
            width:width/3,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Text style={{fontSize:15,fontFamily:'poppins_medium',color:"#FFF"}} >Check Requests</Text>
          </View>
        }     
        <Image
          source={props.img}
          style={{width: 120, height: 80,marginTop:5}}
          resizeMode="center"
        />
        <Text
          style={{
            fontFamily: 'montserrat_semi_bold',
            fontSize: 20,
            color: '#3C4A61',
            textAlign:'center'
          }}>
          {props.title}
        </Text>

        {props.status && 
        <Text
          style={{
            fontFamily: 'montserrat_semi_bold',
            fontSize: 15,
            color: (props.status=="REQUEST SENT")? '#E59C25': "#02AD23"
          }}>
          {props.status}
        </Text>}

      </View>
    );
  };

  return (
      <View style={styles.root}>
        <StatusBar hidden={true} />
        {/* top */}
        <ImageBackground
          source={topBg}
          style={styles.navBarImage}
          resizeMode="stretch">
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 30,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: width / 18,
                fontFamily: 'montserrat_semi_bold',
                color: '#0B0677',
              }}>
              PROFILE
            </Text>
            <Pressable>
              <Text
                style={{
                  color: '#DE2C01',
                  fontSize: width / 30,
                  fontFamily: 'montserrat_semi_bold',
                }}>
                SIGN OUT
              </Text>
            </Pressable>
          </View>
        </ImageBackground>

        <View style={{marginTop: -height / 6}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: width - 40,
            }}>
            <View
              style={{
                padding: 20,
                backgroundColor: '#fff',
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={romil}
                style={{
                  width: width / 3.2,
                  height: width / 3.2,
                  aspectRatio: 2 / 2,
                }}
              />
              <Pressable
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  width: 140,
                  backgroundColor: '#000',
                  marginTop: -30,
                  borderRadius: 20,
                  borderWidth: 5,
                  borderColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'montserrat_regular',
                    color: '#fff',
                  }}>
                  Student
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                width: width / 3,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'montserrat_bold',
                  marginTop: -40,
                  color: '#000',
                }}>
                Romil John
              </Text>
            </View>
          </View>
          <Image
            source={edit}
            style={{
              width: 70,
              height: 70,
              position: 'absolute',
              right: width / 10,
              bottom: width / 20,
            }}
          />
        </View>

        <ScrollView>
        {/* cards */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            rowGap: 10,
            columnGap: 10,
            padding: 10,
            marginHorizontal:5,
            justifyContent: 'flex-start',
            marginBottom:120,
            
          }}>
            <Pressable 
              onPress={()=>navigation.navigate('donation')}
            >
              <Cards img={donationProfile} title="DONATION" />
            </Pressable>
          {status === '' && (
            <Pressable
              onPress={toBecomeTeacher}>
              <Cards img={becomePng} title="BECOME TEACHER" />
            </Pressable>
          )}

          {status === 'REQUEST SENT' && (
            <Pressable
              onPress={toBecomeTeacher}>
              <Cards img={becomePng} title="BECOME TEACHER" status = "REQUEST SENT"/>
            </Pressable>
          )}

          {status === 'APPROVED' && (
            <>
            <Pressable
              onPress={toBecomeTeacher}>
              <Cards img={becomeApproved} title="BECOME TEACHER" status = "APPROVED"/>
            </Pressable>


            <Pressable
            onPress={() => {
              // navigation.navigate('becomeTeacher');
            }}>
            <Cards img={publicCourses} title="PUBLIC COURSES"/>
            </Pressable>

            <Pressable
            onPress={() => {
              // navigation.navigate('becomeTeacher');
            }}>
            <Cards img={privateCourses} title="PRIVATE COURSES"/>
            </Pressable>

            <Pressable
            onPress={() => {
              navigation.navigate('enrollmentRequest');
            }}>
            <Cards img={enrollmentPng} title="ENROLLMENT REQUESTS" checkReq={true}/>
            </Pressable>
            </>
          )}

          <Cards img={settingsPng} title="SETTINGS" />
          <Cards img={helpPng} title="HELP & SUPPORT"/>
        
        </View>
    </ScrollView>
      </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    height:Dimensions.get('screen').height,
    backgroundColor: '#fff',
  },
  navBarImage: {
    height: height / 3.2,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
