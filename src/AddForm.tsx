type Props = { setTodo: (todo: string) => void };

const AddForm = (props: Props) => {
  const { setTodo } = props;

  return <input type="text" onChange={(e) => setTodo(e.target.value)} />;
};

export default AddForm;
