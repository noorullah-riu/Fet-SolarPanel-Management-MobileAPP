import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
const windowwidth = Dimensions.get('window').width;
export default StyleSheet.create({
  pDiv: {
    marginTop: rfSpacing['xxl'],
    paddingVertical: rfSpacing.m,
  //  paddingHorizontal:20,
    width: windowwidth - rfSpacing['4xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing.m,
    alignSelf: 'center',
  },

  LCBtnTextWrap: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: rfSpacing.xs,
  },
  LCBtnText: {
    color: colors.fetGray,
    fontSize: rfSpacing.l,
  },
  LCLabelTxtWrap: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    //  backgroundColor: colors.white,
  },
  LCPointerTextGray: {
    color: colors.fetGray,
    fontSize: rfSpacing.m,
    marginBottom: 6,
    textAlign: 'center',
  },
  LCPointerTextYellow: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: rfSpacing.m,
    color: colors.fet3,
  },

  LCPointerTextGreen: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: rfSpacing.m,
    color: colors.fet2,
  },
  LCPointerTextBlue: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: rfSpacing.m,
    color: colors.fetBlue,
  },
  LCPointerTextRed: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: rfSpacing.m,
   // color: colors.fet1,

    color: 'red', opacity: 1 

  },
  CCTextY: {
    color: colors.fetGray,
    paddingLeft: rfSpacing.l,
    fontSize: rfSpacing.xl,
    fontWeight: 'bold',
    paddingTop: rfSpacing.xs,
  },
  CCTextD: {
    color: colors.fetLoad,
    //  paddingLeft: rfSpacing.l,
    fontSize: rfSpacing.l,
    fontWeight: 'bold',
    paddingTop: rfSpacing.xs,
  },
  timeDiv: {
    marginTop: rfSpacing.s,
    paddingVertical: rfSpacing.m,
    paddingHorizontal: rfSpacing.m,
    width: windowwidth - rfSpacing['4xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing.xs,
    alignSelf: 'center',
  },
LCHeader:{
  color: colors.fetBlack,
  paddingLeft: rfSpacing.l,
  fontSize: rfSpacing.xl,
  fontWeight: 'bold',
},
LCWraper:{
  alignItems: 'center',
  justifyContent: 'center',
  padding: rfSpacing.xxl,
},
LCPGRay:{
  color: colors.fetGray,
  fontSize:rfSpacing.m,
  marginBottom: 6,
  textAlign: 'center',

},
LCBtnWraper:{
  paddingHorizontal: 14,
  paddingVertical: 6,
  backgroundColor: colors.white,
},
LCPGreen:{
  fontWeight: 'bold',
  textAlign: 'center',
  color: colors.fet2,
  fontSize:rfSpacing.m,
},
LCPYellow:{
  fontWeight: 'bold',
  textAlign: 'center',
  color: colors.fet3,
  fontSize:rfSpacing.m,
},
LCPBlue:{
  fontWeight: 'bold',
  textAlign: 'center',
  color: colors.fetBlue,
  fontSize:rfSpacing.m,
},
LCPRed:{
  fontWeight: 'bold',
  textAlign: 'center',
  color: colors.fet1,
  fontSize:rfSpacing.m,
},
  inActiveDiv: {
    flex: 1,
    borderRadius: rfSpacing.xs,
    alignItems: 'center',
    backgroundColor: colors.fetInActive,
  },
  activeDiv: {
    flex: 1,
    borderRadius: rfSpacing.xs,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: colors.fetBlueO,
    backgroundColor: colors.fetActive,
  },
  leftTxt: {
    paddingLeft: rfSpacing.l,
    color: colors.fetGray,
    fontSize: rfSpacing.l,
  },

  rightTxt: {
    color: colors.fetBlack,
    fontSize: rfSpacing.l,
    textAlign: 'right',
    paddingRight: rfSpacing.l,
  },

  row: {
    flexDirection: 'row',
    paddingHorizontal: rfSpacing['4xl'],
    paddingTop: rfSpacing.xs,
  },

  f2: {
    flex: 2,
  },
  fhalf: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  f3: {
    flex: 3,
  },
  f3C: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f3E: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  f4: {
    flex: 4,
  },
  splanText: {
    fontWeight: 'bold',
    color: colors.fetGreen,
    fontSize: rfSpacing.m,
  },
  splanText2: {
    fontWeight: 'bold',
    color: colors.fetGreen,
    fontSize: rfSpacing.xl,
    paddingLeft: rfSpacing.l,
    paddingVertical: rfSpacing.xl,
  },


  TitleText: {
    color: colors.fetGray,
    fontSize: rfSpacing.m,
  },
  ValueText: {
    color: colors.fetBlack,
    fontSize: rfSpacing.m,
  },
  ValueTextM: {
    color: colors.fetBlack,
    fontSize: rfSpacing.m,
  },
  ValueTextAll: {
    color: colors.fetBlack,
    fontSize: rfSpacing.m,
    textAlign: 'right',
  },
  column: {
    flex: 4,
    alignItems: 'flex-end',
    //  paddingRight: rfSpacing['xxl'],
  },
  priorityText: {
    color: colors.fetBlack,
    fontWeight: '500',
    fontSize: rfSpacing.l,
  },

  pDivAll: {
    marginTop: rfSpacing.xs,
    marginBottom: rfSpacing.l,
    paddingVertical: rfSpacing.l,
    width: windowwidth - rfSpacing['8xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    alignSelf: 'center',
    marginHorizontal: rfSpacing.xl,
    flex: 1,
    flexDirection: 'row',
  },
  TotalText: {
    color: colors.fetGray,
    fontWeight: '400',
    fontSize: rfSpacing.xl,
  },
  ItemText: {
    color: colors.Rajah,
    fontWeight: '400',
    fontSize: rfSpacing.l,
  },

  companyText: {
    fontWeight: '500',
    color: colors.fetBlack,
    fontSize: rfSpacing.l,
  },
  timeText: {
    fontSize: rfSpacing.l,
    color: colors.meeting_Time,
  },
  rowStart: {
    flexDirection: 'row',
    marginTop: rfSpacing.l,
  },
  container: {
    padding: rfSpacing.m,
    alignItems: 'center',
  },
  itemDiv: {
    marginTop: rfSpacing.m,
    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing.m,
    alignSelf: 'center',
  },
  cName: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: rfSpacing.xl,
    textAlign: 'center',
  },
  cnameDiv1: {
    flexDirection: 'row',
    paddingHorizontal: rfSpacing.xl,
  },
  f1: {
    flex: 1,
  },
  indicatorText: {
    color: colors.fetBlack,
    fontSize: rfSpacing.s,
    fontWeight: 'bold',
  },
  indicatorS: {
    backgroundColor: colors.fetGreen,
    marginHorizontal: rfSpacing.s,
  },
  indS: {
    backgroundColor: colors.fetWhite,
    marginHorizontal: rfSpacing.s,
    borderRadius: rfSpacing.s,
    margin: rfSpacing.s,
  },
  verticalTitle: {
    fontWeight: 'bold',
    color: colors.fetYellow,
    fontSize: rfSpacing.xl,
    marginLeft: rfSpacing.xxl,
    marginVertical: rfSpacing.s,
  },
  f6: {
    flex: 6,
  },
  space: {
    flexDirection: 'row',
    marginTop: 10,
  },
  headerTitle: {
    fontSize: rfSpacing.l,
    marginLeft: rfSpacing.s,
    color: colors.fetGreen,
    fontWeight: 'bold',
  },
  headerTitle2: {
    fontSize: rfSpacing.m,
    marginLeft: rfSpacing.s,
    color: colors.fetBlack,
    fontWeight: 'bold',
  },
  headerView: {
    flexDirection: 'row',
    padding: rfSpacing.m,
  },
  ff1: {
    flex: 1,
    borderBottomColor: colors.meeting,
    borderBottomWidth: 0.5,
    paddingVertical: 2,
  },
  cName1: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: rfSpacing.xl,
  },
  fRow: {
    flexDirection: 'row',
  },
  iconSize: {
    height: rfSpacing.xl,
    width: rfSpacing.xl,
  },

  active: {
    backgroundColor: colors.fetWhite,
    width: windowwidth - rfSpacing['4xl'],
    alignSelf: 'center',
  },
  inactive: {
    backgroundColor: colors.fetWhite,
    width: windowwidth - rfSpacing['4xl'],
    alignSelf: 'center',
    marginTop: rfSpacing.s,
    marginBottom: rfSpacing.m,
  },
  expandableText: {
    fontSize: rfSpacing.m,
    color: colors.fetBlack,
    marginBottom: rfSpacing.xs,
    paddingLeft: rfSpacing['5xl'],
  },
  expandableTextV: {
    fontSize: rfSpacing.m,
    fontWeight: 'bold',
    color: colors.fetBlack,
    marginBottom: rfSpacing.xs,
  },
  end2: {alignItems: 'flex-end', flex: 2},
  dateText: {color: colors.fetBlack, fontSize: rfSpacing.l, fontWeight: 'bold'},
  dateIcon: {flex: 1.5, justifyContent: 'center', paddingLeft: rfSpacing.xs},
  dateIconSize: {
    height: rfSpacing.xl,
    width: rfSpacing.xl,
  },
  s12: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    marginTop: rfSpacing.xs,
    color: colors.grey,
  },
  yellowTxt: {
    fontSize: rfSpacing.l,
    color: colors.Rajah,
    fontWeight: '700',
    marginTop: rfSpacing.xs,
    textAlign: 'right',
    marginRight: rfSpacing['xl'],
  },
  s13: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    color: colors.grey,

    marginTop: rfSpacing['3xxs'],
  },
  s11: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    color: colors.grey,
    marginTop: rfSpacing['3xxs'],
    marginBottom: rfSpacing.ms,
  },
  s15: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    fontWeight: '500',
    color: colors.Indigo,
  },
  txtDate: {
    marginTop: rfSpacing.xl,
    color: colors.white,
    alignSelf: 'center',
  },
  item1Div: {
    marginTop: rfSpacing['4xl'],
    width: rfSpacing['2H'],
    height: rfSpacing['7xl'],
    borderRadius: rfSpacing.m,
    backgroundColor: colors.Indigo,
  },

  cnameDiv: {
    flexDirection: 'row',
    marginTop: rfSpacing.m,
    marginBottom: rfSpacing.m,
    paddingVertical: rfSpacing.m,
    backgroundColor: colors.white,
    marginHorizontal: rfSpacing['8xl'],
  },

  boldText: {
    fontSize: rfSpacing['4xxm'],
    color: 'red',
    marginVertical: rfSpacing.xxl,
  },

  yellowTxt1: {
    fontSize: rfSpacing.l,
    color: colors.meeting,
    fontWeight: '700',
    marginTop: rfSpacing.xs,
    textAlign: 'right',
    marginRight: rfSpacing['xl'],
  },
  GreyTxt: {
    fontSize: rfSpacing.m,
    color: colors.grey,
    fontWeight: '700',
    marginTop: rfSpacing.xs,
    textAlign: 'right',
    marginRight: rfSpacing['xl'],
  },
});
