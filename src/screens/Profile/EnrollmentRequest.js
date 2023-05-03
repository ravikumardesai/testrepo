import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {HEADING_NAV, STYLES, width, height} from '../../styles/GenStyle';

// import for images
const enrollmentUserImage = require('../../res/img_user.png');
const otherImage = require('../../res/img.png');

// public requests

const publicRequests = [
  {
    img: enrollmentUserImage,
    name: 'Roma Jain',
    enrollmentDate: '06th Aug 2021',
    isAcceptedStudent: true,
  },
  {
    img: otherImage,
    name: 'Joanna Jha',
    enrollmentDate: '06th Aug 2021',
    isAcceptedStudent: false,
  },
  {
    img: enrollmentUserImage,
    name: 'Judah Kee',
    enrollmentDate: '06th Aug 2021',
    isAcceptedStudent: true,
  },
  {
    img: otherImage,
    name: 'Roma Jain',
    enrollmentDate: '06th Aug 2021',
    isAcceptedStudent: false,
  },
  {
    img: enrollmentUserImage,
    name: 'Judah Kee',
    enrollmentDate: '06th Aug 2021',
    isAcceptedStudent: true,
  },
  {
    img: otherImage,
    name: 'Roma Jain',
    enrollmentDate: '06th Aug 2021',
    isAcceptedStudent: false,
  },
  {
    img: enrollmentUserImage,
    name: 'Judah Kee',
    enrollmentDate: '06th Aug 2021',
    isAcceptedStudent: true,
  },
  {
    img: otherImage,
    name: 'Roma Jain',
    enrollmentDate: '06th Aug 2021',
    isAcceptedStudent: false,
  },
];


const privateRequests = [
    {
      img: otherImage,
      name: 'Judah Kee',
      enrollmentDate: '06th Aug 2021',
      isAcceptedStudent: true,
    },
    {
      img: enrollmentUserImage,
      name: 'Roma Jha',
      enrollmentDate: '06th Aug 2021',
      isAcceptedStudent: true,
    },
    {
      img: otherImage,
      name: 'Roma Jain',
      enrollmentDate: '06th Aug 2021',
      isAcceptedStudent: false,
    },
    {
      img: enrollmentUserImage,
      name: 'Judah Kee',
      enrollmentDate: '06th Aug 2021',
      isAcceptedStudent: true,
    },
    {
      img: otherImage,
      name: 'Roma Jain',
      enrollmentDate: '06th Aug 2021',
      isAcceptedStudent: false,
    },
    {
      img: enrollmentUserImage,
      name: 'Judah Kee',
      enrollmentDate: '06th Aug 2021',
      isAcceptedStudent: true,
    },
    {
      img: otherImage,
      name: 'Roma Jain',
      enrollmentDate: '06th Aug 2021',
      isAcceptedStudent: false,
    },
  ];
  


const EnrollmentRequest = ({navigation}) => {
  const [filter, setFilter] = useState(false);
  const [publicSelected, setPublicSelected] = useState(true);

  const EnrollmentList = props => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 15,
          borderWidth: 1,
          borderColor: '#CBC9C9',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={props.img}
            style={{width: width / 6, height: width / 6}}
            resizeMode="stretch"
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 15,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'montserrat_semi_bold',
                color: '#000',
              }}>
              {props.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'montserrat_medium',
                color: '#000',
              }}>
              {props.enrollmentDate}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {props.isAcceptedStudent != true ? (
            <>
              <Pressable
                style={{
                  ...STYLES.buttons,
                  width: width / 3.5,
                  marginHorizontal: 10,
                }}
                // onPress={()=>navigation.navigate('Profile')}
              >
                <Text style={{...STYLES.buttonsText}}>ACCEPT</Text>
              </Pressable>
              <Pressable>
                <Image
                  source={require('../../res/close_ic.png')}
                  style={{width: width / 10, height: width / 10}}
                  resizeMode="stretch"
                />
              </Pressable>
            </>
          ) : (
            <Pressable
              style={{
                ...STYLES.buttons,
                width: width / 3.5,
                marginHorizontal: 10,
                backgroundColor: '#CBC9C9',
              }}
              // onPress={()=>navigation.navigate('Profile')}
            >
              <Text style={{...STYLES.buttonsText}}>REMOVE</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        height: height + 120,

        backgroundColor: '#fff',
      }}>
      {/* nav */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          paddingTop: 30,
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../res/aerrow.png')}
            style={{width: 20, height: 20}}
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
            ENROLLMENT REQUESTS
          </Text>
        </View>
      </View>

      {/* search */}
      <View style={styles.searchbar}>
        <Image
          source={require('../../res/icon_feather_search.png')}
          style={styles.searchIcons}
          resizeMode="center"
        />
        <TextInput placeholder="Search" style={styles.searchTextInput} />

        <Pressable
        // onPress={() => refRBSheet.current.open()}
        >
          {filter ? (
            <Image
              source={require('../../res/filter.png')}
              style={styles.searchIcons}
            />
          ) : (
            <Image
              source={require('../../res/filter.png')}
              style={styles.searchIcons}
            />
          )}
        </Pressable>
      </View>

      {/* PUBLIC and PRIVATE buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
          marginHorizontal: 20,
        }}>
        <Pressable onPress={() => setPublicSelected(true)}>
          <Text
            style={
              publicSelected ? styles.selectedButton : styles.unSelectedButton
            }>
            PUBLIC
          </Text>
        </Pressable>
        <Pressable onPress={() => setPublicSelected(false)}>
          <Text
            style={
              publicSelected ? styles.unSelectedButton : styles.selectedButton
            }>
            PRIVATE
          </Text>
        </Pressable>
      </View>

      {/* enrollment list */}

      <FlatList
        data={publicSelected ? publicRequests : privateRequests}
        renderItem={({item}) => {
          return (
            <EnrollmentList
              img={item.img}
              name={item.name}
              enrollmentDate={item.enrollmentDate}
              isAcceptedStudent={item.isAcceptedStudent}
            />
          );
        }}
      />
    </View>
  );
};

export default EnrollmentRequest;

const styles = StyleSheet.create({
  // searchbar
  searchbar: {
    backgroundColor: '#E2E2E2',
    borderRadius: width / 2,
    height: width / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: width / 30,
    margin: 20,
  },
  searchIcons: {
    width: width / 13,
    height: width / 13,
    marginHorizontal: -15,
  },
  searchTextInput: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'poppins_regular',
    marginTop: 5,
    marginLeft: 15,
  },

  // top bar
  unSelectedButton: {
    width: width / 2 - 30,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    padding: 12,
    borderRadius: width / 2 / 5,
    fontSize: 15,
    backgroundColor: '#F2F2F2',
    color: '#000',
    fontFamily: 'montserrat_semi_bold',
  },
  selectedButton: {
    width: width / 2 - 30,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    padding: 12,
    borderRadius: width / 2 / 5,
    fontSize: 15,
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'montserrat_semi_bold',
  },
});
