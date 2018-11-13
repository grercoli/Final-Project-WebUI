import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Home from '../components/home/home' //Import the component file

const SearchScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Desde Search Screen</Text>
  </View>
);

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SearchScreen.navigationOptions = {
  title: 'Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44'
  },
});

export default SearchScreen;