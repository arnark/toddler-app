import React from 'react';
import {
  View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, Alert
} from 'react-native';
import { Formik } from 'formik';
import * as taskListService from '../../../services/taskListService';
import styles from '../../../styles/styles'

const NewTaskListInput = ({ boardId }) => (
  <Formik
    initialValues={{ title: '' }}
    onSubmit={async (values) => {
      const status = await taskListService.createNewTaskList(values, boardId);
      if (status.status === false) {
        Alert.alert(status.message);
      } else {
        Alert.alert('Task list created successfully!');
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
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
          />
        </View>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
          <TouchableHighlight onPress={handleSubmit}>
            <View style={styles.submitButton}>
              <Text style={styles.submitActionText}>Create Task List</Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    )}
  </Formik>
);

export default NewTaskListInput;
