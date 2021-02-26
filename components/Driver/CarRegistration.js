// components/signup.js

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default class CarRegistration extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      text: '',
      email: '',
      password: '',
      isLoading: false,
    };
  }
  render() {
    const {navigate} = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../Splash.png')}
          style={styles.backgroundImage}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          placeholderTextColor="#ece9df"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email Address"
          placeholderTextColor="#ece9df"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          keyboardType="numeric"
          placeholder="Phone Number"
          placeholderTextColor="#ece9df"
          value={this.state.ext}
          onChangeText={(val) => this.updateInputVal(val, 'text')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="#ece9df"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Confirm Password"
          placeholderTextColor="#ece9df"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => navigate('OTP')}
          style={styles.loginBtn}>
          <Text style={styles.loginStyle}>SignUp</Text>
        </TouchableOpacity>

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    color: '#ffffff',
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#fff',
    borderBottomWidth: 1,
    fontFamily: 'Quicksand-Regular',
  },
  loginText: {
    color: '#fff',
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#ece9df',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Quicksand-Regular',
  },
  loginStyle: {
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
    color: '#2ECC71',
  },
});
