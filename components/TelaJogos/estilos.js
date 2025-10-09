import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo escuro para combinar com o layout da imagem
    padding: 15,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00C800', // Verde que aparece no título da imagem
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  boxJogo: {
    marginBottom: 25,
  },
  card: {
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.7)', // Sombra para o título se destacar
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  paragrafo: {
    fontSize: 14,
    color: '#ddd',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
});
