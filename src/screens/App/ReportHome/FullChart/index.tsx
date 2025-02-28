import React, { useState, useContext, useEffect, useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';

//import aboutpic from '../../../assets/_Drawer/aboutpic.jpg';
import HeaderCommon from '../../../../ui/HeaderCommon';
import colors from '../../../../theme/colors';
import sp from '../../../../assets/_Drawer/fet2.png';
import { WebView } from 'react-native-webview';
import { WSImages } from '../../../../ui/Images';
//import {Socialhandler} from './Socialhandler';
import rfSpacing from '../../../../theme/rfSpacing';


export const FullLineChart = ({ navigation }: any) => {


  const INJECTED_JAVASCRIPT = `(function() {
  const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
})();`;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageWraper}>
        <Pressable
          onPress={() => navigation.goBack()}
        >
          <Image source={WSImages.arrowB} style={{
            height: rfSpacing['4xl'],
            width: rfSpacing['4xl'],
          }} />
        </Pressable>
      </View>
      <WebView
        // originWhitelist={['*']}
        // //     source={{ html: chartHtml }}
        // scalesPageToFit={false}  // iOS
        // //    style={{ flex: 1 }}
        //   javaScriptEnabled={true}
        // domStorageEnabled={true} 
        // injectedJavaScript={`
        //     document.addEventListener('gesturestart', function(e) {
        //       e.preventDefault();
        //     });
        //   `}
        // setBuiltInZoomControls={false}
        //   scalesPageToFit={false}
        // injectedJavaScript={INJECTED_JAVASCRIPT}
        // scrollEnabled={false}
        // onMessage={() => {}}



        originWhitelist={['*']}
        // scalesPageToFit={false}  // iOS
        style={{ flex: 1 }}
        //    javaScriptEnabled={true}
        //   domStorageEnabled={true}
        // injectedJavaScript={`
        //   document.addEventListener('gesturestart', function(e) {
        //     e.preventDefault();
        //   });
        // `}
        source={{ uri: 'http://202.163.113.107:8080/charts/' }}
      //    injectedJavaScript={INJECTED_JAVASCRIPT}
      //  overScrollMode="content"
      //    style={{ flex: 1 }} 
      />
    </View>

    // <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
    //   {/* <HeaderCommon
    //     //    leftIcon={menu}
    //     //  leftCallBack={() => Alert.alert('Add Pressed')}
    //     showLeftIcon={false}
    //     title={'About Us'}
    //     isAddOrPdfHeader={false}
    //     //    addOrPdfIcon={add}
    //     //     addOrPdfPress={() => Alert.alert('Add Pressed')}
    //     isSearchHeader={false}
    //     // searchIcon={search}
    //     // searchPhrase={SearchPhrase}
    //     // setSearchPhrase={setSearchPhrase}
    //   /> */}


    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: rfSpacing['3H'],
    height: rfSpacing['2H'],
    alignSelf: 'center',
    //   marginTop: rfSpacing['4xl'],
    //   borderRadius: rfSpacing.m,
  },
  imageWraper: {
    marginHorizontal: rfSpacing.l,
    marginTop: rfSpacing.l,
    backgroundColor: colors.fetWhite,
    padding: rfSpacing.xxl,
    flexDirection: 'row',
  },
  textHeadDiv: {
    marginTop: rfSpacing.m,
  },
  textDiv: {
    //  bordrWidth: rfSpacing.m,
    marginVertical: rfSpacing.m,
  },
  txtStyle: {
    color: colors.grey,
    fontSize: rfSpacing.l,
    marginHorizontal: rfSpacing.xxl,
    marginVertical: rfSpacing.xs,
  },
  headStyle: {
    color: colors.fetGreen,
    fontSize: rfSpacing['3xl'],
    fontWeight: '700',
    marginHorizontal: rfSpacing.xxl,
  },
});
