import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, Pressable } from 'react-native';
import imgFundo from '../../assets/logo.png';
import imgConsole from '../../assets/xcloud-2.png';
import imgJogo from '../../assets/jogo-1.png';
import imgXcloud from '../../assets/xcloud-1.png';
import estilos from './estilos';

export default function TelaInicial({ navigation }) {
  return (
      <ScrollView
        style={estilos.scrollView}
        contentContainerStyle={estilos.scrollContent}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
        alwaysBounceVertical={true}
      >
        <View style={estilos.header}>
          <Image source={imgFundo} style={estilos.img} />
          <Text style={estilos.titulo}>Xbox</Text>
          <Text style={estilos.descricao}>
            Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.
          </Text>
        </View>

        <View style={estilos.cardsContainer}>
          <Pressable onPress={() => navigation.navigate('Consoles')} style={({pressed}) => [estilos.card, pressed && estilos.cardPressed]}>
            <Image source={imgConsole} style={estilos.cardImg} />
            <Text style={estilos.cardTexto}>Conheça os consoles</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Jogos')} style={({pressed}) => [estilos.card, pressed && estilos.cardPressed]}>
            <Image source={imgJogo} style={estilos.cardImg} />
            <Text style={estilos.cardTexto}>Conheça os jogos</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Nuvem')} style={({pressed}) => [estilos.card, pressed && estilos.cardPressed]}>
            <Image source={imgXcloud} style={estilos.cardImg} />
            <Text style={estilos.cardTexto}>Conheça o xCloud</Text>
          </Pressable>
        </View>
      </ScrollView>
  );
}
