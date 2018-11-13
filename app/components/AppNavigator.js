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
        padding:20,
      },
      iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      indicatorStyle: {
        backgroundColor: '#000',
      },
    }
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);


export { RootNavigator, AppNavigator, middleware };