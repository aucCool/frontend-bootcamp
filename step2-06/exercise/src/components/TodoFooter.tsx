import React from 'react';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { actions } from '../actions';
import { connect } from 'react-redux';
import { Store } from '../store';

// De făcut: ?-le acestea după cheile interfeței o fac opțională
// și poate fi eliminat când ați terminat conectarea acestei componente
interface TodoFooterProps {
  todos?: Store['todos'];
  clear?: () => void;
}

const TodoFooter = (props: TodoFooterProps) => {
  const { todos, clear } = props;

  const itemCount = Object.keys(todos).filter(id => !todos[id].completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
};

// De făcut: scrieți funcțiile de mapare pentru stări și funcții de distribuire
/*
  Sugestie: puteți începe prin copierea lipirii de mai jos a codului ca argumente pentru conectare()

  (state: Store) => ({
    // TODO: mapping for state
    // HINT: look at what the component needed from the props interface
  }),
  dispatch => ({
    // TODO: mapping for dispatch actions
    // HINT: look at what the component needed from the props interface
  })
*/
const ConnectedTodoFooter = connect()(TodoFooter);
export { ConnectedTodoFooter as TodoFooter };
