import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewBoardButton from '../../components/Tasks/NewTaskButton';
import TaskList from '../../components/Tasks/TaskList';
import data from '../../resources/data.json';
import styles from './styles';

const Board = ({ navigation }) => (
  <>
    <TouchableHighlight
      style={styles.container}
      onPress={() => { navigation.navigate('Task'); }}
    >
      <ScrollView style={styles.mainContent}>
        <TaskList lists={data.lists} />
      </ScrollView>
    </TouchableHighlight>

    <TouchableHighlight
      onPress={() => { navigation.navigate('NewList'); }}
    >
      <NewBoardButton />
    </TouchableHighlight>

  </>
);

Board.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Board;
