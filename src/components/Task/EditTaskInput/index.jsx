import React from 'react';
import {
  View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, Alert, Picker
} from 'react-native';
import { Formik } from 'formik';
import TaskListPicker from '../TaskListPicker'
import * as taskService from '../../../services/taskService';
import styles from '../../../styles/styles'


const EditTaskInput = ({ taskId, taskTitle, taskDescription, taskIsFinished }) => (
  <Formik
    initialValues={{ taskTitle, taskDescription, taskIsFinished }}
    onSubmit={async (values) => {
      const status = await taskService.editTask(
        taskId, values.taskTitle, values.taskDescription, values.taskIsFinished
      )
      if (status.status === false) {
        Alert.alert(status.message);
      } else {
        Alert.alert('Task edited successfully!');
      }
    }}
  >
    {({
      handleChange, handleBlur, handleSubmit, values
    }) => (
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.inputFieldLabel}>Task Title</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={handleChange('taskTitle')}
            onBlur={handleBlur('taskTitle')}
            value={values.taskTitle}
          />
          <Text style={styles.inputFieldLabel}>Task Description</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={handleChange('taskDescription')}
            onBlur={handleBlur('taskDescription')}
            value={values.taskDescription}
          />
        </View>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
          <TouchableHighlight onPress={handleSubmit}>
            <View style={styles.submitButton}>
              <Text style={styles.submitActionText}>Edit Task</Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    )}
  </Formik>
);

export default EditTaskInput;
