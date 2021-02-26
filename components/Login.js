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

export default class Login extends React.Component {
  state = {
    text: '',
    password: '',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#2ECC71" />
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
          <Text style={styles.rider}>Rider Login</Text>
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Phone Number"
            placeholderTextColor="#ece9df"
            keyboardType="phone-pad"
            onChangeText={(text) => this.setState({text: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Password"
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
          onPress={() => navigate('Dashboard')}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Signup')}>
          <Text style={styles.logintext}>Not a user yet? Signup</Text>
        </TouchableOpacity>
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
    top: -50,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Quicksand-Light',
  },
  forgot: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
  },
  rider: {
    color: '#ece9df',
    fontSize: 30,
    paddingBottom: 20,
    fontFamily: 'Quicksand-Medium',
    fontWeight: '200',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#ece9df',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 50,
    fontFamily: 'Quicksand-Regular',
  },
  loginText: {
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
    color: '#2ECC71',
  },
  logintext: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
    bottom: 25,
  },
});
