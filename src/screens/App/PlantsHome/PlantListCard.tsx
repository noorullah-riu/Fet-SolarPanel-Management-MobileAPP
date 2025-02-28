import React from 'react';
import {Text, View, FlatList, Pressable, Image} from 'react-native';
import rfSpacing from '../../../theme/rfSpacing';

import {PlantImages} from '../../../ui/Images';
import styles from './styles';
import { twoDecimal } from '../../../utiltyFunc';
const PlantListCard = ({
  item,
  plantDetailNavFUn,
  platsListN,
  platsListF,
  platsListO,
  ActiveDiv,
}: any) => {
  const renderItem = ({item}) => (
    <Pressable onPress={() => plantDetailNavFUn(item)} style={styles.pDiv}>
      <View style={styles.imageWrap}>
        <Image
          resizeMode="contain"
          style={styles.plantImageSize}
          //   source={item.plant_image}
          source={{uri: item.plant_image}}
        />
      </View>
      <View style={{flex: 4}}>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.splanText}>{item?.plant_name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.priorityText}>{item?.status}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.companyText}>{item?.plant_address}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fhalf}>
            <Image source={PlantImages.pv} style={styles.iconSize} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item?.ACTIVE_POWER} KW</Text>
          </View>
          <View style={styles.fhalf}>
            <Image source={PlantImages.gen} style={styles.iconSize} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item?.Genrator} KWh</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fhalf}>
            <Image source={PlantImages.solar} style={styles.iconSize} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item?.YIELD_TODAY} KWh</Text>
          </View>
          <View style={styles.fhalf}>
            <Image source={PlantImages.powerS} style={styles.iconSize} />
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>{item?.FUEL_SAVE_TODAY} ltr</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fhalf}>
            <Image source={PlantImages.grid} style={styles.iconSize} />
            <Text style={styles.meetingText2}>Imp</Text>
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>
              {twoDecimal(item?.Total_Import_Energy)} KWh
            </Text>
          </View>
          <View style={styles.fhalf}>
            <Image source={PlantImages.grid} style={styles.iconSize} />
            <Text style={styles.meetingText2}>Exp</Text>
          </View>
          <View style={styles.f3C}>
            <Text style={styles.meetingText}>
             {twoDecimal(item?.Total_Export_Energy)} KWh
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  return (
    <>
      <View style={{marginBottom: rfSpacing['1H']}}>
        <FlatList
          data={
            ActiveDiv === 'All'
              ? item
              : ActiveDiv === 'Normal'
              ? platsListN
              : ActiveDiv === 'Faulty'
              ? platsListF
              : platsListO
          }
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default PlantListCard;
