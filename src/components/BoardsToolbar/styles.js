import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  toolbar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
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
