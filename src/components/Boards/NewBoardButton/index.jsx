import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import newButton from '../../styles';

const NewBoardButton = () => (
  <View styleName="horizontal" style={newButton}>
    <Text style={styles.toolbarActionText}>New Board</Text>
  </View>
);

export default NewBoardButton;
