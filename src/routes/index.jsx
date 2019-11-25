import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boards from '../views/Boards';
import Board from '../views/Board';
import Task from '../views/Task';

export default createAppContainer(createStackNavigator({
  Boards,
  Board,
  Task
}));
