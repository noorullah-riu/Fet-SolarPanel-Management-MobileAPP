import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../../theme/colors';
import theme from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export default StyleSheet.create({
  containerStyling: {
    flex: 1,
    backgroundColor: colors.containerStyling,
    paddingTop: rfSpacing.m,
    marginBottom: rfSpacing.m,
  },
  statsDiv: {
    height: rfSpacing['4H'],
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    paddingTop: rfSpacing['4xl'],
    alignSelf: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  activeDiv: {
    flex: 1,
    borderRadius: rfSpacing.xs,
    borderWidth: 1,
    alignItems: 'center',

    borderColor: colors.fetBlueO,
    backgroundColor: colors.fetActive,
  },

  activeDiv2: {
    flex: 0.5,
    borderRadius: rfSpacing.xs,
    borderWidth: 1,
    alignItems: 'center',

    borderColor: colors.fetBlueO,
    // backgroundColor: colors.fetActive,
  },
  activenull: {},

  inActiveDiv: {
    flex: 1,
    borderRadius: rfSpacing.xs,
    alignItems: 'center',
    backgroundColor: colors.fetInActive,
  },
  inActiveDiv2: {
    flex: 0.5,
    // borderRadius:rfSpacing.xs,
    alignItems: 'center',
  },
  imageWraper: {
  //  marginHorizontal: rfSpacing.l,
   // marginTop: rfSpacing.l,
    backgroundColor: colors.fetWhite,
    padding: rfSpacing.l,
    flexDirection: 'row',
  },

  pDiv: {
    marginTop: rfSpacing.s,
    paddingVertical: rfSpacing.m,
    paddingHorizontal: rfSpacing.m,
    width: windowwidth - rfSpacing['4xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    alignSelf: 'center',
    // flex: 1,
    // flexDirection: 'row',
  },
  timeDiv: {
    marginTop: rfSpacing.s,
    paddingVertical: rfSpacing.m,
    paddingHorizontal: rfSpacing.m,
    width: windowwidth - rfSpacing['4xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing.xs,
    alignSelf: 'center',
    // flex: 1,
    // flexDirection: 'row',
  },
  f1Center: {
    justifyContent: 'center',
    flex: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  wrapIndex: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: windowwidth - rfSpacing['4xl'],
  },
  smallDivWrap: {
    selfAlign: 'center',
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: rfSpacing.xxl,
    padding: rfSpacing.l,
    marginTop: rfSpacing.xxl,
    flexDirection: 'row',
  },
  smallDivValue: {
    textAlign: 'right',
    color: colors.fetBlack,
    fontWeight: 'bold',
    fontSize: rfSpacing.l,
  },
  smallDivUnit: {
    color: colors.fetBlack,
    fontSize: rfSpacing.l,
    paddingLeft: rfSpacing.xs,
  },
  smallDivTitle: {
    textAlign: 'center',
    color: colors.fetBlack,
    fontSize: rfSpacing.l,
  },
  indicatorS: {
    backgroundColor: colors.fetGreen,
  },
  CCTextE: {
    color: colors.fetBlack,
    paddingLeft: rfSpacing.l,
    fontSize: rfSpacing.xl,
    fontWeight: 'bold',
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

  JC: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  RCC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CCC: {
    justifyContent: 'center',
    // flexDirection: 'col',
    alignItems: 'center',
  },
  CC2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CCValue1: {
    color: colors.fetGreen,
    fontSize: rfSpacing.l,
    fontWeight: 'bold',
  },
  CCValue2: {
    color: colors.fetYellow,
    fontSize: rfSpacing.l,
    fontWeight: 'bold',
  },
  CCInnerText: {
    fontSize: rfSpacing.l,
    fontWeight: 'bold',
    color: colors.fetBlack,
  },
  PCWraper: {
    alignItems: 'center',
    marginBottom: rfSpacing.xxl,
  },
  PCBtnWraper: {
    flexDirection: 'row',
    gap: rfSpacing.l,
  },
  PCBtnText: {
    color: colors.fetWhite,
    fontSize: rfSpacing.m,
  },
  CCText: {
    color: colors.fetGray,
    paddingLeft: rfSpacing.m,
    fontSize: rfSpacing.m,
  },
  LCWraper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: rfSpacing.xxl,
  },
  LCBtnWraper: {
    flexDirection: 'row',
    //  marginTop:30,
    gap: rfSpacing.l,
    paddingHorizontal: rfSpacing.l,
  },
  CC1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  BCBtnText: {
    color: colors.fetGray,
    fontSize: rfSpacing.m,
    padding: rfSpacing.xxs,
  },
  BCBtnWraper: {
    flexDirection: 'row',
    gap: rfSpacing.l,
    paddingHorizontal: rfSpacing.l,
  },
  EBDivWraper: {
    flexDirection: 'row',
    gap: rfSpacing.xxl,
    marginTop: rfSpacing.xxl,
  },
  EBValue: {
    color: colors.fetBlack,
    paddingTop: rfSpacing.xl,
    paddingLeft: rfSpacing.l,
    fontSize: rfSpacing.xl,
    fontWeight: 'bold',
  },
  EBIconWraper: {
    alignItems: 'flex-end', marginRight: rfSpacing.s,
  },
  EBIconSize: {
    height: rfSpacing.xxl, width: rfSpacing.xxl
  },
  EBText: {
    color: colors.fetBlack,
    paddingLeft: rfSpacing.l,
    fontSize: rfSpacing.m,
    fontWeight: 'bold',
  },
  EBDiv3: {
    flex: 1,
    backgroundColor: '#f2fff9',
    paddingBottom: rfSpacing.l,
    borderRadius: rfSpacing.l,
  },
  EBDiv2: {
    flex: 1,
    backgroundColor: '#fff7ee',
    paddingBottom: rfSpacing.l,
    borderRadius: rfSpacing.l,
  },
  EBDiv1: {
    flex: 1,
    backgroundColor: '#E5ECF3',
    paddingBottom: rfSpacing.l,
    borderRadius: rfSpacing.l,
  },
  btnCircleGreen: {
    backgroundColor: colors.fet2,
    width: rfSpacing.s,
    height: rfSpacing.s,
    borderRadius: rfSpacing.xs,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  btnCircleYellow: {
    backgroundColor: colors.fet3,
    width: rfSpacing.s,
    height: rfSpacing.s,
    borderRadius: rfSpacing.xs,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  btnCircleBlue: {
    backgroundColor: colors.fetBlue,
    width: rfSpacing.s,
    height: rfSpacing.s,
    borderRadius: rfSpacing.xs,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  btnCircleRed: {
    backgroundColor: colors.fet1,
    width: rfSpacing.s,
    height: rfSpacing.s,
    borderRadius: rfSpacing.xs,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  statsDiv5: {
    height: rfSpacing['6H'],
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    paddingTop: rfSpacing['4xl'],
    marginBottom: rfSpacing['4xl'],
    alignSelf: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  statsHDiv1: {
    height: windowheight,
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    marginTop: rfSpacing.l,
    paddingTop: rfSpacing['4xl'],
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsDiv1: {
    height: rfSpacing['3H'],
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    marginTop: rfSpacing.l,
    paddingTop: rfSpacing['4xl'],
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleDiv: {
    flexDirection: 'row',
    height: rfSpacing['1H'],
    width: windowwidth - rfSpacing['6xl'],
    //  backgroundColor: colors.primary,
  },
  circleDivPie: {
    flexDirection: 'row',
    height: rfSpacing['2H'],
    width: windowwidth - rfSpacing['6xl'],
    //  backgroundColor: colors.primary,
  },
  PieChartDiv: {
    height: rfSpacing['4.5H'],
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    marginTop: rfSpacing.l,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitle: {
    color: colors.fetBlack,
    margin: rfSpacing.xs,
    fontSize: rfSpacing.m,
    fontWeight: 'bold',
  },
  topBarBG: {
    backgroundColor: colors.white,
    marginHorizontal: rfSpacing.l,
    borderRadius: rfSpacing.xs,
    marginTop: rfSpacing.l,
  },

  activityDiv: {
    marginVertical: rfSpacing.s,
    height: moderateScale(44),
    width: windowwidth,
    paddingVertical: rfSpacing.m,
    paddingLeft: rfSpacing['4xl'],
  },
  txtActivity: {
    fontWeight: 'bold',
    marginTop: rfSpacing['4xl'],
    marginLeft: rfSpacing['5xl'],
    fontSize: rfSpacing['xl'],
    color: colors.Danube,
  },
  txtActivity1: {
    fontWeight: 'bold',
    marginLeft: rfSpacing['5xl'],
    fontSize: rfSpacing['xl'],
    color: colors.Danube,
  },
  dateDiv: {
    width: rfSpacing['2H'],
    borderRadius: rfSpacing.m,
    alignSelf: 'center',
    backgroundColor: colors.white,
    justifyContent: 'center',
  },

  topSalesDiv: {
    paddingVertical: rfSpacing['4xl'],
    width: windowwidth,
    marginTop: rfSpacing.m,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  txtDate: {
    fontSize: rfSpacing['3xl'],
    fontWeight: '400',
    paddingLeft: rfSpacing['4xl'],
    color: colors.activity_Date,
  },
  itemContainer: {
    marginTop: rfSpacing['xxl'],
    marginBottom: rfSpacing['4xl'],
    marginHorizontal: rfSpacing['xl'],

    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing['1H'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    alignSelf: 'center',
  },
  itemContainer1: {
    marginTop: rfSpacing['l'],
    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['xl'],
    alignSelf: 'center',
  },
  SalesCardDiv: {
    width: rfSpacing['2.5H'],
    backgroundColor: colors.white,
    height: rfSpacing['4xlms'],
    borderRadius: rfSpacing['xl'],
  },
  salesCardMainDiv: {
    width: rfSpacing['2.5H'],
    marginBottom: rfSpacing.ms,
  },

  row: {
    flexDirection: 'row',
    paddingHorizontal: rfSpacing['4xl'],
    paddingTop: rfSpacing.xs,
  },
  f1: {
    flex: 1,
  },

  f1Border: {
    flex: 1,
    borderColor: colors.fetGray,
    borderRadius: rfSpacing.s,
    borderWidth: 1,
    alignItems: 'center',
  },

  DivG: {
    flex: 1,
    borderRadius: rfSpacing.xs,
    paddingVertical: 2,
    alignItems: 'center',
    backgroundColor: colors.fet1,
  },
  DivY: {
    flex: 1,
    borderRadius: rfSpacing.xs,
    paddingVertical: 2,
    alignItems: 'center',
    backgroundColor: colors.fet2,
  },
  DivB: {
    flex: 1,
    borderRadius: rfSpacing.xs,
    paddingVertical: 2,
    alignItems: 'center',
    backgroundColor: colors.fet3,
  },
  f2: {
    flex: 2,
  },
  splanText: {
    fontWeight: 'bold',
    color: theme.fetGreen,
    fontSize: rfSpacing.l,
  },
  column: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: rfSpacing['xxl'],
  },

  meetingText: {
    fontWeight: '400',
    color: colors.fetGray,
    fontSize: rfSpacing.l,
  },

  splanText1: {
    fontWeight: 'bold',
    color: theme.primaryBlue,
    fontSize: rfSpacing.l,
    marginLeft: rfSpacing.xxl,
  },
  column1: {
    flex: 1,
    paddingRight: rfSpacing['4xl'],
    marginLeft: rfSpacing.xxl,
  },
  priorityText1: {
    color: theme.grey,
    fontWeight: '400',
    fontSize: rfSpacing.l,
  },
  itemContainer2: {
    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing['8xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    alignSelf: 'center',
  },

  splanText2: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.primaryBlue,
    fontSize: rfSpacing.xl,
  },

  priorityText2: {
    color: theme.Rajah,
    fontWeight: '400',
    marginVertical: rfSpacing.m,
    fontSize: rfSpacing.xl,
    textAlign: 'center',
  },
});
