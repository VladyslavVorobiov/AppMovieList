import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/containers/HomeScreen/HomeScreen';
import CarDetails from './src/components/CardDetails/CardDetails';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: CarDetails,
  },
  {
    initialRouteName: 'Home',
  }
  );

const App = createAppContainer(AppNavigator);
export default App;
