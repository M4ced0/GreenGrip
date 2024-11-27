import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Keyboard, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
const images = [
  'https://i.imgur.com/cHHqxRw.jpeg',
  'https://i.imgur.com/jjRSD4b.jpeg',
  'https://i.imgur.com/AD70cYb.jpeg',
];

function HomeScreen({ navigation }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState([false, false, false, false, false, false]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (searchVisible) {
      setSearchText('');
      Keyboard.dismiss();
    } else {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
    }
  };

  const handleFavoriteToggle = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteBar} />
        
        

      <View style={styles.carouselContainer}>
      <Image source={{ uri: 'https://i.imgur.com/kzDAN34.jpeg' }} style={styles.carouselImage} />
        <View style={styles.topIcons}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="reorder-two-outline" size={24} color="black" style={styles.menuIcon} />
          </TouchableOpacity>
          <View style={styles.topRightIcons}>
            <TouchableOpacity onPress={toggleSearch}>
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Ionicons name="cart" size={24} color="black" style={styles.cartIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {searchVisible && (
          <TextInput
            style={styles.searchInput}
            placeholder="Digite sua pesquisa..."
            value={searchText}
            onChangeText={setSearchText}
            autoFocus
            ref={searchInputRef}
            onBlur={() => setSearchVisible(false)} 
          />
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {[...Array(7)].map((_, index) => (
            <View key={index} style={styles.categoryItem}>
              <Image
                source={{ uri: index === 0 ? 'https://i.imgur.com/ORrymiW.png' :
                        index === 1 ? 'https://i.imgur.com/rK6fYLl.png' :
                        index === 2 ? 'https://i.imgur.com/uBE90XU.png' :
                        index === 3 ? 'https://i.imgur.com/V3ArtdE.png' :
                        index === 4 ? 'https://i.imgur.com/F0PyZ9y.png' :
                        index === 5 ? 'https://i.imgur.com/U9DjeUE.png' :
                        index === 6 ? 'https://i.imgur.com/PlfpYHj.png' : '' }}
                style={styles.categoryImage}
              />
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Promoções</Text>
        <View style={styles.productGrid}>
          {[ 
            { name: "Ecobag Metamorfose", price: "R$40,00", rating: 5, imageUrl: 'https://i.imgur.com/QNvQY75.jpeg' },
            { name: "Mochila Eco (Personalize)", price: "R$50,00", rating: 5, imageUrl: 'https://i.imgur.com/NMSA8ke.jpeg' },
            { name: "Óculos Bambu Preto", price: "R$100,00", rating: 5, imageUrl: 'https://i.imgur.com/FnJAo5K.jpeg' },
          ].map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <Text style={styles.productRating}>☆ {product.rating}</Text>
              <TouchableOpacity style={styles.favoriteIcon} onPress={() => handleFavoriteToggle(index)}>
                <FontAwesome name={favorites[index] ? "heart" : "heart-o"} size={20} color="black" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Bombando</Text>
        <View style={styles.productGrid}>
          {[ 
            { name: "Garrafa Eco (Personalize)", price: "R$60,00", rating: 5, imageUrl: 'https://i.imgur.com/XrOSyct.jpeg' },
            { name: "Copo Eco (Cores)", price: "R$30,00", rating: 5, imageUrl: 'https://i.imgur.com/lsLx3qb.jpeg' },
            { name: "Caneca Eco (Personalize)", price: "R$35,00", rating: 5, imageUrl: 'https://i.imgur.com/sa3dxA4.jpeg' },
          ].map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <Text style={styles.productRating}>☆ {product.rating}</Text>
              <TouchableOpacity style={styles.favoriteIcon} onPress={() => handleFavoriteToggle(index + 3)}>
                <FontAwesome name={favorites[index + 3] ? "heart" : "heart-o"} size={20} color="black" />
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
    backgroundColor: '#fff',
  },
  whiteBar: {
    height: 40,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    height: 250,
    backgroundColor: '#ddd',
    marginBottom: 15,
    width: '100%',
    position: 'relative',
  },
   carouselImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover', 
  },
  topIcons: {
    position: 'absolute',
    top: 10,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  menuIcon: {
    marginLeft: 10,
  },
  topRightIcons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
  },
  cartIcon: {
    marginLeft: 20,
  },
  searchInput: {
    position: 'absolute',
    top: 40,
    left: 15,
    right: 15,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  horizontalScroll: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  categoryItem: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  categoryImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  productGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  productCard: {
    width: '30%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    position: 'relative',
  },
  productImage: {
    height: 100,
    width: '100%',
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  productRating: {
    fontSize: 12,
    color: '#000',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default HomeScreen;
