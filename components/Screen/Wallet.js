/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

export default function Wallet() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 32}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer} />
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 40,
                  fontFamily: 'Quicksand-Bold',
                  color: '#fff',
                  fontWeight: '300',
                },
              ]}>
              {'\u20A6'}7,456.00
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 15,
                  fontFamily: 'Quicksand-Light',
                  color: '#fff',
                  textTransform: 'uppercase',
                  top: 2,
                },
              ]}>
              Available Balance
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.text,
                {
                  color: '#2ECC71',
                  fontFamily: 'Quicksand-Medium',
                  fontWeight: '300',
                  borderColor: '#2ECC71',
                  textAlign: 'right',
                  right: 50,
                  marginLeft: 50,
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  padding: 5,
                },
              ]}>
              Add Funds
            </Text>
          </View>
        </View>
        <Text style={[styles.subText, styles.recent]}>
          Latest Transactions{'\n'}
        </Text>
        <View style={{alignItems: 'center'}}>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicatorDebit} />
            <View style={{width: 250}}>
              <Text
                style={[
                  styles.text,
                  {
                    color: '#41444B',
                    fontFamily: 'Quicksand-Medium',
                    fontWeight: '300',
                  },
                ]}>
                Debit - Ride -
                <Text style={{fontWeight: '400'}}> {'\u20A6'}2,000.00</Text>{' '}
                <Text style={{fontWeight: 'bold', textAlign: 'right'}}>
                  {'\n'}
                  Jan-08-2021 - 2:35 PM{' '}
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={styles.activityIndicatorCredit} />
            <View style={{width: 250}}>
              <Text
                style={[
                  styles.text,
                  {
                    color: '#41444B',
                    fontFamily: 'Quicksand-Medium',
                    fontWeight: '300',
                  },
                ]}>
                Credit -
                <Text style={{fontWeight: '400'}}> {'\u20A6'}5,000.00</Text>{' '}
                <Text style={{fontWeight: 'bold', textAlign: 'left'}}>
                  {'\n'}
                  Jan-08-2021 - 2:35 PM{' '}
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={styles.activityIndicatorCredit} />
            <View style={{width: 250}}>
              <Text
                style={[
                  styles.text,
                  {
                    color: '#41444B',
                    fontFamily: 'Quicksand-Medium',
                    fontWeight: '300',
                  },
                ]}>
                Credit -
                <Text style={{fontWeight: '400'}}> {'\u20A6'}2,000.00</Text>{' '}
                <Text style={{fontWeight: 'bold', textAlign: 'left'}}>
                  {'\n'}
                  Jan-08-2021 - 2:35 PM{' '}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicatorDebit} />
            <View style={{width: 250}}>
              <Text
                style={[
                  styles.text,
                  {
                    color: '#41444B',
                    fontFamily: 'Quicksand-Medium',
                    fontWeight: '300',
                  },
                ]}>
                Credit -
                <Text style={{fontWeight: '400'}}> {'\u20A6'}4,000.00</Text>{' '}
                <Text style={{fontWeight: 'bold', textAlign: 'left'}}>
                  {'\n'}
                  Jan-08-2021 - 2:35 PM{' '}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicatorDebit} />
            <View style={{width: 250}}>
              <Text
                style={[
                  styles.text,
                  {
                    color: '#41444B',
                    fontFamily: 'Quicksand-Medium',
                    fontWeight: '300',
                  },
                ]}>
                Debit -
                <Text style={{fontWeight: '400'}}> {'\u20A6'}2,000.00</Text>{' '}
                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: 'bold',
                      textAlign: 'left',
                    },
                  ]}>
                  {'\n'}
                  Jan-08-2021 - 2:35 PM{' '}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={{width: 250}}>
              <Text
                style={[
                  styles.text,
                  {
                    color: '#41444B',
                    fontFamily: 'Quicksand-Medium',
                    fontWeight: '300',
                    textAlign: 'center',
                  },
                ]}>
                View All Transactions{' '}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    fontSize: 20,
    color: '#000',
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
    backgroundColor: '#2ECC71',
    position: 'absolute',
    top: '20%',
    marginTop: -50,
    marginLeft: 30,
    marginRight: 30,
    width: '80%',
    height: '80%',
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
    marginTop: 22,
    marginBottom: 6,
    fontSize: 12,
    fontFamily: 'Quicksand-Medium',
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityIndicatorDebit: {
    backgroundColor: '#000000',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  activityIndicatorCredit: {
    backgroundColor: '#2ECC71',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
