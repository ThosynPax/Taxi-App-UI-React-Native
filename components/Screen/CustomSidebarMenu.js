/* eslint-disable react-native/no-inline-styles */
// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      />
      <View style={styles.user}>
        <Text style={styles.userinput}>Sam Jose</Text>
        <Text style={styles.userinputemail}>SamJose@mail.com</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.customItem}>
          <Text
            style={{fontFamily: 'Quicksand-Medium'}}
            onPress={() => {
              Linking.openURL('#');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
        <DrawerItem
          label="Logout"
          labelStyle={{fontFamily: 'Quicksand-Medium'}}
          onPress={() => Linking.openURL('#')}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Quicksand-Medium',
  },
  user: {
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: -5,
    marginBottom: -5,
  },
  userinput: {
    fontSize: 22,
    fontFamily: 'Quicksand-Medium',
  },
  userinputemail: {
    fontSize: 15,
    fontFamily: 'Quicksand-Regular',
  },
});

export default CustomSidebarMenu;
