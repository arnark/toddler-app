import React from 'react';
import { TextInput } from 'react-native';

const NewTaskListInput = () => (
  <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    // onChangeText={text => onChangeText(text)}
    value="placeholder"
  />
);

export default NewTaskListInput;
