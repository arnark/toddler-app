import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const NewBoardButton = () => (
  <View styleName="horizontal" style={styles.toolbar}>
    <Text style={styles.toolbarActionText}>New Task</Text>
  </View>
);

export default NewBoardButton;
