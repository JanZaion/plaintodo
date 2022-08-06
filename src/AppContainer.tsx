import Item from '../src/Item';
import AddSection from './AddSection';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

const AppContainer = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean[]>([]);

  return (
    <>
      <AddSection setTodos={setTodos} todos={todos} checked={checked} setChecked={setChecked} />
      <ul className={styles.appContainer}>
        {todos.map((e: string, i: number) => (
          <Item content={e} key={i} i={i} checked={checked} setChecked={setChecked} />
        ))}
      </ul>
      <button
        onClick={() => {
          setTodos([]);
          setChecked([]);
        }}
      >
        clear list
      </button>
    </>
  );
};

export default AppContainer;
