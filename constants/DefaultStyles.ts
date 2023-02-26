import { StyleSheet } from 'react-native';

const DefaultStyle = StyleSheet.create({
  safeAreaBackground: {
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'PottaOne',
    fontSize: 32,
  },
  title2: {
    fontSize: 24,
    fontFamily: 'PottaOne',
  },
  body: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Yomogi',
  },
  fullHeight: {
    height: '100%',
    backgroundColor: "#fff"
  },
  homeImage: {
    width: '80%',
    height: 300,
    resizeMode: 'contain',
  },
  smallButton: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  largeButton: {
    height: 100,
    width: '50%',
    borderRadius: 40,
    backgroundColor: "#C95858",
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  fill: {
    width: '100%',
    height: '100%',
  },
  footer: {
    padding: 40,
    marginBottom: 10,
  }
});

export default DefaultStyle;