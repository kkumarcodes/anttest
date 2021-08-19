import combineReducers from 'react-combine-reducers';
import authReducer, { initialState as authInitialState } from './reducers/authReducer';

export const [reducer, initialState] = combineReducers({
  auth: [authReducer, authInitialState]
});
