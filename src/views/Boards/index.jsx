import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewBoardButton from '../../components/Boards/NewBoardButton';
import BoardList from '../../components/Boards/BoardList';
import * as dataService from '../../services/dataImporter';
import styles from './styles';


const Boards = ({ navigation }) => (

  <>
    <TouchableHighlight
      style={styles.container}
      onPress={() => { navigation.replace('TaskList', { boardId: 1 }); }}
    >
      <ScrollView style={styles.mainContent}>

        <BoardList
          boards={dataService.getAllBoards()}
        />
      </ScrollView>
    </TouchableHighlight>

    <TouchableHighlight
      onPress={() => { navigation.replace('NewBoard'); }}
    >
      <NewBoardButton />
    </TouchableHighlight>
  </>
);

Boards.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Boards;
