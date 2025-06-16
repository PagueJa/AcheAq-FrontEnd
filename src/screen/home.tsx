import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper'; 
import { MaterialIcons } from '@expo/vector-icons';
import MyFooter from '../components/footer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/types';


type NavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

const SearchHistoryItem = ({ image, name, date }) => {
  return (
    <TouchableOpacity style={styles.Container_Historico}>
      <Image source={{ uri: image }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.data}>Última pesquisa: {date}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const data = [
    { id: '1', name: 'Rtx 4060 Galaxy', date: '20/10/2024', image: '../image/4060ti.webp' },
    { id: '2', name: 'Monitor Samsung 100hz', date: '5/6/2024', image: '' },
    { id: '3', name: 'Mouse Gamer', date: '5/6/2024', image: '' }
  ];
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../image/haloinfinite.webp')} style={styles.image}>
        <View style={styles.overlay}/>
        <View style={styles.conteiner_apresentacao}>
          <Text style={styles.text_apresentacao_1}>Olá, Alexandre!</Text>
          <Text style={styles.text_apresentacao_2}>Procure seus produtos aqui</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Digite Aqui"
                placeholderTextColor="#888"
                left={<TextInput.Icon icon="magnify" size={30} color="#888" />}  
                style={styles.digite_aqui}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => navigation.navigate('Procurar')}>Procurar</Text>
              <TextInput.Icon icon="arrow-right" size={24} color="#FFFFFF" style={styles.arrow} />
            </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Título do Histórico */}
      <View>
          <Text style={styles.titulo_historico}>Histórico de Pesquisa</Text>
      </View>

      {/* Lista de Histórico */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SearchHistoryItem {...item} />}
        style={styles.listContainer}
      />

      {/* Footer */}
      <View style={styles.footerContainer}>
        <MyFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 408,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.6,
  },
  conteiner_apresentacao: {
    width: 350,
    marginBottom: 100,
  },
  text_apresentacao_1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  text_apresentacao_2: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    padding: 10,
  },
  inputContainer: {
    width: '80%',
    position: 'absolute',
    top: 240,
    backgroundColor: 'transparent',
  },
  digite_aqui: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '102%',
    fontSize: 15,
    marginLeft: -10,
    borderRadius: 10,
  },
  button: {
    width: '70%',
    height: 55,
    backgroundColor: '#100F29',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 70, 
    marginLeft:37
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginRight: 47,
  },
  arrow:{
    marginLeft:107,
    top: 2, 
  },
  titulo_historico:{
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 23,
    alignSelf: 'flex-start',
    marginLeft: -100,
  },
  listContainer: {
    width: '100%',
    marginTop: 17,
  },
  Container_Historico: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#00008B'
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: 15
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  data: {
    fontSize: 12,
    color: 'gray'
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
});
