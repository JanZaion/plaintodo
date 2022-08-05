type Props = { todo: string; setTodo: (todo: string) => void };

const AddForm = (props: Props) => {
  const { setTodo, todo } = props;

  return <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />;
};

export default AddForm;
