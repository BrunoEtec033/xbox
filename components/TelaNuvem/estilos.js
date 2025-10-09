import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opacidade para o fundo da imagem
    borderRadius: 10,  // Bordas arredondadas (caso queira)
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1DBF73', // Cor verde
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#fff', // Texto branco
    marginBottom: 20,
  },
  paragrafo: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 250,
    resizeMode: 'contain', // Ajusta a imagem para o espaço disponível
    marginTop: 20,
  },
});

export default estilos;
