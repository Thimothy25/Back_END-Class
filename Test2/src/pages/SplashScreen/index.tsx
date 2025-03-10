import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/icon';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Money Tracker</Text>
      <Text style={styles.title2}>By Moty</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    color: 'black',
  },
  title2: {
    fontSize: 20,
    fontStyle: 'italic',
  },
});
