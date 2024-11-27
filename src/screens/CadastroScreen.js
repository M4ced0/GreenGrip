import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  CheckBox,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Logo, Title } from '../styles/loginStyles';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [aceitoTermos, setAceitoTermos] = useState(false);

  const handleCadastrar = () => {
    console.log('Cadastro:', {
      nome,
      email,
      senha,
      cpf,
      celular,
      dataNascimento,
      aceitoTermos,
    });
    Keyboard.dismiss();
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Logo source={require('../../assets/greenClaspIco.png')} />
      </View>

      <Title>Cadastro</Title>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Celular"
        value={celular}
        onChangeText={setCelular}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (dd/mm/aaaa)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <View style={styles.termsContainer}>
        <CheckBox
          value={aceitoTermos}
          onValueChange={setAceitoTermos}
          style={styles.checkbox}
        />
        <Text style={styles.termsText}>
          Aceito os termos de política e privacidade
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleCadastrar}
        disabled={!aceitoTermos}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },

  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  termsText: {
    fontSize: 14,
  },
  button: {
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    backgroundColor: '#8ea863',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
