import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function App() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/FnJAo5K.jpeg" }}
        style={styles.productImage}
      />
      <Text style={styles.productName}>Óculos de Bambu</Text>
      <Text style={styles.description}>
        Feito com madeira compensada, proteção eficiente contra raios UVs.
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>R$190</Text>
        <Text style={styles.newPrice}>R$100</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.quantityInput}
          value={String(quantity)}
          editable={false}
        />
        <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
      <Button title="Adicionar ao Carrinho" onPress={() => alert(`Adicionado ${quantity} ao carrinho!`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  oldPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  newPrice: {
    fontSize: 20,
    color: "#28a745",
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
    borderRadius: 4,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityInput: {
    width: 40,
    height: 32,
    marginHorizontal: 8,
    textAlign: "center",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
});
