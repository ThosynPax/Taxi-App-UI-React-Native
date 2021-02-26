/* eslint-disable react-native/no-inline-styles */
// Switch Screen out of the Navigation Drawer
// https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontFamily: 'Quicksand-Regular',
            textAlign: 'left',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 40,
            marginBottom: 40,
          }}>
          {' '}
          {'\u20A6'}20,000.00
        </Text>
        <Text
          style={{
            fontFamily: 'Quicksand-Regular',
            color: '#fff',
            fontSize: 40,
            marginTop: 60,
            textAlign: 'right',
            paddingRight: 20,
          }}>
          {' '}
          Sam Jose
        </Text>
      </View>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{fontFamily: 'Quicksand-Medium', color: '#2ECC71'}}>
              Add Funds
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonTransactions}>
          <TouchableOpacity style={styles.buttonTransactions}>
            <Text style={{fontFamily: 'Quicksand-Medium', color: '#2ECC71'}}>
              Latest Transaction
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#2ECC71',
    height: 200,
    borderRadius: 20,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  buttonTransactions: {
    marginLeft: 10,
    bottom: 10,
    fontSize: 20,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#2ECC71',
    marginTop: 10,
    fontFamily: 'Quicksand-Light',
  },
  buttonContainer: {
    marginTop: -60,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2ECC71',
  },
});

export default Settings;
