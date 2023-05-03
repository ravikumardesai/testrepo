import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Swipelist from 'react-native-swipeable-list-view';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Dropdown} from 'react-native-element-dropdown';

const {width, height} = Dimensions.get('window');

// icons
const searchIcon = require('../res/icon_feather_search.png');
const filterIcon = require('../res/slider.png');
const addIcon = require('../res/add.png');
const closePng = require('../res/close.png');

const data = [
  {
    name: 'Joanna Jha',
    country: 'USA',
    image: require('../res/img.png'),
    desc: 'Teaching kids to count is fine, but teaching them what counts is best.',
    userType: 'Student',
  },
  {
    name: 'Joanna Jha',
    country: 'USA',
    image: require('../res/img_teacher.png'),
    desc: 'Teaching kids to count is fine, but teaching them what counts is best.',
    userType: 'Student',
  },
  {
    name: 'Joanna Jha',
    country: 'USA',
    image: require('../res/img_user.png'),
    desc: 'Teaching kids to count is fine, but teaching them what counts is best.',
    userType: 'Teacher',
  },
  {
    name: 'Joanna Jha',
    country: 'USA',
    image: require('../res/img_user.png'),
    desc: 'Teaching kids to count is fine, but teaching them what counts is best.',
    userType: 'Teacher',
  },
  {
    name: 'Joanna Jha',
    country: 'USA',
    image: require('../res/img_user.png'),
    desc: 'Teaching kids to count is fine, but teaching them what counts is best.',
    userType: 'Teacher',
  },
  {
    name: 'Joanna Jha',
    country: 'USA',
    image: require('../res/img_user.png'),
    desc: 'Teaching kids to count is fine, but teaching them what counts is best.',
    userType: 'Teacher',
  },
  {
    name: 'Joanna Jha',
    country: 'USA',
    image: require('../res/img_user.png'),
    desc: 'Teaching kids to count is fine, but teaching them what counts is best.',
    userType: 'Teacher',
  },
  {
    name: 'Joanna Jha',
    country: 'USA',
    image: require('../res/img_user.png'),
    desc: 'Teaching kids to count is fine, but teaching them what counts is best.',
    userType: 'Teacher',
  },
  {
    name: 'Joanna Jha',
    country: 'USA',
    image: require('../res/img_user.png'),
    desc: 'Teaching kids to count is fine, but teaching them what counts is best.',
    userType: 'Teacher',
  },
];

const languageData = [
  {label: 'English', value: 'English'},
  {label: 'Hindi', value: 'Hindi'},
  {label: 'Spenish', value: 'Spenish'},
  {label: 'Gujarati', value: 'Gujarati'},
  {label: 'Economics', value: 'Economics'},
];

const countryData = [
  {label: 'USA', value: 'USA'},
  {label: 'INDIA', value: 'INDIA'},
  {label: 'CANADA', value: 'CANADA'},
];

const Borther = props => {
  return (
    <View style={styles.listRoot}>
      <Image source={props.image} style={styles.listImage} />
      <View
        style={{
          flexDirection: 'column',
          width: width / 1.7,
          paddingHorizontal: 10,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Text
            style={{
              fontSize: width / 20,
              fontFamily: 'montserrat_semi_bold',
              color: '#000',
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              marginStart: 5,
              fontSize: width / 20,
              fontFamily: 'montserrat_semi_bold',
              color: '#1A8E30',
            }}>
            {props.country}
          </Text>
        </View>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 16,
            fontFamily: 'montserrat_regular',
            marginTop: 5,
          }}>
          {props.desc}
        </Text>
      </View>
      <Text
        style={{
          alignSelf: 'flex-start',
          fontSize: 20,
          fontFamily: 'montserrat_regular',
        }}>
        {props.userType}
      </Text>
    </View>
  );
};

