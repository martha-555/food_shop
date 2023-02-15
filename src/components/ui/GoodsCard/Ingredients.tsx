/** @format */
import Text from "../Text";
// import { filterByComponents } from "../../../store/GoodsStore";
import { useAppDispatch } from "../../../hooks/hooks";
import { goodsName } from "../../../store/GoodsStore";
import { useSelector } from "react-redux";
import { GoodsSections } from "../../../types/common";
import { findByDisplayValue } from "@testing-library/react";

const Ingredients = () => {
  let goods = useSelector(goodsName);
  const dispatch = useAppDispatch();
  let componentsArr = new Set();
  console.log(goods[GoodsSections.Pizza]);

  const clickHandler = (e: any) => {
    const value = e.target.value;

    if (e.target.localName == "input") {
      componentsArr.add(value);
    }
    if (!e.target.checked) {
      componentsArr.delete(value);
    }
    let copy = [...componentsArr];
    console.log(copy);
    const arr = goods[GoodsSections.Pizza].filter((item) => {
      return copy.every((value: any) => item.components.includes(value));
    });
    console.log(arr);
  };
  // const list = [
  //   {
  //     name: "оригінальна",
  //     components: ["123", "гриби", "маслини"],
  //   },
  //   {
  //     name: "пікантна",
  //     components: ["123", "гриби"],
  //   },
  //   {
  //     name: "гостра",
  //     components: ["123"],
  //   },
  // ];

  // const compon = ["гриби", "маслини"];

  // const filtered = list.filter((item) => {
  //   return compon.every((e) => item.components.includes(e));
  // });

  // console.log(filtered);
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
