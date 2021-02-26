/* eslint-disable react-native/no-inline-styles */
/**
 * React Native Aktaxi App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

export default class SelectMode extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#2ECC71" />
        <ImageBackground
          source={require('../Splash.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.container}>
          <Image
            style={styles.aktaxilogo}
            source={require('../logo-default.png')}
          />
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Quicksand-Light',
              fontSize: 16,
              top: 20,
            }}>
            more than your taxi
          </Text>
        </View>
        <View style={styles.container}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Quicksand-Bold',
              fontSize: 30,
              marginTop: 105,
            }}>
            Trips On Your Terms!
          </Text>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Quicksand-Regular',
              fontSize: 15,
              marginTop: 15,
              fontWeight: '400',
              textAlign: 'center',
              paddingLeft: 20,
              paddingRight: 20,
              lineHeight: 20,
            }}>
            A better way to get a ride at your own fair price.{'\n'}A Nigerian
            first indigenous ride hailing company giving drivers opportunity to
            receive payment directly in cash or wallet
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 40,
          }}>
          <View style={styles.loginBtndriver}>
            <TouchableOpacity onPress={() => navigate('DriverLogin')}>
              <Text style={styles.loginText}>Driver</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginBtnrider}>
            <TouchableOpacity onPress={() => navigate('Login')}>
              <Text style={styles.loginTextRider}>Rider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aktaxilogo: {
    height: 95,
    width: 220,
    top: 20,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loginBtndriver: {
    width: '50%',
    backgroundColor: '#ece9df',
    borderWidth: 1,
    padding: 10,
    borderColor: '#ece9df',
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginRight: -50,
  },
  loginBtnrider: {
    width: '50%',
    paddingLeft: 20,
    left: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 10,
    borderColor: '#ece9df',
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  loginText: {
    color: '#2ECC71',
    fontSize: 24,
    fontFamily: 'Quicksand-Medium',
  },
  loginTextRider: {
    color: '#ece9df',
    fontSize: 24,
    fontFamily: 'Quicksand-Medium',
  },
});
