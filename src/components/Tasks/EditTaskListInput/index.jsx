import React from 'react';
import {
  View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, Alert
} from 'react-native';
import { Formik } from 'formik';
import * as taskListService from '../../../services/taskListService';
import styles from '../../../styles/styles'


const EditTaskListInput = ({ taskListId, taskListTitle, taskListColor }) => (
  <Formik
    initialValues={{ taskListTitle, taskListColor }}
    onSubmit={async (values) => {
      const status = await taskListService.editTaskList(
        taskListId, values.taskListTitle, values.taskListColor
      );
      if (status.status === false) {
        Alert.alert(status.message);
      } else {
        Alert.alert('Task list edited successfully!');
      }
    }}
  >
    {({
      handleChange, handleBlur, handleSubmit, values
    }) => (
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.inputFieldLabel}>Title</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={handleChange('taskListTitle')}
            onBlur={handleBlur('taskListTitle')}
            value={values.taskListTitle}
          />
        </View>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
          <TouchableHighlight onPress={handleSubmit}>
            <View style={styles.submitButton}>
              <Text style={styles.submitActionText}>Edit Task List</Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    )}
  </Formik>
);

export default EditTaskListInput;
