/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import DriverHome from './DriverHome';
import ProfileSettings from './ProfileSettings';
import MyBookings from './MyBookings';
import BookingRequests from './BookingRequests';
import DriverWallet from './DriverWallet';

// Import Custom Sidebar
import CustomSidebarMenuDriver from './CustomSidebarMenuDriver';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const firstScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="DriverHome">
      <Stack.Screen
        name="DriverHome"
        component={DriverHome}
        options={{
          title: 'Yu', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#008000', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const secondScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileSettings"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#008000', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
          title: 'ProfileSettings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const fourthScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="DriverWallet">
      <Stack.Screen
        name="DriverWallet"
        component={DriverWallet}
        options={{
          title: 'My Wallet', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#008000', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const fifthScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="BookingRequests">
      <Stack.Screen
        name="BookingRequests"
        component={BookingRequests}
        options={{
          title: 'Booking Requests', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#008000', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const sixthScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="MyBookings">
      <Stack.Screen
        name="MyBookings"
        component={MyBookings}
        options={{
          title: 'My Rides', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#008000', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={(props) => <CustomSidebarMenuDriver {...props} />}>
        <Drawer.Screen
          name="DriverHome"
          options={{
            drawerLabel: 'Dashboard',
            activeTintColor: '#e91e63',
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="BookingRequests"
          options={{
            drawerLabel: 'Booking Requests',
            activeTintColor: '#e91e63',
          }}
          component={fifthScreenStack}
        />
        <Drawer.Screen
          name="ProfileSettings"
          options={{
            drawerLabel: 'Profile Settings',
            activeTintColor: '#e91e63',
          }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="DriverWallet"
          options={{
            drawerLabel: 'My Wallet',
            activeTintColor: '#e91e63',
          }}
          component={fourthScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
