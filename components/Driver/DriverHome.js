/* eslint-disable react-native/no-inline-styles */
// Switch Screen out of the Navigation Drawer
// https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/

import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const DriverHome = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{...StyleSheet.absoluteFillObject}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});

export default DriverHome;
