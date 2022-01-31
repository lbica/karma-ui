import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const ReactReduxDevTools = 
window.__REDUX__DEVTOOLS__EXTENSION__ && window.__REDUX__DEVTOOLS__EXTENSION__();

// let store;
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));

// store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware)),
//         ReactReduxDevTools
// );

export default store;
