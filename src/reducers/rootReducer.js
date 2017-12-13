import { combineReducers } from 'redux';
import entriesReducer from './entriesReducer';

const rootReducer = combineReducers({
  entriesReducer,
});

export default rootReducer;
