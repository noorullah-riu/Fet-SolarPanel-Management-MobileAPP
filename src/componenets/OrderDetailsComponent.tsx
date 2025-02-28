import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Text} from 'react-native-animatable';
import colors from '../theme/colors';
import currency from '../theme/currency';
import rfSpacing from '../theme/rfSpacing';

export const OrderDetailCOmponent = ({navigation, docNum, route}: any) => {
  const DATA = [
    {
      id: 1,
      companyName: 'GREEN FOOD ',
      Price: '20',
      Quality: 'Good',
      remarks: 'Remarks:',
    },
    {
      id: 2,
      companyName: 'TRIPPLE-EM ',
      Price: '21',
      Quality: 'Good',
      remarks: 'Remarks:',
    },
    {
      id: 3,
      companyName: 'GUJRANWALA FOOD ',
      Price: '22',
      Quality: 'Normal',
      remarks: 'Remarks:ASSAD',
    },
  ];
  //   useEffect(() => {
  //     if (data?.data?.length > 0) {
  //       console.log('Order details', data);
  //       setOrdersEmpty(false);
  //       setItemList(data?.data);
  //     } else {
  //       setOrdersEmpty(true);
  //       setItemList([]);
  //     }
  //   }, [data, isLoading, isSuccess, error]);

  //   if (isLoading) return <Loader />;
  //   if (error) return <Error404 />;

  const renderItem = ({item}: any) => (
    <View style={item.id % 2 == 0 ? styles.Qitem2Div : styles.QitemDiv}>
      <View style={{flex: 3}}>
        <Text style={{color: colors.grey}}>{item.companyName}</Text>
      </View>
      <View style={styles.f1}>
        <Text style={{color: colors.grey}}>{item.Price}</Text>
      </View>
      <View style={styles.f1}>
        <Text style={{color: colors.grey}}>{item.Quality || 'N/A'}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text style={{color: colors.grey}}>{item.Price * item.Price}</Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.Qitem2Div}>
      <View style={{flex: 3}}>
        <Text style={styles.itemHead}>Item Name</Text>
      </View>
      <View style={styles.f1}>
        <Text style={styles.itemHead}>Price</Text>
      </View>
      <View style={styles.f1}>
        <Text style={styles.itemHead}>Quantity</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text style={styles.itemHead}>Total</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.itemDiv}>
          <View style={styles.customerDiv}>
            <View style={styles.f1}>
              <Text style={styles.customerText}>
                Gujranwala Food Industries (PVT) Limited
              </Text>
            </View>
          </View>
          <View style={styles.orderdiliverydateDiv}>
            <View style={styles.odDiv2}>
              <View style={styles.f1}>
                <Text style={styles.itemText}>Order Remarks:</Text>
              </View>
              <View style={styles.dateDiv}>
                <Text style={styles.diliverydateText}>
                  Sales Order From Mobile App
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.orderdiliverydateDiv}>
            <View style={styles.odDiv2}>
              <View style={styles.f1}>
                <Text style={styles.itemText}>Discount:</Text>
              </View>
              <View style={styles.dateDiv}>
                <Text style={styles.dateText}>{currency.CR4} 0.0</Text>
              </View>
            </View>
          </View>
          <View style={styles.orderdiliverydateDiv}>
            <View style={styles.odDiv2}>
              <View style={styles.f1}>
                <Text style={styles.itemText}>Tax:</Text>
              </View>
              <View style={styles.dateDiv}>
                <Text style={styles.dateText}>{currency.CR4} 819000</Text>
              </View>
            </View>
          </View>

          <View style={styles.orderdiliverydateDiv}>
            <View style={styles.odDiv2}>
              <View style={styles.f1}>
                <Text style={styles.itemText}>Total:</Text>
              </View>
              <View style={styles.dateDiv}>
                <Text style={styles.dateText}>{currency.CR4} 819000</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        // data={DATA}
        // keyExtractor={item => item.itemCode}
        // renderItem={renderItem}
        // ListHeaderComponent={renderHeader}
        data={DATA}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.id}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: rfSpacing.m,
  },
  QitemDiv: {
    flexDirection: 'row',
    padding: rfSpacing.m,
    backgroundColor: colors.Gallery,
  },
  Qitem2Div: {
    flexDirection: 'row',
    padding: rfSpacing.m,
    backgroundColor: colors.white,
  },
  itemDiv: {
    backgroundColor: colors.white,
    width: '90%',
    paddingVertical: rfSpacing.m,
    paddingHorizontal: rfSpacing.m,
    alignSelf: 'center',
    borderRadius: rfSpacing['4xl'],
  },
  itemHead: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: rfSpacing.l,
  },
  f1: {flex: 1},
  rowHeight: {
    flexDirection: 'row',
    height: rfSpacing['6xl'],
  },

  customerDiv: {
    flexDirection: 'row',
    marginTop: rfSpacing.ms,
    marginLeft: rfSpacing.m,
  },
  customerText: {
    fontSize: rfSpacing.xl,
    fontWeight: '700',
    color: colors.grey,
  },

  orderdiliverydateDiv: {
    flexDirection: 'row',
    marginTop: rfSpacing.xs,
    marginLeft: rfSpacing.m,
  },
  itemText: {fontSize: rfSpacing.l, color: colors.Danube, fontWeight: '800'},
  odDiv2: {flexDirection: 'row', flex: 1},
  dateDiv: {alignItems: 'flex-end', marginRight: rfSpacing.m},
  dateText: {fontSize: rfSpacing.l, color: colors.Rajah},
  diliverydateText: {fontSize: rfSpacing.l, color: 'black'},
});
