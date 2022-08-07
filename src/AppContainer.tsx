import Item from '../src/Item';
import AddSection from './AddSection';
import styles from '../styles/Home.module.scss';
import { Todo } from '../types/types';
import { useState } from 'react';

const AppContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <AddSection setTodos={setTodos} todos={todos} />
      <ul className={styles.appContainer}>
        {todos.map((e: Todo, i: number) => (
          <Item content={e.todo} key={i} i={i} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
      <button onClick={() => setTodos([])}>clear list</button>
    </>
  );
};

export default AppContainer;
