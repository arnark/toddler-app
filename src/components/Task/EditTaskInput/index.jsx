import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as taskService from '../../../services/taskService';


const EditTaskInput = ({ taskId, taskTitle, taskDescription, taskIsFinished }) => (
  <Formik
    initialValues={{ taskTitle, taskDescription, taskIsFinished }}
    onSubmit={
      (values) => taskService.editTask(
        taskId, values.taskTitle, values.taskDescription, values.taskIsFinished
      )
    }
  >
    {({
      handleChange, handleBlur, handleSubmit, values
    }) => (
      <View>
        <TextInput
          onChangeText={handleChange('taskTitle')}
          onBlur={handleBlur('taskTitle')}
          value={values.taskTitle}
        />
        <TextInput
          onChangeText={handleChange('taskDescription')}
          onBlur={handleBlur('taskDescription')}
          value={values.taskDescription}
        />
        <TextInput
          onChangeText={handleChange('taskIsFinished')}
          onBlur={handleBlur('taskIsFinished')}
          value={values.taskIsFinished}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default EditTaskInput;
