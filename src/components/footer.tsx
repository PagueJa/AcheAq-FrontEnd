import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { key: 'search', icon: 'magnify' },
    { key: 'home', icon: 'home' },
    { key: 'profile', icon: 'account' },
    { key: 'notifications', icon: 'bell' },
  ];

  return (
    <View style={styles.footer}>
      {tabs.map((tab) => (
        <TouchableOpacity 
          key={tab.key} 
          style={styles.tabButton} 
          onPress={() => setActiveTab(tab.key)}
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
    bottom: 0,
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
