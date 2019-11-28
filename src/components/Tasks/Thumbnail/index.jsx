import React from 'react';
import { Text, TouchableHighlight, Alert } from 'react-native';
import styles from './styles';
import * as taskListService from '../../../services/taskListService';


function editAlert(listId) {
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
        onPress: () => taskListService.deleteTaskList(listId),
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
    onLongPress={() => { editAlert(id); }}
  >
    <Text style={styles.thumbnailText}>{name}</Text>
  </TouchableHighlight>
);

export default Thumbnail;
