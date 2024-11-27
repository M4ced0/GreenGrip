import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PoliticaPrivacidadeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Bag<Text style={styles.titleHighlight}>Sell</Text></Text>
      </View>
      
      <Text style={styles.policyTitle}>Política de Privacidade</Text>
      <Text style={styles.policyText}>
        Esta Política de Privacidade descreve como coletamos, usamos e protegemos as suas informações pessoais ao usar nosso aplicativo.
      </Text>
      <Text style={styles.policyText}>
        Coletamos informações como nome, e-mail, CPF e outros dados que você fornece ao se cadastrar.
      </Text>
      <Text style={styles.policyText}>
        Usamos suas informações para fornecer um melhor serviço.
      </Text>

      <Text style={styles.sacTitle}>SAC do Consumidor</Text>
      <View style={styles.contactContainer}>
        <Ionicons name="call" size={24} color="black" />
        <Text style={styles.contactText}>(32) 3721-2425</Text>
      </View>
      
      <Text style={styles.addressTitle}>Endereço</Text>
      <View style={styles.addressContainer}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={styles.addressText}>Rua Halfed 1420 - Paineiras, Juiz de Fora, Minas Gerais</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleHighlight: {
    color: '#00BFFF',
  },
  policyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
  },
  policyText: {
    fontSize: 16,
    margin: 15,
  },
  sacTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  addressText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default PoliticaPrivacidadeScreen;
