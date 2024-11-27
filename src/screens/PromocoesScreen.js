import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

function PromocoesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([false, false, false]);

  const handleFavoriteToggle = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  const produtosPromocao = [
    { name: "Ecobag Metamorfose", price: "R$40,00", rating: 5, imageUrl: 'https://i.imgur.com/QNvQY75.jpeg' },
    { name: "Mochila Eco (Personalize)", price: "R$50,00", rating: 5, imageUrl: 'https://i.imgur.com/NMSA8ke.jpeg' },
    { name: "Óculos Bambu Preto", price: "R$100,00", rating: 5, imageUrl: 'https://i.imgur.com/FnJAo5K.jpeg' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Botão de Voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Promoções</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.productGrid}>
          {produtosPromocao.map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <Text style={styles.productRating}>☆ {product.rating}</Text>
              <TouchableOpacity style={styles.favoriteIcon} onPress={() => handleFavoriteToggle(index)}>
                <FontAwesome name={favorites[index] ? "heart" : "heart-o"} size={24} color="black" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  voltarButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,  // To center the title
  },
  scrollView: {
    paddingBottom: 20,
  },
  productGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  productCard: {
    width: '45%',  
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
  },
  productImage: {
    height: 140, 
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  productRating: {
    fontSize: 14,
    color: '#777',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default PromocoesScreen;

