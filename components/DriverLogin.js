/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class DriverLogin extends React.Component {
  state = {
    text: '',
    password: '',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ece9df" />
        <ImageBackground
          source={require('../Splash.png')}
          style={styles.image}
        />
        <View style={styles.container} />
        <Image
          style={styles.aktaxilogo}
          source={require('../logo-default.png')}
        />
        <TouchableOpacity>
          <Text style={styles.driver}>Driver Login</Text>
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Phone Number"
            placeholderTextColor="#ece9df"
            onChangeText={(text) => this.setState({text: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Pin"
            placeholderTextColor="#ece9df"
            onChangeText={(text) => this.setState({password: text})}
            require
          />
        </View>
        <TouchableOpacity>
          <Text onPress={() => navigate('Forgot')} style={styles.forgot}>
            Forgot Pin?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('DashboardDriver')}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('DriverSignup')}>
          <Text style={styles.logintext}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ece9df',
    borderRadius: 20,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#ece9df',
    fontSize: 20,
  },
  forgot: {
    color: '#ece9df',
    fontSize: 20,
  },
  driver: {
    color: '#ece9df',
    fontSize: 25,
    paddingBottom: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#ece9df',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: '#008000',
    fontSize: 20,
  },
  logintext: {
    color: '#ece9df',
    fontSize: 20,
  },
  aktaxilogo: {
    height: 110,
    width: 250,
    marginBottom: 90,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '120%',
    height: 600,
  },
});
