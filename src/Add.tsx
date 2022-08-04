type Props = { todos: number; setTodos: (todos: number) => void };

const Add: React.FC<Props> = (props) => {
  const { todos, setTodos } = props;
  return <button onClick={() => setTodos(todos + 1)}>Add Item</button>;
};

export default Add;
