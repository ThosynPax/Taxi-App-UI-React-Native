import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';

import OTPTextView from 'react-native-otp-textinput';

export default class OTP extends Component {
  state = {
    otpInput: '',
    inputText: '',
  };

  alertText = () => {
    const {otpInput = ''} = this.state;
    if (otpInput) {
      Alert.alert(otpInput);
    }
  };

  setText = () => {
    this.otpInput.setValue('123456');
  };

  clear = () => {
    this.input1.clear();
  };

  updateOtpText = () => {
    // will automatically trigger handleOnTextChange callback passed
    this.input1.setValue(this.state.inputText);
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../Splash.png')}
          style={styles.backgroundImage}
        />
        <Text style={styles.instructions}>Enter otp sent your phone</Text>
        <OTPTextView
          ref={(e) => (this.input1 = e)}
          containerStyle={styles.textInputContainer}
          handleTextChange={(text) => this.setState({otpInput: text})}
          inputCount={6}
          keyboardType="numeric"
          color="#fff"
        />
        <View style={styles.buttonWrapper}>
          <Button title="Clear" color="#2ECC71" onPress={this.clear} />
          <Button
            style={styles.buttonStyle}
            title="Resend OTP"
            color="#2ECC71"
            onPress={this.updateOtpText}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={() => navigate('Dashboard')}
            style={styles.loginBtn}>
            <Text style={styles.loginStyle}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
    fontFamily: 'Quicksand-Medium',
  },
  textInputContainer: {
    marginBottom: 10,
    padding: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '60%',
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#ece9df',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Quicksand-Medium',
    top: 40,
  },
  loginStyle: {
    fontSize: 20,
    fontFamily: 'Quicksand-Medium',
    color: '#2ECC71',
  },
});
