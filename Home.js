import React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import Kontak from './Kontak';

const friends = [
  { id: '1', name: 'Arya Pangestu', phone: '0812-5567-4392 ', image: require('../assets/ape.jpg'), bio: 'Otomotif' },
  { id: '2', name: 'Carol Dwi Putra', phone: '0821-4357-9175', image: require('../assets/carol.jpg'), bio: 'Genshin Number One' },
  { id: '3', name: 'Luthfi Fauzan Achmad', phone: '0821-5723-8721', image: require('../assets/lutfi.jpg'), bio: 'Gojo Aeru' },
  { id: '4', name: 'Muhamad Fakhri Khairil Imam', phone: '0857-5782-0221', image: require('../assets/riri.jpg'), bio: 'Hala Madrid' },
  { id: '5', name: 'Raka Wahyu Sagara ', phone: '0812-9234-5762', image: require('../assets/raka.jpg'), bio: 'Jungler 8Pm' },
  { id: '6', name: 'Rizky Maulana Yusuf', phone: '0857-2165-8652', image: require('../assets/kyy.jpg'), bio: 'Top Global HOK' },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Teman</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendContainer}>
            <Kontak judul={item.name} telpon={item.phone} gambar={item.image} />
            <Button
              title="Lihat Detail"
              onPress={() => navigation.navigate('DetailsKontak', { friend: item })}
              color="#1e90ff"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#00796b',
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default Home;
