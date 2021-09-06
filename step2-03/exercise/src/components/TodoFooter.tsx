import React from 'react';
import { Store } from '../store';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';

interface TodoFooterProps {
  clear: () => void;
  todos: Store['todos'];
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;

  // De făcut: încercați componenta de mai jos DefaultButton cu un suport "styles" 
  // - încercați-o cu un obiect: styles={{ ... }}
  // - încercați-o cu o funcție: styles={props => ({ ... })}
  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => props.clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
};
