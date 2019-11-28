import React from 'react';
import { Text, TouchableHighlight, Alert } from 'react-native';
import styles from './styles';
import * as taskListService from '../../../services/taskListService';


function editAlert(taskListId, taskListTitle, taskListColor, navigation) {
  Alert.alert(
    'Task List Settings',
    '',
    [
      {
        text: 'Edit task list',
        onPress: () => navigation.navigate('EditTaskList', {
          taskListId, taskListTitle, taskListColor, navigation
        })
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete board',
        onPress: () => taskListService.deleteTaskList(taskListId),
        style: 'destructive',
      },
    ],
    { cancelable: true },
  );
}


const Thumbnail = ({ id, name, color, navigation }) => (
  <TouchableHighlight
    style={styles.thumbnailContainer}
    onPress={() => { navigation.navigate('Task', { listId: id }); }}
    onLongPress={() => { editAlert(id, name, color, navigation); }}
  >
    <Text style={styles.thumbnailText}>{name}</Text>
  </TouchableHighlight>
);

export default Thumbnail;
