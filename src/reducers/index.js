import { combineReducers } from 'redux';
import TodosReducers from './todos';

export default combineReducers({
  todos: TodosReducers,
});
