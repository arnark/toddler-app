import React from 'react';
import { createAppContainer } from 'react-navigation';
import { HeaderBackButton, createStackNavigator } from 'react-navigation-stack';

import Boards from '../views/Boards';
import TaskList from '../views/TaskList';
import Task from '../views/Task';
import NewBoard from '../views/NewBoard';
import NewTask from '../views/NewTask';
import NewTaskList from '../views/NewTaskList';


export default createAppContainer(createStackNavigator({
  Boards: {
    screen: Boards,
    navigationOptions: {
      title: 'Boards'
    }
  },
  TaskList: {
    screen: TaskList,
    navigationOptions: ({ navigation }) => ({
      title: 'Task List',
      headerLeft: <HeaderBackButton onPress={() => { navigation.replace('Boards'); }} title="Boards" tintColor="#ffffff" backTitleVisible />
    }),
  },
  Task: {
    screen: Task,
    navigationOptions: ({ navigation }) => ({
      title: 'Task',
      headerLeft: <HeaderBackButton onPress={() => { navigation.replace('TaskList'); }} title="Task Lists" tintColor="#ffffff" backTitleVisible />
    })
  },
  NewBoard: {
    screen: NewBoard,
    navigationOptions: ({ navigation }) => ({
      title: 'New Board',
      headerLeft: <HeaderBackButton onPress={() => { navigation.replace('Boards'); }} title="Boards" tintColor="#ffffff" backTitleVisible />
    })
  },
  NewTask: {
    screen: NewTask,
    navigationOptions: ({ navigation }) => ({
      title: 'New Task',
      headerLeft: <HeaderBackButton onPress={() => { navigation.replace('Task'); }} title="Task" tintColor="#ffffff" backTitleVisible />
    })
  },
  NewTaskList: {
    screen: NewTaskList,
    navigationOptions: ({ navigation }) => ({
      title: 'New Task List',
      headerLeft: <HeaderBackButton onPress={() => { navigation.replace('TaskList'); }} title="Task List" fontWeight="bold" tintColor="#ffffff" backTitleVisible />
    }),
  }
},
{
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#2e2c2e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}));
