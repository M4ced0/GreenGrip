import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Div, Title } from '../styles/carrinhoStyles';
import CardProdutoCarrinho from '../components/CardProdutoCarrinho';

export default function Carrinho({ navigation }) {
  const [dados, setDados] = useState([
    {
      id: 1,
      title: "Ecobag Metamorfose",
      description: "Uma ecobag sustentável e estilosa.",
      price: "R$40,00",
      imageUrl: "https://i.imgur.com/dnEgfvD.jpeg",
      selected: false,
    },
    {
      id: 2,
      title: "Óculos Bambu Preto",
      description: "Óculos feito com bambu, ecologicamente correto.",
      price: "R$100,00",
      imageUrl: "https://i.imgur.com/nDA8F2Y.jpeg",
      selected: false,
    },
    {
      id: 3,
      title: "Capinha Eco iPhone",
      description: "Capinha ecológica compatível com iPhone.",
      price: "R$50,00",
      imageUrl: "https://i.imgur.com/yn27WDM.jpeg",
      selected: false,
    },
  ]);

  // Função para alternar seleção do produto
  const toggleSelection = (id) => {
    setDados((prevDados) =>
      prevDados.map((produto) =>
        produto.id === id ? { ...produto, selected: !produto.selected } : produto
      )
    );
  };

  // Função para excluir um produto
  const deleteProduct = (id) => {
    setDados((prevDados) => prevDados.filter((produto) => produto.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Barra superior com botão de voltar */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Título do carrinho */}
      <Div style={styles.titleDiv}>
        <Title style={styles.title}>Carrinho</Title>
        <Text style={styles.cartItemCount}>({dados.length} itens)</Text>
      </Div>

      {/* Lista de produtos */}
      <ScrollView style={styles.cardsContainer}>
        {dados.map((produto) => (
          <View key={produto.id} style={styles.cardWrapper}>
            <CardProdutoCarrinho
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imageUrl={produto.imageUrl}
              selected={produto.selected}
              onSelect={() => toggleSelection(produto.id)}
              onDelete={() => deleteProduct(produto.id)}
            />
          </View>
        ))}
      </ScrollView>

      {/* Botão de finalizar pedido */}
     <TouchableOpacity
  style={styles.finalizeButton}
  onPress={() => navigation.navigate('Checkout')} // Navega para a tela de checkout
>
  <Text style={styles.finalizeButtonText}>Finalizar Pedido</Text>
</TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backIcon: {
    margin: 15,
  },
  titleDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItemCount: {
    fontSize: 18,
    color: '#777',
  },
  cardsContainer: {
    paddingHorizontal: 10,
    marginBottom: 80,
  },
  cardWrapper: {
    backgroundColor: '#f0f0f0', // Fundo cinza
    padding: 10,
    borderRadius: 8,
    marginBottom: 10, // Espaçamento entre os cards
  },
  finalizeButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
  },
  finalizeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
