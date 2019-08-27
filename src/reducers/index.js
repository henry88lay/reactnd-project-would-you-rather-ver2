import {combineReducers} from 'redux';
import authUser from '../reducers/authUsers';
import questions from '../reducers/questions';
import users from '../reducers/users';

export default combineReducers({
  authUser,
  questions,
  users
});
