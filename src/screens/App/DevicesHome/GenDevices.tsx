import React, {useEffect,useContext, useState} from 'react';
import {Text, View, FlatList, Pressable, Image} from 'react-native';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../networking/auth/Services';
import EcomContext from '../../../contextApi/DataProvider';
import { twoDecimal } from '../../../utiltyFunc';

import Loader from '../../../ui/Loader';
import ShowToast from '../../../ui/Toast';
const GenDevicesCard = ({navigation}: any) => {
  const {plant, setplant, Data}: any = useContext(EcomContext);
  const [isLoading, setisLoading] = useState(false);
  const [genDevices, setgenDevices] = useState([]);
  const dispatch = useDispatch();


  const deviceDetailNavFunGen = (item) => {
    navigation.navigate('DeviceDetailGen',{routeVal: item});
    // Alert.alert('Add Pressed');
  };

 

  const renderItem = ({item}) => (
    <Pressable onPress={() => deviceDetailNavFunGen(item)} style={styles.pDiv}>
      <View style={styles.f4}>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.splanText}>{item?.device_name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.priorityText}>{item?.status || 'null'}</Text>
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
            <Text style={styles.ValueText}>{twoDecimal(item?.ACTIVE_POWER)} kw</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Capacity</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{twoDecimal(item?.capacity)} kw</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Today Energy</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{twoDecimal(item?.Today_Energy)}  kwh</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Month Energy</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{twoDecimal(item?.ENERGY_MONTHLY)} kwh</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Year Energy</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{twoDecimal(item?.ENERGY_YEARLY)} kwh</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Total Energy</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{twoDecimal(item?.ENERGY_TOTAL)}  kwh</Text>
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
          let GridArray = data.payload?.devicesData.filter(
            item => item.type === 'Gen',
          );
          //  setinverterDevices(InverterArray);
          setgenDevices(GridArray);
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
        data={genDevices}
        keyExtractor={item => item.device_id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default GenDevicesCard;
