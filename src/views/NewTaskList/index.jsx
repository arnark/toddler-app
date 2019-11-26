import React from 'react';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewTaskListInput from '../../components/Tasks/NewTaskListInput';
import styles from './styles';

const NewTaskList = ({ navigation: { navigate } }) => (
  <NewTaskListInput />
);

export default NewTaskList;
