import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewBoardButton from '../../components/Boards/NewBoardButton';
import BoardList from '../../components/Boards/BoardList';
import data from '../../services/dataImporter';
import styles from './styles';


const Boards = ({ navigation }) => (

  <>
    <TouchableHighlight
      style={styles.container}
      onPress={() => { navigation.navigate('TaskList'); }}
    >
      <ScrollView style={styles.mainContent}>

        <BoardList
          boards={data.boards}
        />
      </ScrollView>
    </TouchableHighlight>

    <TouchableHighlight
      onPress={() => { navigation.replace('Boards'); }}
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
