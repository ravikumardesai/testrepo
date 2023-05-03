import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from 'react-native-modest-checkbox';
import { MultiSelect } from 'react-native-element-dropdown';

// images import start
const donationLogo = require('../res/donation.png');
const notificationLogo = require('../res/notification.png');
const searchIcon = require('../res/icon_feather_search.png');
const filterIcon = require('../res/filter.png');
const blueStrip = require('../res/blue_strip.png');

const coursePng = require('../res/course.png');
const calendar = require('../res/calendar.png');

const closePng = require('../res/close.png');

// images import end

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  // ref for bottomsheet
  const refRBSheet = useRef();

  // filter dates
  const [fromDate, setFromDate] = useState('Select Date');
  const [toDate, setToDate] = useState('Select Date');

  //  filter datepicker
  const [fromDPView, setFromDPView] = useState(false);
  const [toDPView, setToDPView] = useState(false);
  const [minDate, setMinDate] = useState();

  // filter checkbox agree
  const [paid, setPaid] = useState(false);
  const [free, setFree] = useState(false);
  const [donation, setDonation] = useState(false);
  const [additinalCheck, setAdditinalCheck] = useState(false);

  // filter dropdown
  const [selected, setSelected] = useState([]);

  // the view filtered or not (for icon change)
  const [filter,setFilter] = useState(false);

  const openFromDatePicker = () => {
    setFromDPView(true);
  };

  const openToDatePicker = () => {
    setToDPView(true);
  };

  // languages
  const data = [
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Spenish', value: 'Spenish' },
    { label: 'Gujarati', value: 'Gujarati' },
    { label: 'Economics', value: 'Economics' },
  ];

  const HomeCards = props => {
    return (
      <ImageBackground
        source={coursePng}
        imageStyle={styles.cardImageBg}
        style={styles.homeCard}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{props.title}</Text>
          <Text style={styles.cardName}>{props.name}</Text>
          <Pressable style={{alignSelf: 'center'}}>
            <Text style={styles.buttonHomeCard}>ENROLL</Text>
          </Pressable>
        </View>

        <ImageBackground
          source={blueStrip}
          style={styles.cardLabel}
          imageStyle={{width: 100, height: 100}}>
          <Text style={styles.cardLableText}>{props.courseType}</Text>
        </ImageBackground>

        <Image source={calendar} style={styles.calIcon} />
      </ImageBackground>
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.rootStyle}>
        {/* Nav */}
        <View style={styles.navStyle}>
          <Text style={styles.navText}>PUBLIC COURSES</Text>
          <View style={styles.navLogoSection}>
            <Pressable 
            onPress={()=>navigation.navigate('donation')}
            >
              <Image source={donationLogo} style={styles.navLogos} />
            </Pressable>
            <Pressable>
              <Image source={notificationLogo} style={styles.navLogos} />
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

          <Pressable onPress={() => refRBSheet.current.open()}>
            {filter
              ? 
              <Image source={filterIcon} style={styles.searchIcons} />
              :
              <Image source={filterIcon} style={styles.searchIcons} />
            }
          </Pressable>
        </View>

        {/* cards */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            rowGap: 20,
            columnGap: 20,
            justifyContent: 'center',
          }}>
          <HomeCards
            title="Basic Miracle"
            name="Johanna Lee"
            courseType="DONATION"
          />
          <HomeCards
            title="Basic Miracle"
            name="Sudhish Rang"
            courseType="FIX PRICE"
          />
          <HomeCards
            title="Basic Miracle"
            name="Peter Mark"
            courseType="FIX PRICE"
          />
          <HomeCards title="Basic Miracle" name="Lily Crag" courseType="FREE" />
          <HomeCards
            title="Basic Miracle"
            name="Maria George"
            courseType="FREE"
          />
          <HomeCards
            title="Basic Miracle"
            name="Daizy John"
            courseType="FIX PRICE"
          />
        </View>
      </View>

      {/*  filter bottom sheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={height / 1.2}
        customStyles={{
          // wrapper: {
          //   backgroundColor: "transparent"
          // },
          draggableIcon: {
            backgroundColor: 'transparent',
          },
        }}>
        <View style={styles.bottomSheetRoot}>
          {/* header */}
          <View style={styles.bottomSheetHeader}>
            <Text style={styles.navText}>Filter</Text>
            <Pressable onPress={() => refRBSheet.current.close()}>
              <Image source={closePng} style={styles.searchIcons} />
            </Pressable>
          </View>

          {/* date filter */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: width / 20,
            }}>
            <View style={styles.dateBoxes}>
              <Text style={styles.selectDateLabel}>Date : From</Text>
              <Pressable onPress={openFromDatePicker}>
                <Text style={styles.selectedDate}>{fromDate}</Text>
              </Pressable>
            </View>

            <View style={styles.dateBoxes}>
              <Text style={styles.selectDateLabel}>Date : To</Text>
              <Pressable onPress={openToDatePicker}>
                <Text style={styles.selectedDate}>{toDate}</Text>
              </Pressable>
            </View>
          </View>

          {/* fee type */}
          <View style={{marginVertical: 20}}>
            <Text style={styles.selectDateLabel}>Fee Type</Text>
            <View style={styles.bottomCheckBox}>
              <Text style={styles.selectedDate}>Paid</Text>
              <Checkbox
                label=""
                noFeedback
                labelBefore={true}
                checkedImage={require('../res/check.png')}
                uncheckedImage={require('../res/uncheck.png')}
                checked={paid}
                onChange={() => setPaid(!paid)}
                center
              />
            </View>

            <View style={styles.bottomCheckBox}>
              <Text style={styles.selectedDate}>Free</Text>
              <Checkbox
                label=""
                noFeedback
                labelBefore={true}
                checkedImage={require('../res/check.png')}
                uncheckedImage={require('../res/uncheck.png')}
                checked={free}
                onChange={() => setFree(!free)}
                center
              />
            </View>

            <View style={styles.bottomCheckBox}>
              <Text style={styles.selectedDate}>Donation</Text>
              <Checkbox
                label=""
                noFeedback
                labelBefore={true}
                checkedImage={require('../res/check.png')}
                uncheckedImage={require('../res/uncheck.png')}
                checked={donation}
                onChange={() => setDonation(!donation)}
                center
              />
            </View>
          </View>

          {/* Additional */}
          <View style={{marginVertical: 20}}>
            <Text style={styles.selectDateLabel}>Additional</Text>
            <View style={styles.bottomCheckBox}>
              <Text style={{...styles.selectedDate,flex:1}}>Only show courses organised by 
              teacher in brother's list
              </Text>
              <Checkbox
                label=""
                noFeedback
                labelBefore={true}
                checkedImage={require('../res/check.png')}
                uncheckedImage={require('../res/uncheck.png')}
                checked={additinalCheck}
                onChange={() => setAdditinalCheck(!additinalCheck)}
              />
            </View>
          </View>

          {/* select language */}
          <View style={{marginVertical: 20}}>
            <Text style={styles.selectDateLabel}>Show course only in selected language</Text>
            <View>

              {/* dropdown */}
              <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                search
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Select Subject"
                searchPlaceholder="Search..."
                value={selected}
                onChange={item => {
                  setSelected(item);
                }}
                selectedStyle={styles.selectedStyle}
              />

            </View>
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

      {/* from datepicker */}
      {fromDPView && (
        <RNDateTimePicker
          value={new Date()}
          mode="date"
          onChange={e => {
            setFromDPView(false);
            setFromDate(new Date(e.nativeEvent.timestamp).toDateString());
            setMinDate(e.nativeEvent.timestamp);
          }}
        />
      )}

      {toDPView && (
        <RNDateTimePicker
          value={new Date()}
          mode="date"
          minimumDate={minDate}
          onChange={e => {
            setToDPView(false);
            setToDate(new Date(e.nativeEvent.timestamp).toDateString());
          }}
        />
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFFFFF',
  },

  // navbar
  navStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontWeight:'600'
  },
  navLogoSection: {
    display: 'flex',
    flexDirection: 'row',
  },

  // searchbar
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
  cardTitle: {
    fontSize: 20,
    color: '#FEFEFE',
    fontWeight: '500',
    fontFamily: 'poppins_regular',
    textAlign: 'center',
  },
  cardName: {
    fontSize: 17,
    color: '#22AF79',
    fontWeight: '500',
    fontFamily: 'poppins_regular',
    textAlign: 'center',
    fontWeight: '300',
  },
  cardLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  cardLableText: {
    transform: [{rotate: '-45deg'}],
    fontSize: 14,
    paddingVertical: width / 20,
    fontFamily: 'montserrat_medium',
    color: '#FFF',
    alignSelf: 'center',
  },
  cardCorner: {
    // position:'absolute',
    width: 120,
    height: 50,
    backgroundColor: '#33BDFA',
    marginBottom: -40,
    transform: [{rotate: '-45deg'}],
  },
  calIcon: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
  },
  buttonHomeCard: {
    width: width / 4,
    padding: 10,
    backgroundColor: '#E5DDFF',
    textAlign: 'center',
    borderRadius: 10,
    color: '#4A00AF',
  },

  // bottom sheet
  bottomSheetRoot: {
    paddingHorizontal: width / 16,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateBoxes: {
    width: width / 2 - 40,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F6',
  },
  selectDateLabel: {
    fontSize: 17,
    fontFamily: 'montserrat_regular',
    color: '#A6A6A6',
  },
  selectedDate: {
    fontSize: width / 20,
    color: '#000',
    fontFamily: 'montserrat_medium',
    marginVertical: 10,
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
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width:width-70
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },

  // button 
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
});