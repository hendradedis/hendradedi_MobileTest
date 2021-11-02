import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../modules/Screens/Home/HomeScreen';
import IntroScreen from '../modules/Screens/IntroScreen'
import ScheduleScreen from '../modules/Screens/Schedules/ScheduleScreen'
import ScheduleDetail from '../modules/Screens/Schedules/ScheduleDetail';


const StackNavigator = createStackNavigator()
function StackNavigation() {
  return(
    <StackNavigator.Navigator initialRouteName={"IntroScreen"}>
      <StackNavigator.Screen name="IntroScreen" component={IntroScreen} options={{headerShown: false}}/>
      <StackNavigator.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <StackNavigator.Screen name="Schedule" component={ScheduleScreen} options={{headerShown: false}}/>
      <StackNavigator.Screen name="ScheduleDetail" component={ScheduleDetail} options={{headerShown: false}}/>
    </StackNavigator.Navigator>
  )
}

export default StackNavigation;