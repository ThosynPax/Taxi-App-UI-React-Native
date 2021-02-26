/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import {Platform} from 'react-native';
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

import Profile from './Profile';
import Settings from './Settings';
import MyRides from './MyRides';
import AboutUs from './AboutUs';
import Wallet from './Wallet';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

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
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Book a Ride', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#2ECC71', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Quicksand-Medium',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const secondScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#2ECC71', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Quicksand-Medium',
        },
      }}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const fourthScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Wallet">
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'My Wallet', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#2ECC71', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Quicksand-Medium',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const fifthScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="MyRides">
      <Stack.Screen
        name="MyRides"
        component={MyRides}
        options={{
          title: 'My Rides', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#2ECC71', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Quicksand-Medium',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const sixthScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="AboutUs">
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          title: 'About Us', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#2ECC71', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Quicksand-Medium',
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
          activeTintColor: '#2ECC71',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: 'Book a Ride',
            activeTintColor: '#2ECC71',
            labelStyle: {fontFamily: 'Quicksand'},
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="ProfileSettings"
          options={{
            drawerLabel: 'Profile Settings',
            activeTintColor: '#2ECC71',
          }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="Wallet"
          options={{
            drawerLabel: 'My Wallet',
            activeTintColor: '#2ECC71',
          }}
          component={fourthScreenStack}
        />
        <Drawer.Screen
          name="MyRides"
          options={{
            drawerLabel: 'My Rides',
            activeTintColor: '#2ECC71',
          }}
          component={fifthScreenStack}
        />
        <Drawer.Screen
          name="AboutUs"
          options={{
            drawerLabel: 'About Us',
            activeTintColor: '#2ECC71',
          }}
          component={sixthScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
