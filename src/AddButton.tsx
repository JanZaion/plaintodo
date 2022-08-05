type Props = {
  todos: string[];
  setTodos: (todos: string[]) => void;
  todo: string;
  setTodo: (todo: string) => void;
};

const AddButton = (props: Props) => {
  const { todos, setTodos, todo, setTodo } = props;

  return (
    <button
      onClick={() => {
        setTodos([...todos, todo]);
        setTodo('');
      }}
    >
      Add Item
    </button>
  );
};

export default AddButton;
