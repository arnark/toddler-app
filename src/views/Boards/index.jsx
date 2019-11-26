import React from 'react';
import { TouchableHighlight, ScrollView } from 'react-native';
import BoardsToolbar from '../../components/Boards/NewBoardButton';
import BoardsList from '../../components/Boards/BoardList';
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
