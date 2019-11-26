import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import BoardsToolbar from '../../components/BoardsToolbar';
import styles from './styles';

const Boards = ({ navigation: { navigate } }) => (
  <View style={styles.container}>

    <BoardsToolbar />
    <TouchableHighlight
      onPress={() => { navigate('Board'); }}
      style={styles.mainContent}
    >
      <Text>Boards</Text>
    </TouchableHighlight>
  </View>
);

export default Boards;
