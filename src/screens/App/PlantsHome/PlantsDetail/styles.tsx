import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
const windowwidth = Dimensions.get('window').width;
export default StyleSheet.create({
plantName:{
  color: colors.fetGreen,
  fontSize: rfSpacing.xl,
},

uperWrap:{
  width: windowwidth - rfSpacing['6xl'],
  marginBottom: rfSpacing['4xl'],
  paddingTop: rfSpacing.xl,
  alignSelf: 'center',
},
topIconWrap:{
  alignSelf: 'center',
  marginBottom: -rfSpacing.xxl,
},
leftIconWrap:{
  alignSelf: 'center',
  flex: 1,
  marginRight: -rfSpacing.xxl,
},
rightIconWrap:{
  alignSelf: 'center',
  flex: 1,
  marginLeft: -rfSpacing['4xl'],
},
bottomIconWrap:{
  alignSelf: 'center',
  flex: 1,
  marginTop: -rfSpacing['4xl'],
},
leftIcon3Wrap:{
  alignSelf: 'flex-end',
  flex: 1,
  marginBottom: -rfSpacing['4xl'],
  marginRight: -rfSpacing.xxl,
},
rightIcon3Wrap:{
  alignSelf: 'flex-end',
  flex: 1,
  marginBottom: -rfSpacing['4xl'],
  marginLeft: -rfSpacing['4xl'],
},
center:{
  alignItems: 'center',
},
realValue:{
  color: colors.fetBlack, fontSize: rfSpacing.xl
},
realUnit:{
  color: colors.fetBlack, fontSize: rfSpacing.m
},
icon3DSize:{
  height: rfSpacing['10xl'],
  width: rfSpacing['10xl'],
},
imageWrap:{
  alignItems: 'center',
  justifyContent: 'flex-end',
},
animationWrap:{
  flex: 2,
  height: rfSpacing['2H'],
  alignItems: 'center',
  justifyContent: 'center',
},
animationSize:{
  width: '100%', height: '100%'
},



  longDivWrap: {
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    paddingVertical: rfSpacing.xxl,
    borderRadius: rfSpacing.s,
    paddingTop: rfSpacing.s,
    marginTop: rfSpacing.xl,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  elemntTopWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementinnerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  longDivValue: {
    color: colors.fetBlack,
    fontWeight: 'bold',
    fontSize: rfSpacing.l,
  },
  longDivUnit: {
    color: colors.fetBlack,
    fontSize: rfSpacing.m,
    paddingLeft: rfSpacing.xs,
  },

  longDivTitle: {
    color: colors.fetBlack,
    fontSize: rfSpacing.m,
  },
  smallRowWrap: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: windowwidth - rfSpacing['6xl'],
  },

  smallRowInerWrap: {
    selfAlign: 'center',
    paddingVertical: rfSpacing.xxl,
    borderRadius: rfSpacing.s,
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  smallRowIconWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  smallRowIcon: {
    height: rfSpacing['4xl'],
    width: rfSpacing['4xl'],
  },
  smallRowTextWrap: {
    justifyContent: 'center',
    flex: 3,
  },
  row: {
    flexDirection: 'row',
  },
  f1: {
    flex: 1,
  },
  f1l: {
    flex: 1,
    paddingBottom:rfSpacing['7xl']
  },
  f2: {
    flex: 2,
  },
  smallRowValue: {
    color: colors.fetBlack,
    fontWeight: 'bold',
    fontSize: rfSpacing.l,
  },
  smallRowUnit: {
    color: colors.fetBlack,
    fontSize: rfSpacing.m,
    paddingLeft: rfSpacing.xs,
  },
  smallRowTitle: {
    color: colors.fetBlack,
    fontSize: rfSpacing.l,
  },
  fcustom: {
    flex: 0.1,
  },
});
