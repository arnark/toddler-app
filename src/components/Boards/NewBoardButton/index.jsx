import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const BoardsToolbar = ({ onAdd }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>New Board</Text>
    </TouchableHighlight>
  </View>
);

export default BoardsToolbar;
