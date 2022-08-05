type Props = { todos: string[]; setTodos: (todos: string[]) => void; todo: string };

const AddButton = (props: Props) => {
  const { todos, setTodos, todo } = props;

  return (
    <button
      onClick={() => {
        setTodos([...todos, todo]);
      }}
    >
      Add Item
    </button>
  );
};

export default AddButton;
