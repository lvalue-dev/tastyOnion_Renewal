import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../../screens/Map/MapScreen';
import AuthScreen from '../../screens/Auth/AuthScreen';

export type RootTabParamList = {
  Map: undefined;
  Auth: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ title: '지도' }}
      />
      <Tab.Screen
        name="Auth"
        component={AuthScreen}
        options={{ title: '로그인' }}
      />
    </Tab.Navigator>
  );
}
