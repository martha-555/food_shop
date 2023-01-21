/** @format */
import Text from "../Text";

type Props = {
  value: number;
  onReduce: () => void;
  onDelete: () => void;
  onIncrease: () => void;
};

const Counter = ({ value, onReduce, onDelete, onIncrease }: Props) => {
  return (
    <div>
      <button className="delete" onClick={onDelete}>
        X
      </button>

      <div className="buttons">
        <button onClick={onReduce}>-</button>

        <Text>{value}</Text>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};
export default Counter;
