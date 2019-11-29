import React from 'react';
import {
View, TextInput, TouchableHighlight, Text, KeyboardAvoidingView, Alert, Switch
} from 'react-native';
import { Formik } from 'formik';
import * as taskService from '../../../services/taskService';
import styles from '../../../styles/styles'

const NewTaskInput = ({ listId }) => (
  <Formik
    initialValues={{ title: '', description: '' }}
    onSubmit={async (values) => {
      const status = await taskService.createNewTask(values, listId);
      if (status.status === false) {
        Alert.alert(status.message);
      } else {
        Alert.alert('Task created successfully!');
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
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
          />
          <Text style={styles.inputFieldLabel}>Task Description</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
          />
          <Switch />
        </View>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
          <TouchableHighlight onPress={handleSubmit}>
            <View style={styles.submitButton}>
              <Text style={styles.submitActionText}>Create Task</Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    )}
  </Formik>
);

export default NewTaskInput;
