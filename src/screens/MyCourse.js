import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import RBSheet from 'react-native-raw-bottom-sheet';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import {MultiSelect} from 'react-native-element-dropdown';

// icons import
const searchIcon = require('../res/icon_feather_search.png');
const filterIcon = require('../res/filter.png');
const daizy = require('../res/daizy.png');

const closePng = require('../res/close.png');

// icons import end

const {width, height} = Dimensions.get('window');

export default function MyCourse() {
  // for filter
  const [filter, setFilter] = useState(false);
  const [isPrivateSelected, setIsPrivateSelected] = useState(true);
  const [upcoming, setUpcoming] = useState(true);
  // for filter
  const refRBSheet = useRef();

  // filter dates
  const [fromDate, setFromDate] = useState('Select Date');
  const [toDate, setToDate] = useState('Select Date');

  //  filter datepicker
  const [fromDPView, setFromDPView] = useState(false);
  const [toDPView, setToDPView] = useState(false);
  const [minDate, setMinDate] = useState();

  // filter dropdown
  const [selected, setSelected] = useState([]);

  const openFromDatePicker = () => {
    setFromDPView(true);
  };

  const openToDatePicker = () => {
    setToDPView(true);
  };
  // languages
  const data = [
    {label: 'English', value: 'English'},
    {label: 'Hindi', value: 'Hindi'},
    {label: 'Spenish', value: 'Spenish'},
    {label: 'Gujarati', value: 'Gujarati'},
    {label: 'Economics', value: 'Economics'},
  ];

  const upcomingCardData = [
    {
      img: daizy,
      price: 'Fix Price',
      subject: 'Basic Miracle',
      name: 'John Doe',
      dateNtime: '06th Aug 2021,01:00 PM - 02:30 PM',
      status: 'Approved',
    },
    {
      img: daizy,
      price: 'Fix Price',
      subject: 'Basic Miracle',
      name: 'John Doe',
      dateNtime: '06th Aug 2021,01:00 PM - 02:30 PM',
      status: 'Pending',
    },
    {
      img: daizy,
      price: 'Fix Price',
      subject: 'Basic Miracle',
      name: 'John Doe',
      dateNtime: '06th Aug 2021,01:00 PM - 02:30 PM',
      status: 'Pending',
    },
    {
      img: daizy,
      price: 'Fix Price',
      subject: 'Basic Miracle',
      name: 'John Doe',
      dateNtime: '06th Aug 2021,01:00 PM - 02:30 PM',
      status: 'Approved',
    },
  ];

  const pastCardData = [
    {
      img: daizy,
      price: 'Dontaion',
      subject: 'Basic Miracle',
      name: 'Johnathan Doe',
      dateNtime: '06th Aug 2021,01:00 PM - 02:30 PM',
      status: 'Pending',
    },
  ];

  const CourseCard = props => {
    return (
      <View
        style={{
          height: width / 2.5,
          elevation: 3,
          backgroundColor: '#fff',
          borderRadius: width / 3 / 10,
          flexDirection: 'row',
          padding: 20,
          marginVertical: 10,
          // justifyContent:'center',
        }}>
        <Image
          source={props.img}
          style={{
            width: width / 3,
            height: width / 3,
            borderRadius: 10,
            aspectRatio: 2 / 2,
          }}
          resizeMode="cover"
        />
        <View style={{justifyContent: 'space-between', marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'montserrat_semi_bold',
              color: '#934EF2',
            }}>
            {props.price}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'montserrat_semi_bold',
              color: '#000000',
            }}>
            {props.subject}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'montserrat_medium',
              color: '#7A7A7A',
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'montserrat_medium',
              color: '#4C4C4C',
              fontStyle: 'italic',
            }}>
            {props.dateNtime}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'montserrat_medium',
              color: props.status === 'Approved' ? '#84C290' : '#E7930E',
            }}>
            {props.status}
          </Text>
        </View>
      </View>
    );
  };

  return (
    // <ScrollView style={{backgroundColor: '#fff'}}>
    <View style={styles.rootStyle}>
      {/* Nav */}
      <View style={styles.navStyle}>
        {isPrivateSelected ? (
          <Text style={styles.navText}>MY COURSES</Text>
        ) : (
          <Text style={styles.navText}>PRIVATE COURSES</Text>
        )}

        <View style={styles.navLogoSection}>
          {isPrivateSelected ? (
            <Pressable onPress={() => setIsPrivateSelected(false)}>
              <Text style={styles.navLogos}>PRIVATE</Text>
            </Pressable>
          ) : (
            <Pressable onPress={() => setIsPrivateSelected(true)}>
              <Text style={styles.navLogos}>PUBLIC</Text>
            </Pressable>
          )}
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
          {filter ? (
            <Image source={filterIcon} style={styles.searchIcons} />
          ) : (
            <Image source={filterIcon} style={styles.searchIcons} />
          )}
        </Pressable>
      </View>

      {/* Upcoming and past buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <Pressable onPress={() => setUpcoming(true)}>
          <Text
            style={upcoming ? styles.selectedButton : styles.unSelectedButton}>
            UPCOMNIG
          </Text>
        </Pressable>
        <Pressable onPress={() => setUpcoming(false)}>
          <Text
            style={upcoming ? styles.unSelectedButton : styles.selectedButton}>
            PAST
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={upcoming ? upcomingCardData : pastCardData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <CourseCard
              img={item.img}
              price={item.price}
              subject={item.subject}
              name={item.name}
              dateNtime={item.dateNtime}
              status={item.status}
            />
          );
        }}
      />

      {/* filter */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={height / 2}
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
          <Text
            style={{
              ...styles.selectedDate,
              fontFamily: 'montserrat_light',
              color: '#9856F3',
              fontSize: 17,
            }}>
            Choose Date range of course
          </Text>

          {/* select language */}
          <View style={{marginVertical: 20}}>
            <Text style={styles.selectDateLabel}>Choose language</Text>
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
              refRBSheet.current.close();
              setFilter(true);
            }}>
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
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },

  // navbar
  navStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navLogos: {
    width: 80,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    color: '#000',
    fontFamily: 'montserrat_semi_bold',
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
    height: width / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: width / 25,
  },
  searchIcons: {
    width: width / 12,
    height: width / 12,
    marginHorizontal: -12,
  },
  searchTextInput: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'poppins_regular',
    marginTop: 5,
    marginLeft: 10,
  },

  // top bar
  unSelectedButton: {
    width: width / 2 - 30,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    padding: 10,
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
    padding: 10,
    borderRadius: width / 2 / 5,
    fontSize: 15,
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'montserrat_semi_bold',
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
    fontSize: 20,
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
    width: width - 70,
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
