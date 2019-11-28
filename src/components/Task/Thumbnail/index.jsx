import React from 'react';
import { Text, TouchableHighlight, Alert } from 'react-native';
import styles from './styles';
import * as taskService from '../../../services/taskService';

function editAlert(taskId, taskTitle, taskDescription, taskIsFinished, navigation) {
  Alert.alert(
    'Task Settings',
    '',
    [
      {
        text: 'Edit task',
        onPress: () => navigation.navigate('EditTask', {
          taskId, taskTitle, taskDescription, taskIsFinished, navigation
        })
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete task',
        onPress: () => taskService.deleteTask(taskId),
        style: 'destructive',
      },
    ],
    { cancelable: true },
  );
}

const Thumbnail = ({ id, name, description, isFinished, navigation }) => (

  <TouchableHighlight
    style={styles.thumbnailContainer}
    onLongPress={() => { editAlert(id, name, description, isFinished, navigation); }}
  >
    <>
      <Text style={styles.thumbnailText}>{name}</Text>
      <Text style={styles.thumbnailText}>{description}</Text>
    </>
  </TouchableHighlight>

);

export default Thumbnail;
