import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

const Boards = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.button}
      onPress={() => { navigate('Board'); }}
    >
      <Text>Boards</Text>
    </TouchableHighlight>
  </View>
);

export default Boards;
