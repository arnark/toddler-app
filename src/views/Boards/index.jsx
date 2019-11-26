import React from 'react';
import { TouchableHighlight, View, ScrollView } from 'react-native';
import BoardsToolbar from '../../components/BoardsToolbar';
import BoardsList from '../../components/BoardsList';
import data from '../../resources/data.json';
import styles from './styles';

const Boards = ({ navigation: { navigate } }) => (
  <>
    <TouchableHighlight
      style={styles.container}
      onPress={() => { navigate('Board'); }}
    >
      <ScrollView style={styles.mainContent}>
        <BoardsList boards={data.boards} />
      </ScrollView>
    </TouchableHighlight>
    <BoardsToolbar />
  </>
);

export default Boards;
