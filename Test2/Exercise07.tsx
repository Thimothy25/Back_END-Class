import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from './componenents/Title';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Title title="Users List" />
      {users.map(user => {
        const {id, name, username, email, phone, address} = user;
        return (
          <View key={id} style={styles.userContainer}>
            <Text style={styles.text}>
              <Text style={styles.Title}>Name: </Text>
              {name}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.Title}>Username: </Text>
              {username}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.Title}>Email: </Text>
              {email}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.Title}>Address: </Text>
              {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.Title}>Phone: </Text>
              {phone}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  userContainer: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  Title: {
    fontWeight: 'bold',
  },
});
