import React, { useEffect, useContext, useState } from 'react';
import { Text, View, FlatList, Pressable, Image } from 'react-native';
import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import * as Services from '../../../networking/auth/Services';
import EcomContext from '../../../contextApi/DataProvider';
import Loader from '../../../ui/Loader';
import ShowToast from '../../../ui/Toast';
const InvertorDevicesCard = ({ navigation }: any) => {
  const { plant, setplant, Data }: any = useContext(EcomContext);
  const [isLoading, setisLoading] = useState(false);
  const [inverterDevices, setinverterDevices] = useState([]);
  const dispatch = useDispatch();

  const deviceDetailNavFUn = item => {
    // navigation.navigate('InverterDetail');
    navigation.navigate('DeviceDetail', { routeVal: item });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => deviceDetailNavFUn(item)} style={styles.pDiv}>
      <View style={styles.f4}>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.splanText}>{item?.device_name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.priorityText}>{item?.status}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>SN</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item?.serial}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Active Power</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item.ACTIVE_POWER} kw</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Power Factor</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item?.POWER_FACTOR}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Capacity</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item?.INVERTER_RATED_POWER || 0}  kw</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Today yield</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item.YIELD_TODAY} kwh</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Month yield</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item.YIELD_MONTHLY} kwh</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Year yield</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item.YIELD_YEARLY} kwh</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Total yield</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item.YIELD_TOTAL} kwh</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const getDevicesList = async () => {
    try {
      setisLoading(true);
      let obj = {
        plant: plant,
        token: Data,
      };
      dispatch(Services.getDevicesList(obj)).then(data => {
        //   console.log(data.payload, 'from getDevicesList');
        if (data.payload?.devicesData) {
          let InverterArray = data.payload?.devicesData.filter(
            item => item.type === 'Inverter',
          );
          setinverterDevices(InverterArray);
          setisLoading(false);
        }
      });
    } catch (err) {
      ShowToast('error', 'No records.');
      setisLoading(false);
    } finally {
      //  setisLoading(false);
    }
  };

  useEffect(() => {
    getDevicesList();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View>
      <FlatList
        data={inverterDevices}
        keyExtractor={item => item.device_id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default InvertorDevicesCard;
