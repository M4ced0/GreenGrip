import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import PoliticaPrivacidadeScreen from './src/screens/Politicaeprivacidade';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import ConfigScreen from './src/screens/ConfigScreen';
import Carrinho from './src/screens/Carrinho';
import CheckoutScreen from './src/screens/CheckoutScreen'; 
import ProfileScreen from './src/screens/ProfileScreen'; 
import ProdutosScreen from './src/screens/ProdutosScreen'; 
import CartProvider from './src/contexts/cartContext';
import PromocoesScreen from './src/screens/PromocoesScreen'; 



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerContent({ navigation }) {
  return (
    <View style={styles.drawerContent}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('MeuPerfil')}>
        <Ionicons name="person" size={24} color="black" />
        <Text style={styles.drawerText}>Meu Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Produtos')}>
        <Ionicons name="pricetag" size={24} color="black" />
        <Text style={styles.drawerText}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Promocoes')}>
        <Ionicons name="gift" size={24} color="black" />
        <Text style={styles.drawerText}>Promoções</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Home')}>
        <Ionicons name="list" size={24} color="black" />
        <Text style={styles.drawerText}>Sessões</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Config')}>
        <Ionicons name="cog" size={24} color="black" />
        <Text style={styles.drawerText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

function MainNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Produtos" component={ProdutosScreen} />
      <Drawer.Screen name="Promocoes" component={PromocoesScreen} />
       <Drawer.Screen name="MeuPerfil" component={ProfileScreen} />
      <Drawer.Screen name="Cart" component={Carrinho} />
      <Drawer.Screen
        name="PoliticaPrivacidade"
        component={PoliticaPrivacidadeScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    //<CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Produtos" component={ProdutosScreen} /> 
          <Stack.Screen name="Cart" component={Carrinho} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} /> 
          <Stack.Screen name="Promocoes" component={PromocoesScreen} />
          <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
          <Stack.Screen name="Politica" component={PoliticaPrivacidadeScreen} />
          <Stack.Screen name="Config" component={ConfigScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    //</CartProvider>
  );
}

const styles = {
  drawerContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  drawerText: {
    marginLeft: 15,
    fontSize: 16,
  },
};
