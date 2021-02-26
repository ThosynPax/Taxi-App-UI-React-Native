import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SelectMode from './SelectMode';
import DriverLogin from './DriverLogin';
import DriverSignup from './DriverSignup';
import Login from './Login';
import Signup from './Signup';
import Forgot from './Forgot';
import OTP from './OTP';
import PIN from './PIN';
import DashboardDriver from './Driver/DashboardDriver';
import Dashboard from './Screen/Dashboard';

const stackNavigatorOptions = {
  headerShown: false,
};
const AppNavigator = createStackNavigator(
  {
    SelectMode: {screen: SelectMode},
    DriverLogin: {screen: DriverLogin},
    Login: {screen: Login},
    Signup: {screen: Signup},
    DriverSignup: {screen: DriverSignup},
    DashboardDriver: {screen: DashboardDriver},
    Dashboard: {screen: Dashboard},
    Forgot: {screen: Forgot},
    OTP: {screen: OTP},
    PIN: {screen: PIN},
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  },
);
export default createAppContainer(AppNavigator);
