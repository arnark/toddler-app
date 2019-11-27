import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  toolbar: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#2e2c2e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center'
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  }
});
