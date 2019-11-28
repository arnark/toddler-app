import React from 'react';
import {
  View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView
} from 'react-native';
import { Formik } from 'formik';
import * as taskService from '../../../services/taskService';
import styles from '../../../styles/styles'


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
