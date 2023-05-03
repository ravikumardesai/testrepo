import {View, Text, Pressable, Image, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {HEADING_NAV, STYLES, width, height} from '../styles/GenStyle';
import {ScrollView} from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';

const Donation = ({navigation}) => {
    const [donationDescription, setDonationDescription] = useState(
        `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam minus suscipit repellendus dolorum optio iure debitis itaque eum possimus! Possimus libero numquam quam deserunt maxime repellat quisquam omnis. Voluptate Natus eligendi harum obcaecati aliquam adipisci dicta odit maxime tenetur fuga quas mollitia nesciunt ab dolore aliquid, voluptatum eveniet non? Quasi necessitatibus vitae animi, repellat consectetur officia ullam temporibus fugiat. Id perspiciatis, sint repudiandae facilis optio culpa aut dolore a quo distinctio aliquam voluptatibus facere ad beatae ullam libero maxime delectus. Itaque, atque omnis. Rem accusantium mollitia dolores aspernatur voluptatem! Provident dignissimos enim sequi delectus perferendis cumque natus illo. Recusandae voluptatem natus, modi corporis illum exercitationem repellendus numquam adipisci nostrum. Eius deleniti voluptate magni perspiciatis, porro labore dignissimos modi quod! Reprehenderit molis cumque natus illo. Recusandae voluptatem natus, modi corporis illum exercitationem repellendus numquam adipisci nostrum. Eius deleniti voluptate magni perspiciatis, porro labore dignissimos modi quod! Reprehenderit molestias nemo, omnis repellat reiciendis minima nam repellendus dignissimos. Eum minima voluptatem, sunt officiis sit necessitatibus tenetur labore, quis doloribus corporis animi aut voluptate explicabo sint numquam, unde perspiciatis.`,
    );

    const [showMore, setShowMore] = useState(false);
    const [paymentLink,setPaymentLink] = useState("Joanna.jha/paypalpayment");


  return (
    <View style={{height: height + 120, padding: 20, backgroundColor: '#fff'}}>
      {/* nav */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../res/aerrow.png')}
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
            DONATION
          </Text>
        </View>
      </View>

      <View>
        <ScrollView>
          <Text
            style={{
              fontSize: 17,
              marginTop: 20,
              textAlign: 'justify',
              fontFamily: 'montserrat_medium',
              color: '#000',
            }}>
            {showMore
              ? donationDescription
              : donationDescription.slice(0, 750) + '...'}

            <Text
              style={{fontWeight: 'bold'}}
              onPress={() => setShowMore(!showMore)}>
              {showMore ? 'Less' : 'More'}
            </Text>
          </Text>
        </ScrollView>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'montserrat_regular',
            color: '#8E8E8E',
            textAlign: 'center',
            marginTop:width/5
          }}>
          PayPal Link
        </Text>

        <View style={{flexDirection:'row',justifyContent:'space-evenly', alignItems:'flex-start',marginTop:10}}>
            <Text
                style={{
                    fontSize: 25,
                    fontFamily: 'montserrat_regular',
                    color: '#1871FF',
                    textAlign: 'center',
                    marginTop:5
                }}>
            {paymentLink}
            </Text>
            <Pressable
                onPress={()=> {
                    Clipboard.setString(paymentLink)
                    ToastAndroid.showWithGravityAndOffset(
                        'Copied To clipboard',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        50,
                      );
                }}
                >
                <Image
                    style={{width:40,height:40}}
                    resizeMode='stretch'
                    source={require("../res/copy.png")}
                />
            </Pressable>
        </View>

          
      </View>
    </View>
  );
};

export default Donation;
