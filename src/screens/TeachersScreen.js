import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  ImageBackground,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Dropdown } from 'react-native-element-dropdown';

const searchIcon = require('../res/icon_feather_search.png');
const filterIcon = require('../res/filter.png');
const closePng = require('../res/close.png');
const romilPng = require('../res/romil.png');
const favIcon = require('../res/fav_ic.png');


const {width, height} = Dimensions.get('window');

const languageData = [
  { label: 'English', value: 'English' },
  { label: 'Hindi', value: 'Hindi' },
  { label: 'Spenish', value: 'Spenish' },
  { label: 'Gujarati', value: 'Gujarati' },
  { label: 'Economics', value: 'Economics' },
]

const countryData = [
  { label: 'USA', value: 'USA' },
  { label: 'INDIA', value: 'INDIA' },
  { label: 'CANADA', value: 'CANADA' },
]

const courseData = [
  { label: 'PRIVATE', value: 'PRIVATE' },
  { label: 'PUBLIC', value: 'PUBLIC' },
]

const TeachersScreen = () => {
  // ref for bottomsheet
  const refRBSheet = useRef();
  // dropdown value
  const [language, setLanguage] = useState(null);
  const [country, setCountry] = useState(null);
  const [courseType, setCourseType] = useState(null);

  // the view filtered or not (for icon change)
  const [filter,setFilter] = useState(false);

  const HomeCards = props => {
    return (
      <ImageBackground
        source={romilPng}
        imageStyle={styles.cardImageBg}
        style={styles.homeCard}>
        <View style={styles.cardContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.cardName}>{props.name} </Text>
            <Text style={styles.cardExperience}>{props.experiene} yrs</Text>
          </View>
          <Text style={styles.cardSubject}>{props.subject}</Text>

          <Pressable style={{alignSelf: 'center'}}>
            <Text style={styles.buttonHomeCard}>BOOK PRIVATE COURSE</Text>
          </Pressable>
        </View>
        <Image source={favIcon} style={styles.calIcon} />
      </ImageBackground>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.rootStyle}>
        {/* nav */}
        <View style={styles.navStyle}>
          <Text style={styles.navText}>TEACHERS</Text>
        </View>


        {/* search */}
        <View style={styles.searchbar}>
          <Image
            source={searchIcon}
            style={styles.searchIcons}
            resizeMode="center"
          />
          <TextInput placeholder="Search" style={styles.searchTextInput} />
          <Pressable onPress={() => refRBSheet.current.open()}>
            <Image source={filterIcon} style={styles.searchIcons} />
          </Pressable>
        </View>

        {/* card */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            rowGap: 20,
            columnGap: 20,
            justifyContent: 'center',
          }}>
          <HomeCards subject="English,Hindi" name="John Abey" experiene="6" />
          <HomeCards subject="Spenish,English" name="George K" experiene="2" />
          <HomeCards
            subject="Gujarati,English"
            name="Daizy John"
            experiene="5"
          />
          <HomeCards
            subject="English,Spanish,Hindi"
            name="Matthew Lee"
            experiene="4"
          />
          <HomeCards subject="Economics" name="Sara Dany" experiene="25" />
          <HomeCards
            subject="English,Spanish,Hindi"
            name="Peter Mark"
            experiene="10"
          />
        </View>
      </View>

      {/*  filter bottom sheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={height /1.9}
        customStyles={{
          draggableIcon: {
            backgroundColor: 'transparent',
          },
        }}>
        <View style={styles.bottomSheetRoot}>
          {/* header */}
          <View style={styles.bottomSheetHeader}>
            <Text style={{
               fontFamily: 'montserrat_semi_bold',
               fontSize:width/17,
               fontWeight:'400',
               color:'#000',
               marginStart:10
            }}>Filter</Text>
            <Pressable onPress={() => refRBSheet.current.close()}>
              <Image source={closePng} style={styles.searchIcons} />
            </Pressable>
          </View>

          {/* choose Language */}
          <View style={{marginVertical: 10,justifyContent:'flex-start',flexDirection:'column'}}>
            <Text style={styles.selectDateLabel}>Choose language</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={languageData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Language"
              searchPlaceholder="Search Language"
              value={language}
              onChange={item => {
                setLanguage(item.value);
              }}
            />
          </View>

          {/* choose Country */}
          <View style={{marginVertical: 10,justifyContent:'flex-start',flexDirection:'column'}}>
            <Text style={styles.selectDateLabel}>Choose Country</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={countryData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Language"
              searchPlaceholder="Search Language"
              value={country}
              onChange={item => {
                setCountry(item.value);
              }}
            />
          </View>

          {/* Course Type */}
          <View style={{marginVertical: 10,justifyContent:'flex-start',flexDirection:'column'}}>
            <Text style={styles.selectDateLabel}>Course Type</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={courseData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Language"
              searchPlaceholder="Search Language"
              value={courseType}
              onChange={item => {
                setCourseType(item.value);
              }}
            />
          </View>
          
          <Pressable
              style={{
                ...styles.buttons,
                backgroundColor: '#000000',
                marginTop: width / 20,
              }}
              onPress={() => {
                  refRBSheet.current.close()
                  setFilter(true)
                }}
              >
              <Text style={styles.buttonsText}>APPLY</Text>
            </Pressable>

        </View>
      </RBSheet>
    </ScrollView>
  );
};

export default TeachersScreen;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFFFFF',
  },

  navText: {
    fontSize: width / 15,
    color: '#0C0877',
    fontFamily: 'montserrat_semi_bold',
    fontWeight:'600'
  },
  // search
  searchbar: {
    backgroundColor: '#E2E2E2',
    borderRadius: width / 2,
    height: width / 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: width / 25,
  },
  searchIcons: {
    width: width / 10,
    height: width / 10,
    marginHorizontal: -10,
  },
  searchTextInput: {
    flex: 1,
    fontSize: 25,
    fontFamily: 'poppins_regular',
    marginTop: 5,
    marginLeft: 5,
  },

  // card
  homeCard: {
    height: width / 2 - 10,
    width: width / 2 - 40,
    backgroundColor: '#ddd',
    borderRadius: width / 2 / 9,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  cardImageBg: {
    height: width / 2 - 10,
    width: width / 2 - 40,
    opacity: 0.7,
    borderRadius: width / 2 / 9,
  },
  cardContainer: {
    width: width / 2 - 40,
    paddingVertical: 30,
    borderRadius: width / 2 / 9,
  },
  cardName: {
    fontSize: 20,
    color: '#FEFEFE',
    fontWeight: '500',
    fontFamily: 'poppins_regular',
    textAlign: 'center',
    marginVertical: 5,
  },
  cardExperience: {
    backgroundColor: '#FFF',
    color: '#000',
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 2,
    fontSize: 18,
  },
  cardSubject: {
    fontSize: 17,
    color: '#22AF79',
    fontWeight: '500',
    fontFamily: 'poppins_regular',
    textAlign: 'center',
    fontWeight: '300',
  },
  calIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
  },
  buttonHomeCard: {
    width: width / 3,
    padding: 10,
    backgroundColor: '#E5DDFF',
    textAlign: 'center',
    borderRadius: 10,
    color: '#4A00AF',
    marginTop: 5,
  },

  // bottomsheet
  bottomSheetRoot: {
    paddingHorizontal: width / 16,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:10
  },
  dateBoxes: {
    width: width / 2 - 40,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F6',
  },
  selectDateLabel: {
    fontSize: 18,
    fontFamily: 'montserrat_regular',
    color: '#A6A6A6',
  },
  bottomCheckBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomCheckText: {
    fontSize: width / 20,
  },

  // dropdown
  dropdown: {
    width:width-50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginVertical:5,
    padding:5
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 20,
    fontFamily:'montserrat_medium',
    color:"#000"
  },
  selectedTextStyle: {
    fontSize: 20,
    fontFamily:'montserrat_regular',
    color:"#000"
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

    // button 
    buttons: {
      width: width - 90,
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
});
