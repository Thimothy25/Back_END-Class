import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Input from './componenents/Input';
import Button from './componenents/Button';
import Title from './componenents/Title';

const Registration = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    const data = {
      name,
      userName,
      
      email,
      address,
      phoneNumber,
    };
    console.log('Registration Data:', data);
  };

  return (
    <View style={styles.container}>
      <Title title="Registration" />

      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={setName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={setUserName}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={setEmail}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={setAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onChangeText={text => {
          const filteredText = text.replace(/[^0-9]/g, '');
          setPhoneNumber(filteredText);
        }}
        value={phoneNumber}
        keyboardType="numeric"
        maxLength={15}
      />

      <Button label="Register" onPress={handleRegister} color="#C65BCF" />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
