import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/types';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
    const [email, setEmail] = useState(''); // Inicializa o estado do email como uma string vazia
    const [senha, setSenha] = useState(''); // Inicializa o estado da senha como uma string vazia
    const navigation = useNavigation<NavigationProps>();

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Senha:', senha);
    };

  return (
    <View style={styles.container}>
        <Image 
        source={require('../image/logo.jpg')} 
        style={styles.logo} 
        />
        <Text style={styles.texto_login}>Login</Text>
        <View style= {styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#888" value={email} onChangeText={setEmail}></TextInput>
          <TextInput style={styles.input} placeholder='Senha' placeholderTextColor="#888" secureTextEntry value={senha} onChangeText={setSenha}></TextInput>
        </View>
        <TouchableOpacity style={styles.button_esqueceu_senha} onPress={handleLogin}>
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_NovaConta} onPress={() => navigation.navigate('Cadastro')}>
          <Text>Criar Uma nova conta</Text>
        </TouchableOpacity>
        <Text style={styles.continue}>Ou continue com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',   
    },
    logo: {
      width: 230,
      height: 230,
      resizeMode: 'contain',
      position: 'absolute',
      top: 20, 
    },
    texto_login: {
      color: '#0E2F5A',
      fontSize: 30,
      position: 'absolute',
      top: 240, 
    },
    inputContainer: {
      width: '80%',
      position: 'absolute',
      top: 350, 
    },
    input: {
      height: 50,
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      marginBottom: 20,
      paddingLeft: 15,
      fontSize: 16,
    },
    button_esqueceu_senha: {
      position: 'absolute',
      top: 480, 
      right: 40, 
    },
    button: {
      width: '80%',
      height: 50,
      backgroundColor: '#0E2F5A',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 520, 
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    button_NovaConta: {
      position: 'absolute',
      top: 590, // Posição fixa do botão de nova conta
    },
    continue: {
      position: 'absolute',
      top: 650, // Posição fixa do continue
    }
});

