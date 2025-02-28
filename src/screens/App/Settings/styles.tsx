import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
const windowwidth = Dimensions.get('window').width;
export default StyleSheet.create({

  fhalf: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:rfSpacing['4xl'],
  },
  fhalf2: {
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

  f4: {
    flex: 4,
  },
  splanText: {
    fontWeight: 'bold',
    color: colors.fetGreen,
    fontSize: rfSpacing.l,
  },
  TitleText: {
    color: colors.fetGray,
    fontSize: rfSpacing.l,
  },
  ValueText: {
    color: colors.fetBlack,
    fontSize: rfSpacing.l,
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
  pDiv: {
    marginTop: rfSpacing['xxl'],
    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing['4xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing.m,
    alignSelf: 'center',
   // flex: 1,
    flexDirection: 'row',
  },
  TotalText: {
    color: colors.fetGray,
    fontWeight: 'bold',
    fontSize: rfSpacing.xl,
    marginLeft:rfSpacing.xxl,
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
