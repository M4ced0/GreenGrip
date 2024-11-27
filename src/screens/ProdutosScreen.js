import React, { useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProdutosScreen = ({ navigation }) => {
  const [produtos, setProdutos] = useState([
    { id: '1', nome: 'Produto 1 ', preco: 'R$ 50,00', imagem: 'https://i.imgur.com/B9I2CMd.png', avaliacao: 4.5 },
    { id: '2', nome: 'Produto 2 ', preco: 'R$ 60,00', imagem: 'https://i.imgur.com/OQ1DiHe.png', avaliacao: 4.7 },
    { id: '3', nome: 'Produto 3 ', preco: 'R$ 40,00', imagem: 'https://i.imgur.com/YvMaDnz.png', avaliacao: 4.2 },
    { id: '4', nome: 'Produto 4 ', preco: 'R$ 70,00', imagem: 'https://i.imgur.com/zaVrWnq.png', avaliacao: 4.9 },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [todosProdutosCarregados, setTodosProdutosCarregados] = useState(false);

  const novosProdutos = [
    { id: '5', nome: 'Produto 5 ', preco: 'R$ 55,00', imagem: 'https://i.imgur.com/9zMjJ4n.png', avaliacao: 4.3 },
    { id: '6', nome: 'Produto 6 ', preco: 'R$ 65,00', imagem: 'https://i.imgur.com/32M3VBT.png', avaliacao: 4.6 },
    { id: '7', nome: 'Produto 7 ', preco: 'R$ 45,00', imagem: 'https://i.imgur.com/9JWNKbL.png', avaliacao: 4.1 },
    { id: '8', nome: 'Produto 8 ', preco: 'R$ 75,00', imagem: 'https://i.imgur.com/Ct49PiG.png', avaliacao: 4.8 },
    { id: '9', nome: 'Produto 9 ', preco: 'R$ 35,00', imagem: 'https://i.imgur.com/E0Lx0Qa.png', avaliacao: 4.0 },
    { id: '10', nome: 'Produto 10 ', preco: 'R$ 85,00', imagem: 'https://i.imgur.com/yXuE5Mb.png', avaliacao: 4.7 },
    { id: '11', nome: 'Produto 11 Ecobag', preco: 'R$ 90,00', imagem: 'https://i.imgur.com/cp9cbZr.png', avaliacao: 4.9 },
    { id: '12', nome: 'Produto 12 Ecobag', preco: 'R$ 95,00', imagem: 'https://i.imgur.com/M1SRWNU.png', avaliacao: 4.8 },
  ];

  const carregarMaisProdutos = () => {
    if (isLoading || todosProdutosCarregados) return;

    setIsLoading(true);
    setTimeout(() => {
      const produtosRestantes = novosProdutos.slice(produtos.length - 4, novosProdutos.length); // Calcula o restante dos produtos
      if (produtos.length + produtosRestantes.length >= 12) {
        setTodosProdutosCarregados(true); // Indica que todos os produtos foram carregados
      }
      setProdutos((produtosAnteriores) => [...produtosAnteriores, ...produtosRestantes]);
      setIsLoading(false);
    }, 1500);
  };

  const renderProduto = ({ item }) => (
    <TouchableOpacity style={styles.produtoContainer}>
      <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <View style={styles.avaliacaoContainer}>
        <Ionicons name="star" size={16} color="#ffd700" />
        <Text style={styles.avaliacaoText}>{item.avaliacao.toFixed(1)} (+1000)</Text>
      </View>
      <Text style={styles.precoProduto}>{item.preco}</Text>
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Botão para voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Produtos</Text>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderProduto}
        numColumns={2}
        contentContainerStyle={styles.listaProdutos}
        showsVerticalScrollIndicator={false}
        onEndReached={carregarMaisProdutos}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoading ? (
            <ActivityIndicator size="large" color="#000" style={{ marginVertical: 16 }} />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4f4c9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  listaProdutos: {
    padding: 8,
  },
  produtoContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  imagemProduto: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  nomeProduto: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  avaliacaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  avaliacaoText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProdutosScreen;

