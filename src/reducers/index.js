import { combineReducers } from 'redux';
import TodosReducers from './todos';
import FilterReducers from './filter';

export default combineReducers({
  todos: TodosReducers,
  filter: FilterReducers,
});
