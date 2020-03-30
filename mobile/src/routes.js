import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Info from './pages/Info';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createStackNavigator({
          SignIn,
          SignUp,
        }),
        App: createStackNavigator({
          Dashboard,
          Info,
          AddUser,
          EditUser,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
