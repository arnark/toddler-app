import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewTaskButton from '../../components/Task/NewTaskButton';
import TaskList from '../../components/Task/TaskList';
import * as dataService from '../../services/dataImporter';
import styles from './styles';


const Task = ({ navigation }) => (
  <>
    <TouchableHighlight
      style={styles.container}
    >
      <ScrollView style={styles.mainContent}>
        <TaskList tasks={dataService.getTasksByListId(1)} />
      </ScrollView>
    </TouchableHighlight>

    <TouchableHighlight
      onPress={() => { navigation.replace('NewTask'); }}
    >
      <NewTaskButton />
    </TouchableHighlight>

  </>
);

Task.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Task;
