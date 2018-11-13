import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Home from '../components/home/home' //Import the component file

const SettingsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Desde Settings Screen</Text>
  </View>
);

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44'
  },
});

export default SettingsScreen;