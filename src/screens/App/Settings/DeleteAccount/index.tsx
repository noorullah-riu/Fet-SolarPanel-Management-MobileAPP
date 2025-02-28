import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import HeaderCommon from '../../../../ui/HeaderCommon';
import back from '../../../../assets/_Header/back-button.png';
import spacing from '../../../../theme/spacing';
import colors from '../../../../theme/colors';
import BlueButton from '../../../../ui/BlueButton';
export const DeleteAccount = props => {
  return (
    <>
      <HeaderCommon
        showLeftIcon={true}
        leftIcon={back}
        leftCallBack={() => props.navigation.goBack()}
        title={'Delete Account'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        //    searchIcon={search}
        //    searchPhrase={SearchPhrase}
        //    setSearchPhrase={setSearchPhrase}
      />
      <View style={styles.divP1}></View>
      <View style={styles.divP}>
        <View style={styles.h70}>
          <Text style={styles.usernameText}>Enter Password</Text>
        </View>
        <View style={styles.inputEmail}>
          <TextInput
            style={styles.inputStyle}
            //   onBlur={handleBlur('UserCode')}
            //   onChangeText={handleChange('UserCode')}
            //   value={values.UserCode}
            //   placeholder="User Name/Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.lognDiv}>
          <BlueButton
            text="Submit"
            //     disabled={!isValid}
            //   onPress={handleSubmit}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    background: '#0000FF',
  },
  inputEmail: {
    height: spacing['6xl'],
    marginLeft: spacing['4xl'],
    marginRight: spacing['4xl'],
    justifyContent: 'center',
  },
  usernameText: {
    color: colors.heading_black,
    fontSize: spacing.xl,
    fontWeight: '500',
    marginLeft: spacing['4xl'],
  },
  h70: {
    marginTop: spacing['xl'],
    // flex: 1,
  },
  lognDiv: {
    height: spacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing['7xl'],
  },
  divP: {
    // justifyContent: 'center',
    // aligItems: 'center',
    flex: 3,
  },
  divP1: {
    flex: 0.5,
  },
  inputStyle: {
    color: colors.activity_Date,
    fontSize: spacing.xl,

    borderBottomColor: colors.font_grey,
    borderBottomWidth: spacing['3xxs'],
  },
});
