import Item from '../src/Item';
import AddSection from './AddSection';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

// type ItemList = string[];

const AppContainer = () => {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <AddSection setTodos={setTodos} todos={todos} />
      <ul className={styles.appContainer}>
        {todos.map((e: string, i: number) => (
          <Item content={e} key={i} />
        ))}
      </ul>
    </>
  );
};

export default AppContainer;
