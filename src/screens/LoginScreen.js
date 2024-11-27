import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  View,
  Modal,
} from 'react-native';
import { Div, Title, ThL, Logo, FlexEndTxt } from '../styles/loginStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  
  const handleLogin = async () => {
    console.log('Login:', { email, senha });
    Keyboard.dismiss();

    
    const users = [
      { email: 'test@example.com', password: '123456' },
      { email: 'user@json.com', password: 'password' },
    ];

   
    const user = users.find(
      (user) => user.email === email && user.password === senha
    );

    if (user) {
      console.log('Login bem-sucedido!');
      navigation.replace('Main');
    } else {
      console.log('Email ou senha incorretos!');
      alert('Email ou senha incorretos!');
    }
  };

  const handleForgotPassword = () => {
    setModalVisible(true);
    setSuccessMessage('');
  };

  const handleSendResetEmail = () => {
    console.log('Redefinição de senha enviada para:', resetEmail);
    setSuccessMessage('Um link de redefinição de senha foi enviado para seu email com sucesso.');
    setTimeout(() => {
      setModalVisible(false);
      setSuccessMessage('');
    }, 3000);
    setResetEmail('');
  };

  return (
    <Div style={styles.container}>
      <Div style={styles.header}>
        <Logo source={require('../../assets/greenClaspIco.png')} />
      </Div>
      <Title>Entre com sua conta</Title>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleForgotPassword}>
        <FlexEndTxt>Esqueci minha senha</FlexEndTxt>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CadastroScreen')}>
        <Text style={styles.termsText}>
          Não possui uma conta? <ThL>Cadastre-se</ThL>
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Redefinir senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              value={resetEmail}
              onChangeText={setResetEmail}
            />
            {successMessage ? (
              <Text style={styles.successMessage}>{successMessage}</Text>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleSendResetEmail}
                >
                  <Text style={styles.modalButtonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalCancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalCancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </Div>
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

  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  termsText: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 90,
  },

  button: {
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

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  modalButton: {
    backgroundColor: '#8ea863',
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },

  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  modalCancelButton: {
    marginTop: 10,
  },

  modalCancelButtonText: {
    color: '#8ea863',
    fontSize: 16,
  },

  successMessage: {
    color: 'green',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
