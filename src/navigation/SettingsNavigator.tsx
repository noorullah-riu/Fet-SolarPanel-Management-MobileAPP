import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Settings} from '../screens/App/Settings/index';
import {UpdatePass} from '../screens/App/Settings/UpdatePass/index';
import {UpdateEmail} from '../screens/App/Settings/UpdateEmail/index';
import { DeleteAccount } from '../screens/App/Settings/DeleteAccount';
const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="UpdatePass" component={UpdatePass} />
      <SettingsStack.Screen name="UpdateEmail" component={UpdateEmail} />
      <SettingsStack.Screen name="DeleteAccount" component={DeleteAccount} />
    </SettingsStack.Navigator>
  );
};
