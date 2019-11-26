import React from 'react';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewBoardInput from '../../components/Boards/NewBoardInput';
import styles from './styles';

const NewBoard = ({ navigation: { navigate } }) => (
  <NewBoardInput />
);

export default NewBoard;
