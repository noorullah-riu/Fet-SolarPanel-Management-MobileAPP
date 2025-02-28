import React from 'react';
import {Text, View, FlatList, Pressable, Image} from 'react-native';
import styles from './styles';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import pv from '../../../assets/_PlantDetail/pv.png';
import grid from '../../../assets/_PlantDetail/grid.png';
import home from '../../../assets/_PlantHome/home.jpeg';
import solar from '../../../assets/_PlantDetail/solar.png';

const DeviceListCard = ({item, plantDetailNavFUn}: any) => {
  const renderItem = ({item}) => (
    <Pressable onPress={() => plantDetailNavFUn()} style={styles.pDiv}>
      <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
        <Image
          //   resizeMode="cover"
          style={{height: 80, width: 80}}
          source={home}
        />
      </View>
      <View style={{flex: 4}}>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.splanText}>Plant Name Here</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.priorityText}>Status</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.companyText}>Plant Location Here</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fhalf}>
            <Image source={pv} style={{height: 15, width: 15}} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item.Total} kwp</Text>
          </View>
          <View style={styles.fhalf}>
            <Image source={solar} style={{height: 15, width: 15}} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item.Total} kwp</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fhalf}>
            <Image source={grid} style={{height: 15, width: 15}} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item.Total} kwp</Text>
          </View>
          <View style={styles.fhalf}>
            <Image source={solar} style={{height: 15, width: 15}} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item.Total} kwp</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fhalf}>
            <Image source={grid} style={{height: 15, width: 15}} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item.Total} kwp</Text>
          </View>
          <View style={styles.fhalf}>
            <Image source={solar} style={{height: 15, width: 15}} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item.Total} kwp</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={{marginBottom: rfSpacing['1H']}}>
      <FlatList
        data={item}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DeviceListCard;
