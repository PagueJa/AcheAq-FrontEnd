import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MyFooter from '../components/footer';

const products = [
  {
    id: '1',
    
    name: 'Placa De Vídeo Galax Geforce Rtx 4060 Ti 8gb Gddr6 128 Bits',
    price: 1600,
    store: 'Magazine Luiza',
  },
  {
    id: '2',
    
    name: 'Placa De Vídeo Galax Geforce Rtx 4060 Ti 8gb Gddr6 128 Bits',
    price: 1799,
    store: 'Terabyte',
  },
  {
    id: '3',
    
    name: 'Placa De Vídeo Galax Geforce Rtx 4060 Ti 8gb Gddr6 128 Bits',
    price: 2699,
    store: 'Aliexpress',
  },
  {
    id: '4',
    
    name: 'Placa De Vídeo Galax Geforce Rtx 4060 Ti 8gb Gddr6 128 Bits',
    price: 2800,
    store: 'Kabum',
  },
  {
    id: '5',
    
    name: 'Placa De Vídeo Galax Geforce Rtx 4060 Ti 8gb Gddr6 128 Bits',
    price: 2915,
    store: 'Kabum',
  },
  {
    id: '6',
    
    name: 'Placa De Vídeo Galax Geforce Rtx 4060 Ti 8gb Gddr6 128 Bits',
    price: 2900,
    store: 'Kabum',
  },
  
];

export default function searchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Rtx 4060 Galaxy</Text>
      </View>

      {/* Média do produto */}
      <View style={styles.averageBox}>
        <Text style={styles.averageText}>Média do produto:  R$ 2500</Text>
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image style={styles.image} />
            <View style={styles.cardText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>
              <Text style={styles.store}>{item.store}</Text>
            </View>
          </View>
        )}
      />

      {/* Rodapé */}
      <MyFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 87,
    alignItems: 'center',
  },
  averageBox: {
    backgroundColor: '#191932',
    marginHorizontal: 16,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  averageText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 100, // espaço pro footer
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
  },
  cardText: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 4,
  },
  store: {
    color: '#999',
    fontSize: 12,
  },
});
