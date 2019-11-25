import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

const Board = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.button}
      onPress={() => { navigate('Task'); }}
    >
      <Text>Board</Text>
    </TouchableHighlight>
  </View>
);

export default Board;
