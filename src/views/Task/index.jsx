import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import NewTaskButton from '../../components/Task/NewTaskButton';
import TaskList from '../../components/Task/TaskList';
import data from '../../services/dataImporter';
import styles from './styles';


const Task = ({ navigation }) => (
  <>
    <TouchableHighlight
      style={styles.container}
    >
      <ScrollView style={styles.mainContent}>
        <TaskList tasks={data.tasks} />
      </ScrollView>
    </TouchableHighlight>

    <TouchableHighlight
      onPress={() => { navigation.navigate('NewTask'); }}
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
