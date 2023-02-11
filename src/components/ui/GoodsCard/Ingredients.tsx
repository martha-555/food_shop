/** @format */
import Text from "../Text";
import { filterByComponents } from "../../../store/GoodsStore";
import { useAppDispatch } from "../../../hooks/hooks";

const Ingredients = () => {
  const dispatch = useAppDispatch();
  let componentsArr: any = new Set();

  const clickHandler = (e: any) => {
    const value = e.target.value;

    if (e.target.localName == "input") {
      componentsArr.add(value);
    }
    if (!e.target.checked) {
      componentsArr.delete(value);
    }
    let copy = [...componentsArr];
    // console.log(copy);
    dispatch(filterByComponents(copy));
  };

  return (
    <div onClick={clickHandler}>
      <input type="checkbox" value="гриби" id="" />
      <label htmlFor="">
        <Text>гриби</Text>{" "}
      </label>
      <input type="checkbox" value="маслини" id="" />
      <label htmlFor="">
        <Text>маслини</Text>{" "}
      </label>
    </div>
  );
};
export default Ingredients;
