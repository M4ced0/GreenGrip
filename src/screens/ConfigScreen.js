import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ConfiguracoesScreen() {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setDarkModeEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.blackBar} />

      <ScrollView showsVerticalScrollIndicator={false}>
       
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Configurações Gerais</Text>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notificações</Text>
          <Switch
            trackColor={{ false: '#ccc', true: '#81b0ff' }}
            thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleNotifications}
            value={notificationsEnabled}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Modo Escuro</Text>
          <Switch
            trackColor={{ false: '#ccc', true: '#81b0ff' }}
            thumbColor={darkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleDarkMode}
            value={darkModeEnabled}
          />
        </View>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Idioma</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('PoliticaPrivacidade')}
        >
          <Text style={styles.settingText}>Política de Privacidade</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.settingTextOut}>Sair</Text>
          <Ionicons name="power" size={24} color="red" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blackBar: {
    height: 30,
    backgroundColor: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  settingText: {
    fontSize: 16,
  },

  settingTextOut: {
    fontSize: 16,
    color: 'red',
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    margin: 15,
  },
  backButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});


