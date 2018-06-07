

import React, { Component } from 'react';
import Container from './container';
import MoreOptions from './moreOptions'
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Header } from 'react-navigation';

import { createMaterialTopTabNavigator } from 'react-navigation';

const Delivery = ({ Props }) => (
  {
    
  }
);

export default createMaterialTopTabNavigator({
  Delivery: (props) => [{ text: 'Sushi Grill and Pizza' }, { text: 'Sushi Palace' }, { text: 'Sushi Palace' }].map((val, index) => <Container {...props} key={index} text={val.text} />),
  Pickup: (props) => [{ text: 'Sushi Grill and Pizza' }, { text: 'Sushi Palace' }, { text: 'Sushi Palace' }].map((val, index) => <Container {...props} key={index} text={val.text} />)
},
  {
    tabBarOptions: {
      activeTintColor: '#f5a623',
      inactiveTintColor: 'gray',
      tabStyle: {
        backgroundColor: '#fafafa'
      },
      style: {
        backgroundColor: '#fafafa',
        width: '90%',
        margin: 10,
        marginLeft: '5%'
      }
    },

  }
)