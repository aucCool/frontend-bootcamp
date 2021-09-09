import React from 'react';
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { FilterTypes } from '../store';
import { actions } from '../actions';
import { connect } from 'react-redux';

// De făcut: ?-le acestea după cheile interfeței o fac opțională
// și poate fi eliminat când ați terminat conectarea acestei componente
interface TodoHeaderProps {
  addTodo?: (label: string) => void;
  setFilter?: (filter: FilterTypes) => void;
}

interface TodoHeaderState {
  labelInput: string;
}

class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {
  constructor(props: TodoHeaderProps) {
    super(props);
    this.state = { labelInput: undefined };
  }

  render() {
    return (
      <Stack gap={10}>
        <Stack horizontal horizontalAlign="center">
          <Text variant="xxLarge">todos <Text variant="mediumPlus">(2.6 exercise)</Text></Text>
        </Stack>

        <Stack horizontal gap={10}>
          <Stack.Item grow>
            <TextField
              placeholder="What needs to be done?"
              value={this.state.labelInput}
              onChange={this.onChange}
              styles={props => ({
                ...(props.focused && {
                  field: {
                    backgroundColor: '#c7e0f4'
                  }
                })
              })}
            />
          </Stack.Item>
          <PrimaryButton onClick={this.onAdd}>Add</PrimaryButton>
        </Stack>

        <Pivot onLinkClick={this.onFilter}>
          <PivotItem headerText="all" />
          <PivotItem headerText="active" />
          <PivotItem headerText="completed" />
        </Pivot>
      </Stack>
    );
  }

  private onAdd = () => {
    this.props.addTodo(this.state.labelInput);
    this.setState({ labelInput: undefined });
  };

  private onChange = (evt: React.FormEvent<HTMLInputElement>, newValue: string) => {
    this.setState({ labelInput: newValue });
  };

  private onFilter = (item: PivotItem) => {
    this.props.setFilter(item.props.headerText as FilterTypes);
  };
}

// De făcut: scrieți funcțiile de mapare pentru stări și funcții de distribuire
/*
Sugestie: puteți începe prin copierea lipirii de mai jos a codului ca argumente pentru conectare()

  (state: Store) => ({
    // De făcut: mapare pentru stare
    // Sugestie: uitați-vă la ceea ce avea nevoie componenta din interfața suportului
  }),
  dispatch => ({
    // De făcut: mapare pentru acțiuni de distribuire
    // Sugestie: uitați-vă la ceea ce avea nevoie componenta din interfața suportului
  })
*/
const ConnectedTodoHeader = connect()(TodoHeader);
export { ConnectedTodoHeader as TodoHeader };