const BrothersScreen = () => {
  const [filter, setFilter] = useState(false);

  // ref for bottomsheet
  const refRBSheet = useRef();

  // dropdown value
  const [language, setLanguage] = useState(null);
  const [country, setCountry] = useState(null);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.rootStyle}>
        {/* Nav */}
        <View style={styles.navStyle}>
          <Text style={styles.navText}>BROTHERS</Text>
          <View style={styles.navLogoSection}>
            <Pressable onPress={() => refRBSheet.current.open()}>
              {filter ? (
                <Image source={filterIcon} style={styles.navLogos} />
              ) : (
                <Image source={filterIcon} style={styles.navLogos} />
              )}
            </Pressable>
            <Pressable>
              <Image source={addIcon} style={styles.navLogos} />
            </Pressable>
          </View>
        </View>

        {/* search */}
        <View style={styles.searchbar}>
          <Image
            source={searchIcon}
            style={styles.searchIcons}
            resizeMode="center"
          />
          <TextInput placeholder="Search" style={styles.searchTextInput} />
        </View>

        {/* listing */}
        <Swipelist
          data={data}
          renderRightItem={(data, index) => (
            <Borther
              image={data.image}
              name={data.name}
              country={data.country}
              desc={data.desc}
              userType={data.userType}
            />
          )}
          renderHiddenItem={(data, index) => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[styles.rightAction]}
                onPress={() => {
                  Alert.alert('Delete?', data.name);
                }}>
                <Image
                  source={require('../res/fav_new_icon.png')}
                  style={{width: 80, height: 80}}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'montserrat_regular',
                    marginTop: -20,
                  }}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          )}
          rightOpenValue={width / 3}
        />
      </View>

      {/*  filter bottom sheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={height / 2.3}
        customStyles={{
          draggableIcon: {
            backgroundColor: 'transparent',
          },
        }}>
        <View style={styles.bottomSheetRoot}>
          {/* header */}
          <View style={styles.bottomSheetHeader}>
            <Text
              style={{
                fontFamily: 'montserrat_semi_bold',
                fontSize: width / 17,
                fontWeight: '400',
                color: '#000',
                marginStart: 10,
              }}>
              Filter
            </Text>
            <Pressable onPress={() => refRBSheet.current.close()}>
              <Image source={closePng} style={styles.searchIcons} />
            </Pressable>
          </View>

          {/* choose Language */}
          <View
            style={{
              marginVertical: 10,
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}>
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
          <View
            style={{
              marginVertical: 10,
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}>
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

          <Pressable
            style={{
              ...styles.buttons,
              backgroundColor: '#000000',
              marginTop: width / 20,
            }}
            onPress={() => {
              refRBSheet.current.close();
              setFilter(true);
            }}>
            <Text style={styles.buttonsText}>APPLY</Text>
          </Pressable>
        </View>
      </RBSheet>
    </ScrollView>
  );
};

export default BrothersScreen;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // navbar
  navStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  navLogos: {
    width: width / 10,
    height: width / 10,
    marginLeft: 10,
  },
  navText: {
    fontSize: width / 15,
    color: '#0C0877',
    fontFamily: 'montserrat_semi_bold',
    fontWeight: '600',
  },
  navLogoSection: {
    display: 'flex',
    flexDirection: 'row',
  },

  // searchbar
  searchbar: {
    backgroundColor: '#E2E2E2',
    borderRadius: width / 2,
    height: width / 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: width / 25,
    marginHorizontal: 30,
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

  // list
  listRoot: {
    width: width,
    height: width / 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    flexDirection: 'row',
    padding: 20,
  },
  listImage: {
    width: width / 6,
    height: width / 6,
  },
  rightAction: {
    width: width,
    height: width / 4,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderColor: '#E2E2E2',
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
    marginVertical: 10,
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
    width: width - 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginVertical: 5,
    padding: 5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 20,
    fontFamily: 'montserrat_medium',
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 20,
    fontFamily: 'montserrat_regular',
    color: '#000',
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