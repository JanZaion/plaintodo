import AddButton from './AddButton';
import AddForm from './AddForm';
import { useState } from 'react';

type Props = {
  todos: string[];
  setTodos: (todos: string[]) => void;
  checked: boolean[];
  setChecked: (checked: boolean[]) => void;
};

const AddSection = (props: Props) => {
  const { todos, setTodos, checked, setChecked } = props;
  const [todo, setTodo] = useState('');

  return (
    <div>
      <AddForm setTodo={setTodo} todo={todo} />
      <AddButton
        setTodos={setTodos}
        todos={todos}
        todo={todo}
        setTodo={setTodo}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default AddSection;
