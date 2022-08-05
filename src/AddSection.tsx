import AddButton from './AddButton';
import AddForm from './AddForm';
import { useState } from 'react';

type Props = { todos: string[]; setTodos: (todos: string[]) => void };

const AddSection = (props: Props) => {
  const { todos, setTodos } = props;
  const [todo, setTodo] = useState('');

  return (
    <div>
      <AddForm setTodo={setTodo} />
      <AddButton setTodos={setTodos} todos={todos} todo={todo} />
    </div>
  );
};

export default AddSection;
