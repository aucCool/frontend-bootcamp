import { reducer } from './reducers';
import { createStore } from 'redux';
import { actions } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, {}, composeWithDevTools());

// De făcut: încercați să faceți aici căteva apeluri store.dispatch()
// Sugestie: rețineți să folosiți funcția înăutru obiectului "actions" 

console.log(store.getState());
