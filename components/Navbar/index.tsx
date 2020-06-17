import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native'
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const StyledNavbar = styled(View)`
  border: solid blue;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

// TODO: Figure out better navigation where the navbar itself
// isn't affected
const Navbar = () => {
  const navigation = useNavigation();

  return (
    <StyledNavbar>
      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Text>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </StyledNavbar>
  );
};

export { Navbar };