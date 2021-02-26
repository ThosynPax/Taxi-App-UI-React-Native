/* eslint-disable react-native/no-inline-styles */
// Switch Screen out of the Navigation Drawer
// https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/

import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Geolocation Page
            {'\n'}
            This is where to add the map
          </Text>
        </View>
        <Text style={styles.footerHeading}>Ride Request Section</Text>
        <Text style={styles.footerText}>And the Offer your fare section</Text>
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

export default Profile;
