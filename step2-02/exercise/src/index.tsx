import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './components/TodoApp';
import { initializeIcons } from '@uifabric/icons';

// Inițializați pictogramele UI Fabric pe care le putem utiliza 
// Alegeți una din această listă: https://developer.microsoft.com/en-us/fabric#/styles/icons
initializeIcons();

ReactDOM.render(<TodoApp />, document.getElementById('app'));
