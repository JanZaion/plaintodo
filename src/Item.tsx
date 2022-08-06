type Props = { content: string; checked: boolean[]; setChecked: (checked: boolean[]) => void; i: number };

const Item = (props: Props) => {
  const { content, checked, setChecked, i } = props;

  return (
    <li>
      {content}
      <input
        type="checkbox"
        onChange={() => {
          checked[i] = !checked[i];
          setChecked([...checked]);
        }}
        checked={checked[i]}
      ></input>
    </li>
  );
};

export default Item;
