import React, {useEffect,useContext, useState} from 'react';
import {Text, View, FlatList, Pressable, Image} from 'react-native';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../networking/auth/Services';
import { twoDecimal } from '../../../utiltyFunc';
import EcomContext from '../../../contextApi/DataProvider';
import Loader from '../../../ui/Loader';
import ShowToast from '../../../ui/Toast';

const LoadDevicesCard = ({navigation}: any) => {
  const {plant, setplant, Data}: any = useContext(EcomContext);
  const [isLoading, setisLoading] = useState(false);
  const [loadDevices, setloadDevices] = useState([]);
  const dispatch = useDispatch();



  const deviceDetailNavFunLoad = (item) => {
    // navigation.navigate('InverterDetail');
     navigation.navigate('DeviceDetailLoad', {routeVal: item});
   };
 

  const renderItem = ({item}) => (
    <Pressable onPress={() => deviceDetailNavFunLoad(item)} style={styles.pDiv}>
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
            <Text style={styles.ValueText}>{item?.serial} </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Active Power</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item?.ACTIVE_POWER} kw</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Power Factor</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item?.POWER_FACTOR ||0}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Today Consumption</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{twoDecimal(item?.Today_Consumption)} kwh</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Month Consumption</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{twoDecimal(item?.Consumption_MONTHLY)}  kwh</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Year Consumption</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{twoDecimal(item?.Consumption_YEARLY)}kwh</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Total Consumption</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{twoDecimal(item?.Consumption_TOTAL)}kwh</Text>
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
            item => item.type === 'Load',
          );
          //  setinverterDevices(InverterArray);
          setloadDevices(GridArray);
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
        data={loadDevices}
        keyExtractor={item => item.device_id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default LoadDevicesCard;
