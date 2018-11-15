import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Home from '../components/home/home' //Import the component file

const HomeScreen = ({ navigation }) => (

  <Home
   	navigation={navigation}
  />

);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;