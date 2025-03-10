import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topContainer} />
      <View style={styles.container}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
      <View style={styles.bottomContainer} />
    </SafeAreaView>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: 'purple',
    flex: 1,
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  redBox: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  greenBox: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  blueBox: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
