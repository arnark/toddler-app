import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as taskListService from '../../../services/taskListService';


const NewTaskListInput = ({ boardId }) => (
  <Formik
    initialValues={{ title: 'Title' }}
    onSubmit={(values) => taskListService.createNewTaskList(values, boardId)}
  >
    {({
      handleChange, handleBlur, handleSubmit, values
    }) => (
      <View>
        <TextInput
          onChangeText={handleChange('title')}
          onBlur={handleBlur('title')}
          value={values.title}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default NewTaskListInput;
