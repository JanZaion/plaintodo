import { Todo } from '../types/types';

type Props = { content: string; todos: Todo[]; setTodos: (todos: Todo[]) => void; i: number };

const Item = (props: Props) => {
  const { content, todos, setTodos, i } = props;

  return (
    <li>
      {content}
      <input
        type="checkbox"
        onChange={() => {
          todos[i].checked = !todos[i].checked;
          setTodos([...todos]);
        }}
        checked={todos[i].checked}
      ></input>
    </li>
  );
};

export default Item;
