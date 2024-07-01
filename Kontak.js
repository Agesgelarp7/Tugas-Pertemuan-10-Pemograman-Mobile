import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Kontak({ judul, telpon, gambar }) {
  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.telp}>{telpon}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#b2dfdb',
    paddingBottom: 10,
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  teks: { flex: 1 },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#00796b',
  },
  telp: {
    fontSize: 14,
    color: '#004d40',
  },
});
