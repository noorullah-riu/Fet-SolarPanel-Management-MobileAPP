import React, {useState, useEffect} from 'react';
import {Text, Image, View, Pressable, StyleSheet} from 'react-native';
import styles from '../styles';

const StatusCode = ({INVERTER_STATUS}) => {
  useEffect(() => {
    // getCurrentDate();
  }, []);

  return (
    <View style={styles.rowStart}>
      <View style={styles.f1}>
        <Text style={styles.leftTxt}>Inverter Status</Text>
      </View>
      <View style={styles.f1}>
        <Text style={styles.rightTxt}>
          {INVERTER_STATUS == '0'
            ? 'Inititalizing'
            : INVERTER_STATUS == '1'
            ? 'Detecting'
            : INVERTER_STATUS == '3'
            ? 'Detecting Irradiation'
            : INVERTER_STATUS == '256'
            ? 'Starting'
            : INVERTER_STATUS == '512'
            ? 'On-grid'
            : INVERTER_STATUS == '513'
            ? 'On-grid:Power Limit'
            : INVERTER_STATUS == '514'
            ? 'On-grid:Self derating'
            : INVERTER_STATUS == '768'
            ? 'ShutDown:Fault'
            : INVERTER_STATUS == '769'
            ? 'ShutDown Command'
            : INVERTER_STATUS == '513'
            ? ''
            : INVERTER_STATUS == '512'
            ? 'On-grid'
            : INVERTER_STATUS == '513'
            ? ''
            : INVERTER_STATUS == '512'
            ? 'On-grid'
            : INVERTER_STATUS == '513'
            ? ''
            : INVERTER_STATUS == '512'
            ? 'On-grid'
            : INVERTER_STATUS == '513'
            ? ''
            : INVERTER_STATUS == '512'
            ? 'On-grid'
            : INVERTER_STATUS == '513'
            ? ''
            : ''}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(StatusCode);
