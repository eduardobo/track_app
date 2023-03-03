import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Account from './src/screens/Account';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import TrackCreate from './src/screens/TrackCreate';
import TrackDetail from './src/screens/TrackDetail';
import TrackList from './src/screens/TrackList';
import ResolveAuth from './src/screens/ResolveAuth';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuth,
  loginFlow: createStackNavigator( {
    Signup: Signup,
    Signin: Signin
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackList,
      TrackDetail: TrackDetail
    }),
    Account: Account,
    TrackCreate: TrackCreate,
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator); }} />
    </AuthProvider>
  );
};
