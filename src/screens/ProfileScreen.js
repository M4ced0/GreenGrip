import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [visibleModal, setVisibleModal] = useState(null); 

  const handleMenuPress = (modalName) => {
    setVisibleModal(modalName); 
  };

  const closeModal = () => {
    setVisibleModal(null); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#2c5e1a" />
      </TouchableOpacity>

      <View style={styles.profileSection}>
        <Image 
          source={{ uri: 'https://i.imgur.com/xFaKnqO.jpeg' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.userName}>Ingrid Macedo</Text>
        <Text style={styles.userEmail}>macedoingridti@gmail.com</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handleMenuPress(item.modalName)}
          >
            <Ionicons name={item.icon} size={24} color="#fff" />
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>SALVAR</Text>
      </TouchableOpacity>

      
      <Modal visible={visibleModal === 'Orders'} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.orderCard}>
            <View style={styles.imageBackground}>
              <Image 
                source={{ uri: 'https://i.imgur.com/cp9cbZr.png' }} 
                style={styles.productImage} 
              />
            </View>
            <View style={styles.orderDetails}>
              <Text style={styles.productName}>Óculos Bambu Preto</Text>
              <Text style={styles.productPrice}>R$ 100,00</Text>
              <Text style={styles.paymentMethod}>Pago com PIX</Text>
              <Text style={styles.orderInfo}>Pedido Nº: 1234</Text>
              <Text style={styles.orderInfo}>Cod: 099896</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      
      <Modal visible={visibleModal === 'Returns'} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Trocas e Cancelamentos</Text>
          <Text>Aqui você pode gerenciar trocas e cancelamentos.</Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
    </ScrollView>
  );
};

const menuItems = [
  { label: 'Meus pedidos', icon: 'cart-outline', modalName: 'Orders' },
  { label: 'Trocas e cancelamentos', icon: 'sync-outline', modalName: 'Returns' },
  { label: 'Central de atendimento', icon: 'headset-outline', modalName: 'Support' },
  { label: 'Gerenciar dados', icon: 'settings-outline', modalName: 'Settings' },
  { label: 'Formas de pagamento', icon: 'card-outline', modalName: 'Payment' },
  { label: 'Rastrear pedidos', icon: 'location-outline', modalName: 'Tracking' },
  { label: 'Política e Privacidade', icon: 'lock-closed-outline', modalName: 'Privacy' },
];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#d4f4c9',
    alignItems: 'center',
    paddingVertical: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 60,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#2c5e1a',
  },
  userEmail: {
    fontSize: 14,
    color: '#2c5e1a',
    textDecorationLine: 'underline',
  },
  menuContainer: {
    width: '90%',
    backgroundColor: '#c0d9a5',
    borderRadius: 10,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#9bb57b',
  },
  menuText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#7cb342',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginTop: 20,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  imageBackground: {
    backgroundColor: '#D4EBAF', 
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  orderDetails: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#000', 
    marginVertical: 5,
  },
  paymentMethod: {
    fontSize: 14,
    color: '#7cb342', 
    marginVertical: 5,
  },
  orderInfo: {
    fontSize: 14,
    color: '#555',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#7cb342',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
