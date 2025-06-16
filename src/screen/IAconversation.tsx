import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyFooter from '../components/footer';


type Msg = {
  id: string;
  text: string;
  fromUser: boolean;
};

export default function ChatScreen() {
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState<Msg[]>([]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = {
      id: Date.now().toString(),
      text: input.trim(),
      fromUser: true
    };
    setMsgs([userMsg, ...msgs]);
    setInput('');
    setStarted(true);

  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.flex}>
            {!started && (
              <View style={styles.intro}>
                <Text style={styles.title}>Olá, Alexandre!</Text>
                <Text style={styles.subtitle}>
                  Sou o chatbot do AcheAq. Qual a sua necessidade no momento?
                </Text>

                <View style={styles.inputRow}>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite aqui..."
                    placeholderTextColor="#999"
                    value={input}
                    onChangeText={setInput}
                    onSubmitEditing={send}
                  />
                  <TouchableOpacity onPress={send} style={styles.btn}>
                    <MaterialCommunityIcons name="magnify" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            )}


            {started && (
              <>
                <FlatList
                  inverted
                  data={msgs}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <View
                      style={[
                        styles.bubble,
                        item.fromUser ? styles.bubbleUser : styles.bubbleBot
                      ]}
                    >
                      <Text style={ item.fromUser ? styles.textUser : styles.textBot }>
                        {item.text}
                      </Text>
                    </View>
                  )}
                  contentContainerStyle={{ paddingTop: 16, paddingBottom: 80 }}
                />

                <View style={styles.chatInputContainer}>
                  <TextInput
                    style={styles.chatInput}
                    placeholder="Digite sua mensagem…"
                    placeholderTextColor="#999"
                    value={input}
                    onChangeText={setInput}
                    onSubmitEditing={send}
                  />
                  <TouchableOpacity onPress={send} style={styles.chatSendButton}>
                    <MaterialCommunityIcons name="send" size={24} color="#001f5b" />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <MyFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },

  intro: {
    flex: 1,
    backgroundColor: '#0E2F5A',
    padding: 24,
    paddingTop: 180,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 12
  },
  subtitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 33,
    marginBottom: 20
  },

 
  inputRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    height: 60,
    alignItems: 'center',
    marginTop: 20,       
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
  },
  btn: {
    backgroundColor: '#001f5b',
    borderRadius: 40,
    paddingHorizontal: 16,
    height: '70%',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  bubble: {
    marginVertical: 6,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 16,
    maxWidth: '75%'
  },
  bubbleUser: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  bubbleBot: {
    backgroundColor: '#003366',
    alignSelf: 'flex-start'
  },
  textUser: { color: '#333' },
  textBot: { color: '#fff' },
  
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    marginBottom: 35
  },
  chatInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 20
  },
  chatSendButton: {
    marginLeft: 8,
    padding: 8
  },

});