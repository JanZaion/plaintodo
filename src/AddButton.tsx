import { useEffect } from 'react';
import { Todo } from '../types/types';

type Props = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  todo: string;
  setTodo: (todo: string) => void;
};

const AddButton = (props: Props) => {
  const { todos, setTodos, todo, setTodo } = props;

  const addItem = () => {
    setTodos([...todos, { todo, checked: false }]);
    setTodo('');
  };

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        addItem();
      }
    };
    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, [todos, todo]); //eslint-disable-line

  return <button onClick={() => addItem()}>Add Item</button>;
};

export default AddButton;
