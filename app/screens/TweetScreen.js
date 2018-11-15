import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';
import Tweet from '../components/home/Tweet';

const TweetScreen = ({ navigation }) => (

    <Tweet
      tweet={navigation.state.params}
    />
);

TweetScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

TweetScreen.navigationOptions = {
  title: 'Tweet',
};

export default TweetScreen;