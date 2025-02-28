import React, {useState, useContext, useEffect, useRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';

import aboutpic from '../../../assets/_Drawer/aboutpic.jpg';
import HeaderCommon from '../../../ui/HeaderCommon';
import colors from '../../../theme/colors';
import sp from '../../../assets/_Drawer/fet2.png';

import {Socialhandler} from './Socialhandler';
import rfSpacing from '../../../theme/rfSpacing';

export const AboutUs = ({navigation}: any) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
      <HeaderCommon
        //    leftIcon={menu}
        //  leftCallBack={() => Alert.alert('Add Pressed')}
        showLeftIcon={false}
        title={''}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        // searchIcon={search}
        // searchPhrase={SearchPhrase}
        // setSearchPhrase={setSearchPhrase}
      />
      <View>
        <Image resizeMode="contain" style={styles.imgStyle} source={sp} />
      </View>
      <View style={styles.textHeadDiv}>
        <Text style={styles.headStyle}>About Our Company</Text>
      </View>
      <View style={styles.textDiv}>
        <Text style={styles.txtStyle}>
          FET Fusion Engineering & Technology is one of the leading solution
          provider for all kind of Power Quality, Protection and Automation
          Solutions to the industry. We are offering innovative products &
          solutions in the area of Power Quality, Protection and Automation for
          various application in industries like Oil & Gas, Plastic, Cement,
          Food & Breweries, Paper, Chemicals, Material handling, Pharmaceutical,
          Steel, packaging, machine tools, Synthetic Fibber, textiles and Power
          House. Fusion Engineering & Technology started as a small engineering
          venture. FET operates in two distinct divisions. The first division
          handles the manufacturing of essential electrical components like
          switchgear, solar structures, and cable trays. The second division
          takes a more integrated approach. We act as system integrators,
          providing comprehensive industrial Power solar solutions. This
          division caters to a diverse clientele, providing advanced solutions
          like:
        </Text>
        <Text style={styles.txtStyle}>
          • PV-DG Hybrid Control Systems: These systems integrate Photovoltaic
          (PV) and Diesel Generator (DG) power sources, ensuring a reliable and
          efficient energy supply.
        </Text>
        <Text style={styles.txtStyle}>
          • Generator Synchronization: FET helps clients synchronize multiple
          generators for optimal power output and grid stability.
        </Text>
        <Text style={styles.txtStyle}>
          • SCADA and EMS: The company offers Supervisory Control and Data
          Acquisition (SCADA) and Energy Management Systems (EMS) for real-time
          monitoring and control of power infrastructure.
        </Text>
        <Text style={styles.txtStyle}>
          • Power Quality Solutions: FET tackles issues like Harmonics
          Distortions and Flickering, ensuring clean and reliable power for
          sensitive equipment.
        </Text>
        <Text style={styles.txtStyle}>
          We offer variety of solutions to meet customers needs, our range of
          services include designing customized solutions, systems engineering,
          software development, installation and commissioning. We cater all the
          requirements of our customer for Plant / Equipment / Machine and
          Process / Automation. We are associated with various OEM’s (like CRE
          Technology France and Comsys from Sweden) equipment suppliers and
          consultants, and work along with team from the concept stage to design
          and till the commissioning of the system.
        </Text>
        <Text style={styles.txtStyle}>Contact us for:</Text>
        <Text style={styles.txtStyle}>Sales Inquiries; Sales@fent.com.pk</Text>
        <Text style={styles.txtStyle}>
          Technical Support; Support@fent.com.pk
        </Text>
        <Text style={styles.txtStyle}>General Inquires; Info@fent.com.pk </Text>
        <Text style={styles.txtStyle}>
          Telephone Head Office: +92-42-35307058
        </Text>
        <Text style={styles.txtStyle}>Website; https://www.fent.com.pk </Text>
        <Text style={styles.txtStyle}>
          What'sApp Contact; +92-300-1199443/+92-303-4000584
        </Text>
      </View>
      {/* <Socialhandler /> */}
    </ScrollView>
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

  textHeadDiv: {
    marginTop: rfSpacing.m,
  },
  textDiv: {
    bordrWidth: rfSpacing.m,
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
