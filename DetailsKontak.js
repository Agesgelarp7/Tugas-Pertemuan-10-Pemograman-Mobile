import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

const DetailsKontak = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.img} />
      <Text style={styles.title}>{friend.name}</Text>
      <Text style={styles.description}>{friend.phone}</Text>
      <Text style={styles.bio}>{friend.bio}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} color="#1e90ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#b2dfdb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796b',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#004d40',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#00695c',
  },
});

export default DetailsKontak;
