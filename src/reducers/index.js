import { combineReducers } from 'redux';
import TodosReducers from './todos';
import FilterReducers from './filter';
import TokenReducers from './token';

export default combineReducers({
  todos: TodosReducers,
  filter: FilterReducers,
  token: TokenReducers,
});
