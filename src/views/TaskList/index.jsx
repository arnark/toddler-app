import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewBoardButton from '../../components/Tasks/NewTaskListButton';
import TaskListComponent from '../../components/Tasks/TaskList';
import * as dataService from '../../services/dataImporter';
import styles from './styles';


const TaskList = ({ navigation }) => (
  <>
    <TouchableHighlight
      style={styles.container}
      onPress={() => { navigation.replace('Task'); }}
    >
      <ScrollView style={styles.mainContent}>
        <TaskListComponent lists={dataService.getTaskListsByBoardId(1)} />
      </ScrollView>
    </TouchableHighlight>

    <TouchableHighlight
      onPress={() => { navigation.replace('NewTaskList'); }}
    >
      <NewBoardButton />
    </TouchableHighlight>

  </>
);

TaskList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default TaskList;
