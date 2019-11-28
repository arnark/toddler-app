import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnailContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 190,
    height: 190,
    margin: 9,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: 'white'
  },
  thumbnailText: {
    fontSize: 16
  },
  image: {
    width: 180,
    height: 150,
    margin: 5,
    position: 'relative'
  },
  editButton: {
    position: 'absolute',
    right: 5,
    top: 0,
    height: 50,
    width: 50,
    zIndex: 1
  }
});
