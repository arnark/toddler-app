import React from 'react';
import { Text, TouchableHighlight, Alert } from 'react-native';
import styles from './styles';
import * as taskService from '../../../services/taskService';

function editAlert(taskId) {
  Alert.alert(
    'Board Settings',
    '',
    [
      { text: 'Edit board', onPress: () => console.log('Edit board pressed') },
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete board',
        onPress: () => taskService.deleteTask(taskId),
        style: 'destructive',
      },
    ],
    { cancelable: true },
  );
}

const Thumbnail = ({ id, name, description }) => (

  <TouchableHighlight
    style={styles.thumbnailContainer}
    onLongPress={() => { editAlert(id); }}
  >
    <>
      <Text style={styles.thumbnailText}>{name}</Text>
      <Text style={styles.thumbnailText}>{description}</Text>
    </>
  </TouchableHighlight>

);

export default Thumbnail;
