/* eslint-disable prettier/prettier */
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Home from '../screens/Home';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
});

export default createAppContainer(RootDrawerNavigator);
