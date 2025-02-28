import React, {useEffect, useContext,useState} from 'react';
import {Text, View, FlatList, Pressable, Image} from 'react-native';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../networking/auth/Services';
import EcomContext from '../../../contextApi/DataProvider';
import { twoDecimal } from '../../../utiltyFunc';

import Loader from '../../../ui/Loader';
import ShowToast from '../../../ui/Toast';
const GridDevicesCard = ({navigation}: any) => {
  const {plant, setplant, Data}: any = useContext(EcomContext);
  const [isLoading, setisLoading] = useState(false);
  const [gridDevices, setgridDevices] = useState([]);
  const dispatch = useDispatch();

  const deviceDetailNavFunGrid = (item) => {
    navigation.navigate('DeviceDetailGrid', {routeVal: item});
    // Alert.alert('Add Pressed');
  };

  const renderItem = ({item}) => (
    <Pressable onPress={() => deviceDetailNavFunGrid(item)} style={styles.pDiv}>
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
            <Text style={styles.ValueText}>{item?.Active_Power_L1} kw</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Capacity</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>{item?.capacity} kw</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Import Monthly</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>
              {twoDecimal(item?.Total_Import_Energy_monthly)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Import Yearly</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>
              {twoDecimal(item?.Total_Import_Energy_yearly)} kwh
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Import Total</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>
              {twoDecimal(item?.Total_Import_Energy_total)}kwh
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Export Monthly</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>
              {twoDecimal(item?.Total_Export_Energy_monthly)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Export Yearly</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>
              {twoDecimal(item?.Total_Export_Energy_yearly)} kwh
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Export Total</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueText}>
              {twoDecimal(item?.Total_Export_Energy_total)} kwh
            </Text>
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
            item => item.type === 'Grid',
          );
          //  setinverterDevices(InverterArray);
          setgridDevices(GridArray);
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
        data={gridDevices}
        keyExtractor={item => item.device_id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default GridDevicesCard;
