import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
    navigationOptions: {
      title: 'Task List'
    }
  },
  Task: {
    screen: Task,
    navigationOptions: {
      title: 'Task'
    }
  },
  NewBoard: {
    screen: NewBoard,
    navigationOptions: {
      title: 'New Board'
    },
  },
  NewTask: {
    screen: NewTask,
    navigationOptions: {
      title: 'New Task'
    }
  },
  NewTaskList: {
    screen: NewTaskList,
    navigationOptions: {
      title: 'New Task List'
    }
  }
},
{
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}));
