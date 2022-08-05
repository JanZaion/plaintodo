type Props = { content: string };

const Item = (props: Props) => {
  const { content } = props;
  return <li>{content}</li>;
};

export default Item;
