import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boards from '../views/Boards';
import Board from '../views/Board';
import Task from '../views/Task';
import NewBoard from '../views/NewBoard';

export default createAppContainer(createStackNavigator({
  Boards: {
    screen: Boards,
    navigationOptions: {
      title: 'Boards'
    }
  },
  Board: {
    screen: Board,
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
