import {StyleSheet, View} from 'react-native';
import React from 'react';
import Input from './componenents/Input';
import Button from './componenents/Button';
import Title from './componenents/Title';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Input label="Address" placeholder="Masukan alamat anda" />
      <Button label="Sign in " />
      <Button label="Sign in by Google" color="red" />
      <Button label="Sing in by Facebook" color="blue" />
      <Button label="Sing in by Apple ID" color="black" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
