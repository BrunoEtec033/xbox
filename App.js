import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './components/TelaInicial/index.js';
import TelaConsole from './components/TelaConsole/index.js';
import TelaJogos from './components/TelaJogos/index.js';
import TelaNuvem from './components/TelaNuvem/index.js';

const Stack = createStackNavigator();
export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Consoles" component={TelaConsole} />
        <Stack.Screen name="Jogos" component={TelaJogos} />
        <Stack.Screen name="Nuvem" component={TelaNuvem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}