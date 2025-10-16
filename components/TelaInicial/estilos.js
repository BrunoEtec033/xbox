import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },


  scrollView: {
    backgroundColor: '#1c1c1c',

  },


  scrollContent: {
    flexGrow: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 160,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 8,
    width: '100%',
  },

  img: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: 'contain',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
    textAlign: 'center',
  },

  descricao: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  cardsContainer: {
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
  },

  card: {
    width: '100%',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    marginBottom: 22,
    paddingVertical: 14,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },

  cardPressed: {
    opacity: 0.85,
  },

  cardImg: {
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: 'contain',
  },

  cardTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
