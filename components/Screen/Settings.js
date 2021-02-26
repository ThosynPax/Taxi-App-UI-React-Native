/* eslint-disable react-native/no-inline-styles */
// Switch Screen out of the Navigation Drawer
// https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/

import * as React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const Settings = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>johndoe@mail.com</Text>
          </View>
          <View
            style={[
              styles.text,
              {
                color: '#41444B',
                borderBottomWidth: 1,
                textAlign: 'left',
                fontWeight: '300',
                top: -60,
                margin: 10,
              },
            ]}>
            <Text
              style={[
                styles.text,
                {
                  color: '#41444B',
                  fontWeight: '300',
                  margin: 10,
                  fontFamily: 'Quicksand-Bold',
                  top: 50,
                },
              ]}>
              Name:{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#41444B',
                  fontWeight: '300',
                  margin: 10,
                  textAlign: 'left',
                  fontFamily: 'Quicksand-Regular',
                  top: 40,
                },
              ]}>
              John Doe{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#2ECC71',
                  fontWeight: '300',
                  margin: 10,
                  textAlign: 'right',
                  fontFamily: 'Quicksand-Bold',
                  top: 0,
                },
              ]}>
              EDIT{' '}
            </Text>
          </View>
          {/* Section 2 Profile */}
          <View
            style={[
              styles.text,
              {
                color: '#41444B',
                borderBottomWidth: 1,
                textAlign: 'left',
                fontWeight: '300',
                top: -80,
                margin: 10,
              },
            ]}>
            <Text
              style={[
                styles.text,
                {
                  color: '#41444B',
                  fontWeight: '300',
                  margin: 10,
                  fontFamily: 'Quicksand-Bold',
                  top: 50,
                },
              ]}>
              Email Address:{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#41444B',
                  fontWeight: '300',
                  margin: 10,
                  textAlign: 'left',
                  fontFamily: 'Quicksand-Regular',
                  top: 40,
                },
              ]}>
              John Doe@mail.com{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#2ECC71',
                  fontWeight: '300',
                  margin: 10,
                  textAlign: 'right',
                  fontFamily: 'Quicksand-Bold',
                  top: 0,
                },
              ]}>
              EDIT{' '}
            </Text>
          </View>
          {/* Section 3 Profile */}
          <View
            style={[
              styles.text,
              {
                color: '#41444B',
                borderBottomWidth: 1,
                textAlign: 'left',
                fontWeight: '300',
                top: -80,
                margin: 10,
              },
            ]}>
            <Text
              style={[
                styles.text,
                {
                  color: '#41444B',
                  fontWeight: '300',
                  margin: 10,
                  fontFamily: 'Quicksand-Bold',
                  top: 50,
                },
              ]}>
              Email Address:{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#41444B',
                  fontWeight: '300',
                  margin: 10,
                  textAlign: 'left',
                  fontFamily: 'Quicksand-Regular',
                  top: 40,
                },
              ]}>
              John Doe@mail.com{' '}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#2ECC71',
                  fontWeight: '300',
                  margin: 10,
                  textAlign: 'right',
                  fontFamily: 'Quicksand-Bold',
                  top: 0,
                },
              ]}>
              EDIT{' '}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2ECC71',
    height: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 50,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
    fontFamily: 'Quicksand-Medium',
  },
  info: {
    fontSize: 16,
    color: '#2ECC71',
    marginTop: 10,
    fontFamily: 'Quicksand-Light',
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'left',
    fontFamily: 'Quicksand-Medium',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#2ECC71',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  dm: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#34FFB9',
    position: 'absolute',
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: '#41444B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: '50%',
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.38)',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: '#CABFAB',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});

export default Settings;
