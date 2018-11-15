import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Ionicons } from '@expo/vector-icons';
import Routes from '../config/routes';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Home from './home/home';
import TweetScreen from '../screens/TweetScreen';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Settings: SettingsScreen, 
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch(routeName) {
          case 'Home':
            iconName = 'md-home';
            break;
          case 'Search':
            iconName = 'md-search';
            break;
          case 'Settings':
            iconName = 'md-settings';
            break;
        }

        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000',
      showIcon: true,
      showLabel: false,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
      iconStyle: {
        width: 50,
        height: 50,
      },
      indicatorStyle: {
        backgroundColor: '#000',
      },
    }
});

const TweetStack = createStackNavigator({
  Home: {
    screen: RootNavigator,
    navigationOptions: ({ navigation }) => ({
      title: `Gwitter`,
    }),
  },
  Tweet: TweetScreen
});

const AppWithNavigationState = reduxifyNavigator(TweetStack, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);


export { TweetStack, AppNavigator, middleware };