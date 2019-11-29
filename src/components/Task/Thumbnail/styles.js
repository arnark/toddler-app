import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnailContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    margin: 9,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: 'white'
  },
  thumbnailTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  thumbnailDescription: {
    fontSize: 16
  }
});
