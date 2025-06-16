import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import LoginScreen from '../screen/login'; 
import CadastroScreen from '../screen/cadastro'; 
import HomeScreen from '../screen/home'; 
import SearchScreen from '../screen/search';
import ProfileScreen from '../screen/profile';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types'; // ajuste o caminho se precisar
import IAconversationScreen from '../screen/IAconversation';
import NotificationScreen from '../screen/notificacions'; 

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Procurar" component={SearchScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Perfil" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="IAconversation" component={IAconversationScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Notificacoes" component={NotificationScreen} options={{headerShown: false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
