import { useEffect } from 'react';

type Props = {
  todos: string[];
  setTodos: (todos: string[]) => void;
  todo: string;
  setTodo: (todo: string) => void;
  checked: boolean[];
  setChecked: (checked: boolean[]) => void;
};

const AddButton = (props: Props) => {
  const { todos, setTodos, todo, setTodo, checked, setChecked } = props;

  const addItem = () => {
    setTodos([...todos, todo]);
    setTodo('');
    setChecked([...checked, false]);
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
  }, [todos, todo, checked]); //eslint-disable-line

  return <button onClick={() => addItem()}>Add Item</button>;
};

export default AddButton;
