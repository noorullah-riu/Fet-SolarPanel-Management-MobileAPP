import {StyleSheet, Platform} from 'react-native';
import {Dimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import spacing from '../../../theme/spacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
   // justifyContent: 'center',
   // paddingTop: Platform.OS === 'ios' ? 90 : 0,
   // alignItems:"center",
  },
  logoDiv: {
    //backgroundColor: colors.white,
    height: spacing['1H'],
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgView: {
    //flexDirection: 'column',
    alignItems:"center",
    justifyContent: 'center',
  },
  ImageStyleLogo: {
    height:  spacing['1H'],
    width:  spacing['3H'],
  },

  logoText: {
    color: colors.Danube,
    marginLeft: spacing['4xl'],
    fontSize: spacing['4xxsl'],
    fontWeight: 'bold',
  },
  imageStyle: {
    height: windowwidth,
    width: windowwidth,
  },
  tagLine: {
    color: colors.Indigo,
    fontSize: spacing.s,
    marginLeft: spacing['4xl'],
    fontWeight: '500',
    textAlign: 'center',
  },
  taglineDiv: {
    //  height: spacing['6xl'],
    justifyContent: 'center',
  },

  singinTxt: {
    color: colors.fetGreen,
    fontSize: spacing['4xl'],
    fontWeight: 'bold',
    marginLeft: spacing['4xl'],
  },
  choseBtnDiv: {
    height: spacing['6xl'],
    width: windowwidth,
    flexDirection: 'row',
  },
  f1Center: {
    flex: 1,
    alignItems: 'center',
  },
  choseTxtAct: {
    fontSize: spacing.l,
    fontWeight: 'bold',
    color: colors.white,
  },
  choseTxtInAct: {
    fontSize: spacing.l,
    fontWeight: 'bold',
    color: colors.font_grey,
  },
  choseBtnAct: {
    backgroundColor: colors.fetGreen,
    width: windowwidth / 2.2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing.m,
  },
  choseBtnInact: {
    backgroundColor: colors.white,
    width: windowwidth / 2.2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing.m,
  },

  usernameText: {
    color: colors.heading_black,
    fontSize: spacing.xl,
    fontWeight: '500',
    marginLeft: spacing['4xl'],
  },
  inputEmail: {
    height: spacing['6xl'],
    marginLeft: spacing['4xl'],
    marginRight: spacing['4xl'],
    justifyContent: 'center',
  },
  passwordText: {
    color: colors.heading_black,
    fontSize: spacing.xl,
    fontWeight: '500',
    marginLeft: spacing['4xl'],
  },
  inputPassword: {
    flexDirection: 'row',
    height: spacing['6xl'],
    marginLeft: spacing['4xl'],
    marginRight: spacing['4xl'],
    justifyContent: 'center',
  },
  eyeDiv: {
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: colors.font_grey,
    borderBottomWidth: spacing['3xxs'],
  },
  forgotPassDiv: {
    height: spacing['5xl'],
    justifyContent: 'center',
    marginBottom: spacing.m,
  },
  forgotPassTxt: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: spacing['4xl'],
    color: colors.tomato,
    fontSize: spacing.l,
  },
  lognDiv: {
    height: spacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  lognDivPlayer: {
    height: spacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10,
  },
  h20: {
    height: spacing['4xl'],
  },
  signupTxt: {
    textAlign: 'right',
    fontSize: spacing.l,
    color: colors.font_grey,
  },
  signupTxtEnd: {
    fontWeight: 'bold',
    fontSize: spacing.l,
    color: colors.fetGreen,
  },
  h50f2: {
    height: spacing['7xl'],
    flex: 2,
  },
  h50f1: {
    height: spacing['7xl'],
    flex: 1,
  },
  h80: {
    height: spacing['9xl'],
  },
  h60: {
    marginTop: spacing['7xl'],
    height: spacing['7xl'],
  },
  h70: {
    marginTop: spacing['4xl'],
    flex: 1,
  },
  h20w20: {
    height: spacing['3xl'],
    width: spacing['3xl'],
  },
  inputStyle: {
    color: colors.activity_Date,
    fontSize: spacing.xl,

    borderBottomColor: colors.font_grey,
    borderBottomWidth: spacing['3xxs'],
  },
  f9: {
    flex: 9,
  },
  errorPass: {
    fontSize: spacing.m,
    color: colors.tomato,
    marginLeft: spacing['4xl'],
    marginTop: spacing.m,
  },
  errorEmail: {
    fontSize: spacing.m,
    color: colors.tomato,
    marginLeft: spacing['4xl'],
  },
});
