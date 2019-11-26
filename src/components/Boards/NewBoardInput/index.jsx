import React from 'react';
import { TextInput } from 'react-native';

const NewBoardInput = () => (
  <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    // onChangeText={text => onChangeText(text)}
    value="placeholder"
  />
);

export default NewBoardInput;
