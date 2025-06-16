import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/types';

const Footer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  const tabs = [
    { key: 'search', icon: 'magnify' },
    { key: 'home', icon: 'home' },
    { key: 'profile', icon: 'account' },
    { key: 'notifications', icon: 'bell' },
  ];

  const routeMap = {
    home: 'Home',
    search: 'IAconversation',
    profile: 'Perfil',
    notifications: 'Notificacoes',
  } as const;

  // detecta qual aba está ativa com base no nome da rota atual
  const getActiveTab = (): keyof typeof routeMap => {
    const currentRoute = route.name;
    const match = Object.entries(routeMap).find(([key, value]) => value === currentRoute);
    return match?.[0] as keyof typeof routeMap || 'home';
  };

  const handleTabPress = (tabKey: keyof typeof routeMap) => {
    const routeName = routeMap[tabKey];
    if (routeName) {
      navigation.navigate(routeName);
    }
  };

  const activeTab = getActiveTab();

  return (
    <View style={styles.footer}>
      {tabs.map((tab) => (
        <TouchableOpacity 
          key={tab.key} 
          style={styles.tabButton} 
          onPress={() => handleTabPress(tab.key)}
        >
          <View style={[styles.iconContainer, activeTab === tab.key && styles.activeIcon]}>
            <Icon 
              source={tab.icon} 
              size={28} 
              color={activeTab === tab.key ? '#FFFFFF' : '#777'} 
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 38,
    width: '100%',
  },
  tabButton: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIcon: {
    backgroundColor: '#0D0D26',
  },
});

export default Footer;

