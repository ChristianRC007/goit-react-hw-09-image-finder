interface Props {
  onClick: () => void;
  id?: string;
}

export default function Button({ onClick, id }: Props) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      Load more
    </button>
  );
}
