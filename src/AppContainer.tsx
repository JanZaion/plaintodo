import Item from '../src/Item';
import Add from '../src/Add';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

const AppContainer = () => {
  const [todos, setTodos] = useState(0);

  return (
    <div className={styles.appContainer}>
      <Add setTodos={setTodos} todos={todos} />
      {[...Array(todos)].map((e, i) => (
        <Item key={i} />
      ))}
    </div>
  );
};

export default AppContainer;
