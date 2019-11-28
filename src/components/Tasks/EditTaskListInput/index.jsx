import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as taskListService from '../../../services/taskListService';


const EditTaskListInput = ({ taskListId, taskListTitle, taskListColor }) => (
  <Formik
    initialValues={{ taskListTitle, taskListColor }}
    onSubmit={
      (values) => taskListService.editTaskList(
        taskListId, values.taskListTitle, values.taskListColor
      )
    }
  >
    {({
      handleChange, handleBlur, handleSubmit, values
    }) => (
      <View>
        <TextInput
          onChangeText={handleChange('taskListTitle')}
          onBlur={handleBlur('taskListTitle')}
          value={values.taskListTitle}
        />
        <TextInput
          onChangeText={handleChange('taskListColor')}
          onBlur={handleBlur('taskListColor')}
          value={values.taskListColor}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default EditTaskListInput;
