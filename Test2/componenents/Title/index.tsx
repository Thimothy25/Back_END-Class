import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Title = ({title, ...rest}) => {
  return (
    <Text style={styles.title} {...rest}>
      {title}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'black',
    marginVertical: 20,
    fontWeight: 'bold',
  },
});
