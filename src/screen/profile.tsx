import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import MyFooter from '../components/footer';

export default function PerfilScreen() {
  const [name, setName] = useState('Alexandre Pires');
  const [email, setEmail] = useState('alexandre.pires123@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <Text style={styles.headerText}>Perfil</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={styles.editPhotoText}>Editar Foto</Text>
        </View>

      
        <View style={styles.campos}>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nome"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color="gray"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <Button
            mode="contained"
            onPress={() => console.log({ name, email, password })}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Confirmar edição
          </Button>
        </View>
      </View>

      <MyFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f5b',
  },

  header: {
    marginTop: 70,
    height: 160,
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    
  },

  form: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -40, 
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
    paddingTop: 60, 
    alignItems: 'center',
  },

  imageContainer: {
    alignItems: 'center',
    marginTop: -110, 
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#ccc',
  },

  editPhotoText: {
    marginTop: 8,
    color: '#001f5b',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },

  campos: {
    marginTop: 90,
    width: '95%',
    
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingBottom: 5,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#001f5b',
    borderRadius: 12,
    paddingVertical: 6,
    elevation: 4,
  },

  buttonLabel: {
    fontSize: 16,
  },
});
