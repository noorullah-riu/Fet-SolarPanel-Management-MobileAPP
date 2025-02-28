import React, {useState, useContext, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  View,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import HeaderCommon from '../../../ui/HeaderCommon';
import styles from './styles';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import {WebView} from 'react-native-webview';

import EcomContext from '../../../contextApi/DataProvider';
import {removeUser, getDataContext} from '../../../storage';
export const Settings = ({navigation}: any) => {
  const {UserAuthentic, setUserAuthentic,Data}: any = useContext(EcomContext);
console.log(Data,"--->>");
  const HTML = `
  <!DOCTYPE html>
  <html lang="en">
    <body onload='document.forms["ssoForm"].submit()'>
      <form
        id="ssoForm"
        action="https://payments.bankalfalah.com/SSO/SSO/SSO"
        method="post"
      >
        <input id="Key1" name="Key1" type="hidden" value="8KEJP2jjx8jfAjVu" />
        <input id="Key2" name="Key2" type="hidden" value="3388053146209757" />
        <input
          id="AuthToken"
          name="AuthToken"
          type="hidden"
          value="+ehanlSZdidX6JTiXaF8YM63mxL5diO7GrcW/24lctaCLMDIB11p2nD9mBQh22/yF/GeBAOmgzAqQuYTZXSz65dUCQlvpYmwW16ScoZY94I9dlpk1rxI1K8LmLgOYQPjxv+T5VDsbPyY0Uml/CLXWA=="
        />
        <input
          id="RequestHash"
          name="RequestHash"
          type="hidden"
          value="cTBxGaLOnKUAVgfKax0u84/Pz+ZQfgGPyce8EzoAuffnGkngLf991g3zIqvKcQBGIXTCkkmezxTXIkYnj25zkbqiIUnTe7R5s+mrxYJfwzsruJ+8B0fU6MVmcK1FPMgVYQPF/rJzpzcOWF8fbkPsoEwtT191Vw73QJNBY+jmAK+YQ5phcyx8bJE0I3Prgd4cSepbmSajHwJTunqq89ympFmNVUSMSYPByjgJOToUwppyyIxB9fUTnPNxWbrcyMiq7gWl0z1CgYqXV/v+rdB3FD5aYF2PlRog/Wy8kKKaVhMis2TOCLXZxwCDoXXQTAvSfOYBHhkuFgMBuTRtnM/XY+s7LdrVeIMfAGg12Twac7pgh/exG7fofE1Jf8vPRANmU4iSQMBuzPoOosOQnwyaiv7rzvBclPAWkeBxa2dGm0HpMYrcxMAFYAaJWwUwETGo5fJf3Grhs2UvNtjmnrk3Oe8KpZ2qeLJ1r49DfgyDZHfGaIeVQudtH7cfiyDi/5Av6c/k2CcBRlzNR84PNZxM6gDcQpLLeu0GoIb6BmbUP/V1HWjvQb1XW8mVe/pm/NL294r8PNfLjLfp2pUeYmKjKY0Jnju10sbKikailv3VJjQ83aTLz6UszJDvN+f/YDF1MBRIWBGGyjD0lXb6a7ObnuLqI35X50n8Y15EEOgbZmg="
        />
        <input id="ChannelId" name="ChannelId" type="hidden" value="1001" />
        <input
          id="ReturnURL"
          name="ReturnURL"
          type="hidden"
          value="https://portal.udgpk.com/Bank/ReturnURL"
        />
        <input id="StoreId" name="StoreId" type="hidden" value="034234" />
        <input id="MerchantId" name="MerchantId" type="hidden" value="24995" />
        <input
          id="MerchantHash"
          name="MerchantHash"
          type="hidden"
          value="OUU362MB1ur+qLT3NdLRuaydLCNC3d47GyAu8kg+bo1NU1Q31p0GJj/2m+lT33GN"
        />
        <input
          id="MerchantUsername"
          name="MerchantUsername"
          type="hidden"
          value="ibapil"
        />
        <input
          id="MerchantPassword"
          name="MerchantPassword"
          type="hidden"
          value="nLX08sztW9hvFzk4yqF7CA=="
        />
        <input
          id="TransactionTypeId"
          name="TransactionTypeId"
          type="hidden"
          value="3"
        />
        <input
          id="TransactionReferenceNumber"
          name="TransactionReferenceNumber"
          type="hidden"
          value="1074739"
        />
        <input id="Currency" name="Currency" type="hidden" value="PKR" />
        <input
          id="TransactionAmount"
          name="TransactionAmount"
          type="hidden"
          value="1"
        />
      </form>
    </body>
  </html>
  
`;

  const signOut = async () => {
    // console.log(Data.user, '--------data--------');
    const resp = await removeUser();
    if (resp) {
      //  setData(resp);
      setUserAuthentic(!UserAuthentic);
    }
  };

  return (
    <View>
      <HeaderCommon
        //    leftIcon={menu}
        //  leftCallBack={() => Alert.alert('Add Pressed')}
        showLeftIcon={false}
        title={'Settings'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        // searchIcon={search}
        // searchPhrase={SearchPhrase}
        // setSearchPhrase={setSearchPhrase}
      />
      {/* <View style={{height: rfSpacing['4.5H']}}>
        <WebView
          source={{html: HTML}}
          automaticallyAdjustContentInsets={false}
          //   {...platformProps}
        />
      </View> */}
      <View style={styles.fhalf}>
        <Text style={styles.TotalText}>{Data?.userData?.username}</Text>
      </View>
      <View style={styles.fhalf2}>
        {/* <Text style={styles.TotalText}>Jhon Doe</Text> */}
      </View>
      <Pressable
        onPress={() => navigation.navigate('UpdatePass')}
        style={styles.pDiv}>
        <Text style={styles.TotalText}>Update Password</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('UpdateEmail')}
        style={styles.pDiv}>
        <Text style={styles.TotalText}>Update Email</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('DeleteAccount')}
        style={styles.pDiv}>
        <Text style={styles.TotalText}>Delete Account</Text>
      </Pressable>
      <Pressable onPress={() => signOut()} style={styles.pDiv}>
        <Text style={styles.TotalText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};
