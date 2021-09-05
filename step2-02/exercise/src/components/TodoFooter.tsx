import React from 'react';
import { Store } from '../store';

// De făcut: importați DefaultButton, Stack, și Text

interface TodoFooterProps {
  clear: () => void;
  todos: Store['todos'];
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;

  // De făcut:
  // 1. înlocuiți <footer>-ul cu controlul Fabric-ii <Stack>
  // 2. înlocuiți <span>-ul cu controlul Fabric-ii <Text>
  // 3. înlocuiți <button>-ul cu controlul Fabric-ii <DefaultButton>

  return (
    <footer>
      <span>
        {itemCount} item{itemCount <= 1 ? '' : 's'} left
      </span>
      <button onClick={() => props.clear()} className="button">
        Clear Completed
      </button>
    </footer>
  );
};
