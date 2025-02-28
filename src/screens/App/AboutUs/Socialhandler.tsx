import React, {useState, useContext, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Pressable,
  Alert,
  Linking,
  Platform,
} from 'react-native';

import instagram from '../../../assets/_SocialMedia/instagram.png';
import mail from '../../../assets/_SocialMedia/mail.png';
import twitter from '../../../assets/_SocialMedia/twitter.png';
import watsapp from '../../../assets/_SocialMedia/whatsapp.png';

import EcomContext from '../../../contextApi/DataProvider';
import {useTask} from '../../../networking/UseTask';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import rfSpacing from '../../../theme/rfSpacing';

export const Socialhandler = ({navigation}: any) => {

  const sendWhatsApp = () => {
    let msg = 'Hello';
    let phoneWithCountryCode = '923416096201';

    let mobile =
      Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            Alert('Make sure WhatsApp installed on your device');
          });
      }
    }
  };

  const instagrams = () => {
    Linking.openURL('https://www.instagram.com/786ahmedhassan/')
      .then(_data => {
        console.log('Instagram Opened');
      })
      .catch(() => {
        Alert('Make sure Instagram installed on your device');
      });
  };

  const twiter = () => {
    Linking.openURL('twitter://user?screen_name=SarfarazA_54')
      .catch(() => {
        Linking.openURL('https://www.twitter.com/SarfarazA_54');
      })
      .then(_data => {
        console.log('Twitter Opened');
      })
      .catch(() => {
        Alert('Make sure Twitter installed on your device');
      });
  };
  const emails = () => {
    Linking.openURL('mailto:harif7663@gmail.com?subject=CustomerSupport')
      .then(_data => {
        console.log('Twitter Opened');
      })
      .catch(() => {
        Alert('Make sure Twitter installed on your device');
      });
  };

  // useEffect(() => {
  //   if (data?.Data?.length > 0) {
  //     console.log('Customers List', data.Data);
  //     setCustomers(data.Data);
  //   }
  // }, [data, isLoading, isSuccess, error]);

  // if (isLoading) return <Loader />;

  // if (error) return <Error404 />;

  return (
    <>
      <View style={styles.Container}>
        <Pressable onPress={instagrams} style={styles.Div}>
          <Image
            resizeMode="contain"
            style={styles.iconStyle}
            source={instagram}
          />
        </Pressable>

        <Pressable onPress={twiter} style={styles.Div}>
          <Image
            resizeMode="contain"
            style={styles.iconStyle}
            source={twitter}
          />
        </Pressable>
        <Pressable onPress={emails} style={styles.Div}>
          <Image resizeMode="contain" style={styles.iconStyle} source={mail} />
        </Pressable>
        <Pressable onPress={sendWhatsApp} style={styles.Div}>
          <Image
            resizeMode="contain"
            style={styles.iconStyle}
            source={watsapp}
          />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rfSpacing.m,
  },

  Div: {
    marginHorizontal: rfSpacing['4xl'],
    borderRadius: rfSpacing.m,
    marginVertical: rfSpacing.m,
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: rfSpacing['7xl'],
    height: rfSpacing['7xl'],
  },
});
