import React from 'react';
import { TextInput } from 'react-native';

const NewTaskInput = () => (
  <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    // onChangeText={text => onChangeText(text)}
    value="placeholder"
  />
);

export default NewTaskInput;
