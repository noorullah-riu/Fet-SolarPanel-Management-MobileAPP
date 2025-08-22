import React, { useState, useContext, useEffect } from 'react';
import EcomContext from '../../../contextApi/DataProvider';
import { Image, Alert, View, Text, TextInput, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Loader from '../../../ui/Loader';
import ShowToast from '../../../ui/Toast';
import styles from './styles';
import { LoginImages } from '../../../ui/Images';
import ScrollAuth from '../../../ui/ScrollAuth';
import BlueButton from '../../../ui/BlueButton';

import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../../navigation/AuthNavigator';
import { RouteProp } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import * as Services from '../../../networking/auth/Services';

import * as yup from 'yup';
import { Formik } from 'formik';
import { storeDataLogin } from '../../../storage';
import rfSpacing from '../../../theme/rfSpacing';

import AsyncStorage from '@react-native-async-storage/async-storage';
interface userData {
  $id: string;
  active: null;
  cityName: string;
  companyName: string;
  contactPersonName: string;
  contactPersonPhone: string;
  costCenter: string;
  countryName: string;
  email: string;
  empId: number;
  id: number;
  landLineNumber: number;
  managerCode: number;
  managerId: number;
  managerName: null;
  mobilenumber: string;
  name: string;
  ocrCode4: string;
  pymntGroup: string;
  salePerName: string;
  salePersonCode: number;
  sapUserCOde: string;
  slpCode: number;
  stateName: string;
  territory: number;
  typeOfUser: string;
  u_Dsd_EmpCode: string;
  u_MUPassword: string;
  u_Qut_Series: string;
  u_SECode: string;
  u_Series: string;
  u_Whs: string;
  userManagerId: number;
}
type FormData = {
  UserCode: string;
  Password: string;
};

interface Props {
  route: ScreenRouteProp;
  navigation: ScreenProp;
}

type ScreenProp = StackNavigationProp<AuthStackParamList, 'Login'>;
type ScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>;

// export const Login = ({navigation}: any) => {
export const Login: React.FC<Props> = props => {
  const { setUserAuthentic, Data, setData, UserType, setUserType }: any =
    useContext(EcomContext);
  const [hidePass, setHidePass] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const tagline = 'Efficient, Hygienic & Sustainable Packaging Solutions';
  const accountTxt = `Don't have an Account?`;
  const signUpTxt = ` SignUp`;
  const passwordText = `Password`;
  const username = `Email`;
  const singinTxt = 'Sign In';
  const versionTxt = 'App Version 0.15.0';
  const loginValidationSchema = yup.object().shape({
    Email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    Password: yup
      .string()
      .min(4, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const dispatch = useDispatch();

  const submtBtn = async (values?: any) => {
    setisLoading(true);
    const data = {
      email: values.Email,
      password: values.Password,
    };
    dispatch(Services.postLogin(data)).then(data => {
      console.log(data.payload, 'from login post');
      if (data?.payload?.userData) {
        storeDataLogin(data?.payload);
        setData(data?.payload);
        setUserAuthentic(true);
        setisLoading(false);
      } else {
        ShowToast('error', 'These credentials do not match our records.');
        setisLoading(false);
        //   console.log(data.payload.message,"---error");
      }
      setisLoading(false);
    });
  };

  const storeData = async (filteredDatad: any) => {
    try {
      const userProfile = JSON.stringify(filteredDatad);
      await AsyncStorage.setItem('@User1', userProfile);
    } catch (error) {
      // Error saving data
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <ScrollAuth>
      <View style={styles.container}>
        <View style={styles.h20}></View>

        <View style={styles.logoDiv}>
          <View
            style={{
              height: rfSpacing['7xl'],
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View style={styles.imgView}>
              <Image
                resizeMode="cover"
                style={styles.ImageStyleLogo}
                source={LoginImages.spLogo}
              />
            </View>
          </View>
        </View>

        <View style={styles.h60}>
          <Text style={styles.singinTxt}>{singinTxt}</Text>
        </View>

        <View style={styles.h70}>
          <Text style={styles.usernameText}>{username}</Text>
        </View>

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ Email: '', Password: '' }}
          onSubmit={values => submtBtn(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <View style={styles.inputEmail}>
                <TextInput
                  style={styles.inputStyle}
                  onBlur={handleBlur('Email')}
                  onChangeText={handleChange('Email')}
                  value={values.Email}
                  placeholder="Email"
                  keyboardType="email-address"
                />
              </View>

              {errors.Email && touched.Email && (
                <Animatable.View animation="bounceInRight">
                  <Text style={styles.errorEmail}>{errors.Email}</Text>
                </Animatable.View>
              )}
              <View style={styles.h70}>
                <Text style={styles.passwordText}>{passwordText}</Text>
              </View>
              <View style={styles.inputPassword}>
                <View style={styles.f9}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange('Password')}
                    value={values.Password}
                    placeholder="Password"
                    onBlur={handleBlur('Password')}
                    secureTextEntry={hidePass ? true : false}
                  />
                </View>
                <View style={styles.eyeDiv}>
                  {hidePass ? (
                    <Pressable
                      style={styles.h20w20}
                      onPress={() => setHidePass(!hidePass)}>
                      <Image
                        style={styles.h20w20}
                        source={LoginImages.eyeVisible}
                      />
                    </Pressable>
                  ) : (
                    <Pressable
                      style={styles.h20w20}
                      onPress={() => setHidePass(!hidePass)}>
                      <Image
                        style={styles.h20w20}
                        source={LoginImages.eyeHide}
                      />
                    </Pressable>
                  )}
                </View>
              </View>

              {errors.Password && touched.Password && (
                <Animatable.View animation="bounceInRight">
                  <Text style={styles.errorPass}>{errors.Password}</Text>
                </Animatable.View>
              )}
              <Pressable
                onPress={() => props.navigation.navigate('FotgotPassword')}
                style={styles.forgotPassDiv}>
                <Text style={styles.forgotPassTxt}>Forgot Password?</Text>
              </Pressable>

              <View style={styles.lognDiv}>
                <BlueButton
                  text="Login"
                  //     disabled={!isValid}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>

        <View style={styles.h20}></View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.h50f2}>
            <Text style={styles.signupTxt}>{accountTxt}</Text>
          </View>
          <Pressable
            onPress={() => props.navigation.navigate('SignUp')}
            style={styles.h50f1}>
            <Text style={styles.signupTxtEnd}>{signUpTxt}</Text>
          </Pressable>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: rfSpacing.l }}>
            {versionTxt}
          </Text>
        </View>
      </View>
    </ScrollAuth>
  );
};
