import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import HomeHeader from '../../../ui/HomeHeader';
import {DrawerActions} from '@react-navigation/native';
import size from '../../../theme/spacing';
import menu from '../../../assets/_Header/menu.png';
import Logout from '../../../assets/_SocialMedia/logout.png';
import colors from '../../../theme/colors';
import ShowToast from '../../../ui/Toast';
import {removeUser} from '../../../storage';
import spacing from '../../../theme/spacing';
import {ScrollView} from 'react-native-gesture-handler';
import EcomContext from '../../../contextApi/DataProvider';
import rfSpacing from '../../../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export const Profile = ({navigation}: any) => {
  const {UserAuthentic, Data, setUserAuthentic} = useContext(EcomContext);
  const logOut = async () => {
    const resp = await removeUser();
    if (resp) {
      setUserAuthentic(!UserAuthentic);
      ShowToast('success', `See You Soon`);
    }
  };
  return (
    <>
      <HomeHeader
        menuImg={menu}
        title={'My Profile'}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <ScrollView style={styles.Sv}>
        <View style={styles.Card}>
          <View style={styles.dstop}></View>
          <View style={styles.Card1}></View>
          <View style={styles.Card2}></View>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1666170196~exp=1666170796~hmac=f6973f8ef9c1b99c19c00f91ee8ed5fbc67f53d1158fc63a1071914d8fa6758e',
            }}
            style={styles.circleimgs}
          />

          <View>
            <Text style={styles.txtDate}>{Data.name}</Text>
            <View style={styles.pickedDateContainer}>
              <View style={styles.tem1Div}>
                <Text style={styles.txtDate1}>Personal Info</Text>
                <Text style={styles.text2}>1</Text>
              </View>

              <View style={styles.item2Div}>
                <Text style={styles.txtDate1}>Family</Text>
                <Text style={styles.text2}>2</Text>
              </View>
              <View style={styles.item3Div}>
                <Text style={styles.txtDate1}>Vitals</Text>
                <Text style={styles.text2}>3</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Pressable onPress={logOut} style={styles.itemsDiv2}>
            <Image style={styles.image} source={Logout} />
            <Text style={styles.lStyling}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  Sv: {
    flex: 1,
  },
  container: {
    marginTop: rfSpacing.xxl,
    width: 700 / 2,
    alignSelf: 'center',
    borderRadius: rfSpacing.m,

    justifyContent: 'center',
  },
  itemsDiv: {
    height: rfSpacing['1H'],
    backgroundColor: colors.white,
    width: 320,

    marginHorizontal: rfSpacing.m,
    paddingVertical: rfSpacing.m,
    borderRadius: rfSpacing['4xl'],
  },
  itemsDiv2: {
    height: rfSpacing['7xl'],
    justifyContent: 'center',
    backgroundColor: colors.white,
    width: 220,
    alignSelf: 'center',
    marginTop: rfSpacing['l'],
    marginHorizontal: rfSpacing.m,
    paddingVertical: rfSpacing.m,
    borderRadius: rfSpacing['4xl'],

    marginRight: rfSpacing.m,
    flexDirection: 'row',
  },
  image: {
    width: rfSpacing['4xl'],
    height: rfSpacing['4xl'],
    alignSelf: 'center',
  },
  text2: {
    marginTop: rfSpacing.m,
    color: colors.Indigo,
    alignSelf: 'center',
    fontSize: rfSpacing.xl,
    fontWeight: '700',
  },

  tem1Div: {
    height: rfSpacing['6xl'],
    width: '40%',

    marginHorizontal: rfSpacing.ms,
    borderRadius: rfSpacing.m,

    justifyContent: 'space-between',
  },
  item2Div: {
    height: rfSpacing['6xl'],
    width: '30%',
    marginLeft: rfSpacing.m,
    marginHorizontal: rfSpacing.xs,
    borderRadius: rfSpacing.m,
    justifyContent: 'space-between',
  },
  item3Div: {
    height: rfSpacing['6xl'],
    width: '22%',
    marginLeft: rfSpacing['4xl'],
    marginHorizontal: rfSpacing.ms,
    borderRadius: rfSpacing.m,
    justifyContent: 'space-between',
  },

  textStyling: {
    color: colors.Indigo,
    fontWeight: '600',
    fontSize: rfSpacing['3xl'],
  },
  extStyling: {
    color: colors.Indigo,
    fontWeight: '400',
    fontSize: rfSpacing['xl'],
    marginHorizontal: rfSpacing.xxl,
  },
  lStyling: {
    color: colors.Indigo,
    fontWeight: '400',
    alignSelf: 'center',
    fontSize: rfSpacing['xl'],
    marginHorizontal: rfSpacing.xs,
  },
  e1xtStyling: {
    marginTop: rfSpacing.m,
    color: colors.Indigo,
    fontWeight: '400',
    fontSize: spacing['xl'],
    marginHorizontal: rfSpacing.xxl,
  },

  itemDiv: {
    backgroundColor: colors.white,
    width: windowwidth - rfSpacing['3xl'],
    marginTop: rfSpacing['xl'],
    paddingVertical: rfSpacing.xs,
    alignSelf: 'center',

    justifyContent: 'space-between',
    borderRadius: rfSpacing['xl'],
    flexDirection: 'row',
  },

  date: {
    flexDirection: 'row',
    marginVertical: rfSpacing.m,
    marginLeft: spacing['4xl'],
    marginHorizontal: rfSpacing.xxs,
  },
  item1Div: {
    height: rfSpacing['2H'],
    width: '100%',
    marginTop: rfSpacing['7mxl'],
    borderRadius: rfSpacing.m,
    backgroundColor: colors.white,
  },
  pickedDateContainer: {
    flexDirection: 'row',
    marginVertical: rfSpacing.m,
    justifyContent: 'center',
    marginTop: rfSpacing['6xl'],
    marginHorizontal: rfSpacing['5xl'],
  },
  txtDate: {
    marginTop: rfSpacing['4xl'],
    color: colors.Indigo,
    alignSelf: 'center',
    fontSize: rfSpacing.xl,
    fontWeight: '700',
  },
  txtDate1: {
    color: colors.Indigo,
    alignSelf: 'center',
    fontSize: rfSpacing.xl,
    fontWeight: '700',
  },

  flatText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '800',
    alignSelf: 'center',
  },

  Card: {
    width: 320,
    height: 240,

    backgroundColor: colors.white,
    marginTop: rfSpacing['4xl'],
    flexDirection: 'column',
    marginHorizontal: rfSpacing['4xl'],
    borderRadius: rfSpacing['4xl'],
  },
  Card1: {
    position: 'absolute',

    width: 140,
    height: 120,
    backgroundColor: colors.white,
    marginTop: 36,
    borderRadius: rfSpacing['4xl'],
  },
  Card2: {
    position: 'absolute',
    width: 138,
    height: 120,
    backgroundColor: colors.white,
    marginTop: 36,
    marginLeft: 182,
    borderRadius: rfSpacing['4xl'],
  },
  dstop: {
    position: 'absolute',
    margin: 'auto',
    width: 320,
    height: rfSpacing['7xl'],
    backgroundColor: colors.primary,
  },

  circleimgs: {
    width: rfSpacing['1H'],
    height: rfSpacing['1H'],
    borderRadius: rfSpacing['1H'] / 2,
    borderWidth: 1,
    borderColor: colors.grey,
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
});
