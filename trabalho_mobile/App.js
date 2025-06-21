// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen';
import CaronasScreen from './screens/CaronasScreen';
import OferecerCaronaScreen from './screens/OferecerCaronaScreen';
// Caso tenha tela de formulário específico, importe também:
// import FormOferecerCaronaScreen from './screens/FormOferecerCaronaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // desabilita header padrão para todas as telas
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Caronas" component={CaronasScreen} />
        <Stack.Screen
          name="OferecerCarona"
          component={OferecerCaronaScreen}
        />
        {/*
        <Stack.Screen
          name="FormOferecerCarona"
          component={FormOferecerCaronaScreen}
        />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
