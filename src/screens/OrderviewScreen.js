import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{
            uri: "https://i.imgur.com/AD70cYb.jpeg",
          }}
          style={styles.headerImage}
        />
        <Text style={styles.approvedText}>Pagamento aprovado</Text>
        <Text style={styles.orderCode}>Código do pedido: 878685</Text>
        <Text style={styles.paymentMethod}>Forma de pagamento: PIX</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Detalhes do pedido:</Text>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://i.imgur.com/FnJAo5K.jpeg",
              }}
              style={styles.productImage}
            />
            <View>
              <Text style={styles.productTitle}>Óculos de bambu</Text>
              <Text style={styles.productText}>Quantidade: 1</Text>
              <Text style={styles.productText}>Valor: R$100,00</Text>
              <Text style={styles.productText}>Data do pedido: 20/11/2024 13:55</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Detalhes da entrega:</Text>
          <View style={styles.rowWithIcon}>
            <Icon name="person" size={24} color="#333" style={styles.icon} />
            <Text style={styles.deliveryText}>
              João Silva CPF: 123.456.789-00
            </Text>
          </View>
          <View style={styles.rowWithIcon}>
            <Icon name="location-on" size={24} color="#333" style={styles.icon} />
            <Text style={styles.deliveryText}>
              Rua Exemplo, 123 - Cidade - MG
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.pedidobag/cod878685")}
          >
            <Text style={styles.link}>Rastreie seu pedido em tempo real!</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.problemButton}>
          <Text style={styles.problemButtonText}>Problemas com seu pedido?</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Green Clasp</Text>
        <Text style={styles.footerText}>SAC: (31) 1234-5678</Text>
        <Text style={styles.footerText}>Rua Exemplo, 456 - Cidade, MG</Text>
        <Text style={styles.footerText}>CEP: 12345-678</Text>
        <Text style={styles.footerText}>Email: contato@greenclasp.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  approvedText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: 5,
  },
  orderCode: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  paymentMethod: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  productText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  deliveryText: {
    fontSize: 14,
    color: "#555",
  },
  icon: {
    marginRight: 10,
  },
  link: {
    fontSize: 14,
    color: "#1E90FF",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  problemButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  problemButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#D4EBAF",
    padding: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    color: "#333",
    fontSize: 14,
    marginBottom: 5,
  },
});
