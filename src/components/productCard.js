import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function CardProdutoCarrinho({ title, description, price, color, imageUrl }) {
  return (
    <View style={styles.card}>
      
      <Image source={{ uri: imageUrl }} style={styles.image} />
      
      <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity >
            <Ionicons styles={styles.checkIcon} name="checkmark-circle-outline" size={24} color="black" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.colorSection}>
          <Text style={styles.colorText}>Cor: {color}</Text>
          <View style={styles.colorCircle}></View>
        </View>

        <View style={styles.priceTrash}>
          <Text style={styles.price}>R$: {price}</Text>
          <TouchableOpacity >
            <Ionicons styles={styles.removeIcon} name="trash-outline" size={24} color="black" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
    margin: 10,
  },

  image: {
    positon: 'absolute',
    
    width: 150,
    height: 162,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  colorSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorText: {
    fontSize: 14,
    marginRight: 5,
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },

  priceTrash: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});
