import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import BoardsToolbar from '../../components/BoardsToolbar';
import BoardsList from '../../components/BoardsList';
import data from '../../resources/data.json';
import styles from './styles';

const Boards = ({ navigation: { navigate } }) => (
  <View style={styles.container}>

    <BoardsToolbar />
    <TouchableHighlight
      onPress={() => { navigate('Board'); }}
      style={styles.mainContent}
    >
      <BoardsList boards={data.boards} />
    </TouchableHighlight>
  </View>
);

export default Boards;
