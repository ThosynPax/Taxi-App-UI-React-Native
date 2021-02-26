/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class PIN extends React.Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.container} />
        <Text style={styles.inputText}>Enter New Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter New Password"
            placeholderTextColor="#ece9df"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Confirm New Password"
            placeholderTextColor="#ece9df"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigate('Dashboard')}>
          <Text style={styles.loginText}>CONFIRM</Text>
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
    padding: 40,
    backgroundColor: '#008000',
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
