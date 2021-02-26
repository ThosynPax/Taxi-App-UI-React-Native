/* eslint-disable react-native/no-inline-styles */
// Switch Screen out of the Navigation Drawer
// https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/

import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const AboutUs = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>About Us</Text>
        </View>
        <Text style={styles.footerHeading}>
          React Navigation Drawer with Sectioned Menu
        </Text>
        <Text style={styles.footerText}>Sign Out</Text>
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

export default AboutUs;
