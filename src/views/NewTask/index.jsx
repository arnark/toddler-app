import React from 'react';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewTaskInput from '../../components/Task/NewTaskInput';
import styles from './styles';

const NewTask = ({ navigation: { navigate } }) => (
  <NewTaskInput />
);

export default NewTask;
