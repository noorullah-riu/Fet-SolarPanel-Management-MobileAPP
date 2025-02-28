import React, {useState, useRef} from 'react';
import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import buleBack from '../assets/_Header/background.png';
import * as Animatable from 'react-native-animatable';

import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';

const HeaderCommon = ({
  leftIcon,
  leftCallBack,

  showLeftIcon,

  title,

  isAddOrPdfHeader,
  addOrPdfIcon,
  addOrPdfPress,

  isSearchHeader,
  searchIcon,
  searchPhrase,
  setSearchPhrase,
}: any) => {
  const inputRef = useRef();
  const [Clcked, setClicked] = useState(false);

  return (
    <Animatable.View animation="slideInDown">
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.imgageBack}>
        <View style={styles.parentDiv}>
          {showLeftIcon ? (
            <Pressable onPress={leftCallBack} style={styles.menuIcon}>
              <Image source={leftIcon} style={styles.iconSize} />
            </Pressable>
          ) : (
            <View style={styles.menuIcon2}></View>
          )}

          <Animatable.View style={styles.titleDiv} animation="fadeInUp">
            <Text style={styles.titleTxt}>{title}</Text>
          </Animatable.View>

          {!Clcked ? (
            <Animatable.View animation="fadeInRight">
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                }}>
                {isAddOrPdfHeader ? (
                  <Pressable
                    onPress={() => addOrPdfPress()}
                    style={styles.iconRight}>
                    <Image source={addOrPdfIcon} style={styles.iconSize} />
                  </Pressable>
                ) : (
                  <></>
                )}

                {isSearchHeader ? (
                  <Pressable
                    onPress={() => setClicked(true)}
                    style={styles.iconRight}>
                    <Image source={searchIcon} style={styles.iconSize} />
                  </Pressable>
                ) : (
                  <></>
                )}
              </View>
            </Animatable.View>
          ) : (
            <Animatable.View
              style={styles.inputRightCont}
              animation="fadeInRight"
              duration={500}>
              <TextInput
                style={styles.inputStyle}
                onEndEditing={() => setClicked(false)}
                onChangeText={searchPhrase => setSearchPhrase(searchPhrase)}
                value={searchPhrase}
                ref={inputRef}
                onLayout={() => inputRef.current.focus()}
                placeholder="Search"
                placeholderTextColor={'#aaa'}
              />
            </Animatable.View>
          )}
        </View>

        {/* // <>
          //   <View style={styles.parentDiv}>
          //     <Pressable onPress={leftCallBack} style={styles.menuIcon}>
          //       <Image source={leftIcon} style={styles.iconSize} />
          //     </Pressable>

          //     <View style={styles.titleDiv}>
          //       <Text style={styles.titleTxt}>{title}</Text>
          //     </View>
          //     <Pressable onPress={addPress} style={styles.iconRight}>
          //       <Image
          //         source={addImg}
          //         style={!pdfscreen ? styles.iconSize2 : styles.iconSize1}
          //       />
          //     </Pressable>
          //   </View>
          // </> */}
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    height: rfSpacing['5xl'],
    width: rfSpacing['5xl'],
  },
  iconSize1: {
    height: rfSpacing['3xl'],
    width: rfSpacing['3xl'],
  },
  iconSize2: {
    height: rfSpacing['5xl'],
    width: rfSpacing['5xl'],
  },
  imgageBack: {
    height: rfSpacing['9xl'],
    paddingTop: rfSpacing.xxl,
    backgroundColor: colors.fetGreen,
  },
  parentDiv: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: rfSpacing.xxl,
  },
  menuIcon: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: rfSpacing['4xl'],
    // alignItems: 'flex-end',
  },
  menuIcon2: {
    flex: 1,
    // justifyContent: 'center',
    // marginLeft: rfSpacing.s,
    // alignItems: 'flex-end',
  },
  titleDiv: {
    flex: 6,
    justifyContent: 'center',
    // marginLeft: rfSpacing.s,
  },
  titleTxt: {
    color: colors.white,
    fontWeight: '700',
    fontSize: rfSpacing.xxl,
  },
  iconRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: rfSpacing['4xl'],
  },
  inputStyle: {
    color: '#aaa',
    flex: 1,
    fontSize: rfSpacing.xl,
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    marginVertical: rfSpacing.ms,
    paddingLeft: rfSpacing.m,
  },
  inputRightCont: {
    flex: 4,
    marginVertical: rfSpacing.m,
    marginRight: rfSpacing['4xl'],
  },
});
export default HeaderCommon;
