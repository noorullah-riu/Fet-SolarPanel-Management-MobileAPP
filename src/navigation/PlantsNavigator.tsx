import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PlantsHome} from '../screens/App/PlantsHome/index';
import {HomeBottomNav} from './HomeBottomNav';
import {AddPlant} from '../screens/App/AddPlant/index';
const PlantsStack = createStackNavigator();

export const PlantsNavigator = () => {
  return (
    <PlantsStack.Navigator
      screenOptions={{
        headerShown: false,
  
      }}>
      <PlantsStack.Screen name="PlantsHome" component={PlantsHome} />
      <PlantsStack.Screen name="AddPlant" component={AddPlant} />
      <PlantsStack.Screen name="PlantDetail" component={HomeBottomNav} />
    </PlantsStack.Navigator>
  );
};
