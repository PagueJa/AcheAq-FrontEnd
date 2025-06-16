import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import MyFooter from '../components/footer';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    {
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Oferta Imperdível!',
      text: 'Aproveite o desconto de 50% em todos os eletrônicos. Somente até hoje!',
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Novo Lançamento!',
      text: 'Conheça o nosso mais novo smartphone com tecnologia inovadora.',
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16, marginTop: 50, textAlign: 'center'}}>Notificações</Text>
      <ScrollView>
        {notifications.map((notif, index) => (
          <View
            key={index}
            style={{
              margin: 16,
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 12,
              elevation: 4,
            }}
          >
            <Image
              source={{ uri: notif.imageUrl }}
              style={{ width: 150, height: 150, borderRadius: 8 }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>
              {notif.title}
            </Text>
            <Text style={{ marginTop: 4 }}>{notif.text}</Text>
          </View>
        ))}
      </ScrollView>
      <MyFooter />
    </View>
  );
};

export default NotificationScreen;
