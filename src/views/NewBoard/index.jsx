import React from 'react';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewBoardInput from '../../components/Boards/NewBoardInput';
import styles from './styles';

const Boards = ({ navigation: { navigate } }) => (
  <NewBoardInput />
);

export default Boards;
