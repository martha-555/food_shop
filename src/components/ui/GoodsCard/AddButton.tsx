/** @format */

import { useAppDispatch } from "../../../hooks/hooks";
import { add } from "../../../store/basketStore";

type Props = {
  itemId: string;
};

const AddButton = ({ itemId }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(add(itemId))}>add</button>
    </div>
  );
};
export default AddButton;
