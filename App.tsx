import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native'
import { View } from 'react-native';

import { EventView } from './screens/EventView';
import { MapView } from './screens/MapView';
import { Navbar } from './components/Navbar';
import { ProfileView } from './screens/ProfileView';

const AppWrapper = styled(View)`
  border: solid red;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
          <Stack.Screen name="Map" component={MapView} />
          <Stack.Screen name="Events" component={EventView} />
          <Stack.Screen name="Profile" component={ProfileView} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

