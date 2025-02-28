import {Dimensions, StyleSheet} from 'react-native';

import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';
const windowwidth = Dimensions.get('window').width;
export default StyleSheet.create({
  nestedIcon: {
    resizeMode: 'contain',
    height: rfSpacing.xxl,
    width: rfSpacing.xxl,
  },

  devicesTabBar:{
    backgroundColor: 'white',
    marginHorizontal: rfSpacing.m,
    marginVertical: rfSpacing.m,
  },
  devicesTabLabel:{
    color: colors.fetBlack,
    fontSize: rfSpacing.s,
    fontWeight: '700',
    textTransform: 'none',
  },
  devicesTabIndicator:{
    backgroundColor: colors.fetGreen,
    height: 2,
    alignSelf: 'center',
  },
  reportTabLable:{
    color: colors.fetBlack,
    fontSize: rfSpacing.m,
    fontWeight: '700',
    textTransform: 'none',
  }
});
