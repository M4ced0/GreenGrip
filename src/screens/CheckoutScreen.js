import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Picker,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const initialItems = [
  { id: '1', name: 'Ecobag Metamorfose', price: 40.0, quantity: 1, imageUrl: 'https://i.imgur.com/QNvQY75.jpeg', rating: 5 },
  { id: '2', name: 'Mochila Eco (Personalize)', price: 50.0, quantity: 2, imageUrl: 'https://i.imgur.com/NMSA8ke.jpeg', rating: 5 },
  { id: '3', name: 'Óculos Bambu Preto', price: 100.0, quantity: 3, imageUrl: 'https://i.imgur.com/FnJAo5K.jpeg', rating: 5 },
];

const fetchUserData = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        name: 'João Silva',
        cpf: '123.456.789-00',
        address: 'Rua Exemplo, 123 - Cidade',
        phone: '(32) 99999-0000',
      });
    }, 1000)
  );
};

const CheckoutScreen = ({ navigation }) => {
  const [items, setItems] = useState(initialItems);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cartão de Crédito');
  const [favorites, setFavorites] = useState([false, false, false]);
  const [showOverlay, setShowOverlay] = useState(false);  
  const [showCardForm, setShowCardForm] = useState(false);  
  const [showBoleto, setShowBoleto] = useState(false);  

  const getTotal = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!name || !cpf || !address || !phone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (paymentMethod === 'Pix') {
      setShowOverlay(true); 
    } else if (paymentMethod === 'Cartão de Crédito') {
      setShowCardForm(true);  
    } else if (paymentMethod === 'Boleto') {
      setShowBoleto(true);  
    } else {
      Alert.alert('Compra Finalizada!', `Obrigado, ${name}!`);
    }
  };

  const handleFavoriteToggle = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.cardContent}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
        <Text style={styles.productRating}>☆ {item.rating}</Text>
        <Text style={styles.productQuantity}>Qtd: {item.quantity}</Text>
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={() => handleFavoriteToggle(index)}
        >
          <FontAwesome
            name={favorites[index] ? 'heart' : 'heart-o'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  useEffect(() => {
    fetchUserData().then((data) => {
      setName(data.name);
      setCpf(data.cpf);
      setAddress(data.address);
      setPhone(data.phone);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      
      <Text style={styles.title}>Resumo do Pedido</Text>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalText}>R$ {getTotal().toFixed(2)}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Celular"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.paymentMethodText}>Forma de Pagamento:</Text>
      <Picker
        selectedValue={paymentMethod}
        style={styles.picker}
        onValueChange={(itemValue) => setPaymentMethod(itemValue)}
      >
        <Picker.Item label="Cartão de Crédito" value="Cartão de Crédito" />
        <Picker.Item label="Boleto" value="Boleto" />
        <Picker.Item label="Pix" value="Pix" />
      </Picker>

      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>

      
      {showOverlay && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showOverlay}
          onRequestClose={() => setShowOverlay(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Pix - Chave Aleatória</Text>
              <Text style={styles.pixLink}>
                Use este link para pagar via Pix: 
                <Text style={styles.pixLinkUrl}>
                  https://pay.empresa.com.br/pix?key=PixChaveAleatoria123456
                </Text>
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowOverlay(false)}
              >
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      
      {showCardForm && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showCardForm}
          onRequestClose={() => setShowCardForm(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Adicionar Cartão de Crédito</Text>
              <TextInput
                style={styles.input}
                placeholder="Número do Cartão"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Validade"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="CVV"
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => setShowCardForm(false)}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      
      {showBoleto && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showBoleto}
          onRequestClose={() => setShowBoleto(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Boleto Fictício</Text>
              <Text style={styles.boletoText}>
                Use o código abaixo para pagar seu boleto:
              </Text>
              <Text style={styles.boletoCode}>
                Boleto1234567890 - Vencimento: 30/11/2024
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowBoleto(false)}
              >
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  productCard: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',  
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  cardContent: {
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'black',  
  },
  productRating: {
    fontSize: 14,
    color: 'black',  
  },
  productQuantity: {
    fontSize: 14,
  },
  favoriteIcon: {
    marginTop: 5,
  },
  totalContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  paymentMethodText: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    marginBottom: 15,
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  pixLink: {
    fontSize: 16,
    marginBottom: 20,
  },
  pixLinkUrl: {
    color: '#00BFFF',
  },
  boletoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  boletoCode: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CheckoutScreen;
