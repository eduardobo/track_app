import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import baseStyle  from '../styles/BaseStyle';

const NavLink = ({ navigation, routeName, navigationText }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={ baseStyle.link }>
          { navigationText }
        </Text>
      </Spacer>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({});

export default withNavigation(NavLink);
