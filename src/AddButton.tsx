import { useEffect } from 'react';

type Props = {
  todos: string[];
  setTodos: (todos: string[]) => void;
  todo: string;
  setTodo: (todo: string) => void;
};

const AddButton = (props: Props) => {
  const { todos, setTodos, todo, setTodo } = props;

  const addItem = () => {
    setTodos([...todos, todo]);
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
