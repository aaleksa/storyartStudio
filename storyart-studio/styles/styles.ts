import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const colors = {
  background: '#0D1B2A',
  button: '#FFB703',
  buttonText: '#FFFFFF',
  titleGradientStart: '#FF00FF',
  titleGradientEnd: '#00FFFF',
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    position: 'relative',
  },

  starsAnimation: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },

  gradientTitle: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 60,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },

  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  menuContainer: {
    width: '90%',
    alignItems: 'center',
    gap: 15,
  },

  button: {
    backgroundColor: colors.button,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  buttonText: {
    color: colors.buttonText,
    fontSize: 18,
    fontWeight: '600',
  },

  charactersContainer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    paddingHorizontal: 20,
  },

  character: {
    width: 80,
    height: 80,
  },
});
