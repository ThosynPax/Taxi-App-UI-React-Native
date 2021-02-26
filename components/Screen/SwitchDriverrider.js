/* eslint-disable react-native/no-inline-styles */
//React Native Switch
//https://aboutreact.com/react-native-switch/

//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {Switch, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    setSwitchValue(value);
    //state changes according to switch
    //which will result in re-render the text
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/*Text to show the text according to switch condition*/}
        <Text>{switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={{marginTop: 30}}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
