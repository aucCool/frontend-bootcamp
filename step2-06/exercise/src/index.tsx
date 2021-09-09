import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { createStore } from 'redux';
import { TodoApp } from './components/TodoApp';
import { initializeIcons } from '@uifabric/icons';
import { composeWithDevTools } from 'redux-devtools-extension';
// De făcut: importați { Provider } din 'react-redux';

const store = createStore(reducer, {}, composeWithDevTools());

initializeIcons();

// De făcut: înfășurați componenta <TodoApp> cu o componentă <Provider store={store}> 
ReactDOM.render(<TodoApp />, document.getElementById('app'));
