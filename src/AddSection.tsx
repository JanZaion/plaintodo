import AddButton from './AddButton';
import AddForm from './AddForm';
import { useState } from 'react';
import { Todo } from '../types/types';
import styles from '../styles/Home.module.scss';

type Props = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const AddSection = (props: Props) => {
  const { todos, setTodos } = props;
  const [todo, setTodo] = useState('');

  return (
    <div className={styles.addSection}>
      <AddForm setTodo={setTodo} todo={todo} />
      <AddButton setTodos={setTodos} todos={todos} todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default AddSection;
