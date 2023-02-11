/** @format */
import { goodsName } from "../../store/GoodsStore";
import { useSelector } from "react-redux";
import GoodsCard from "../ui/GoodsCard/GoodsCard";
import classes from "./styles.module.scss";
import SortGoods from "../ui/GoodsCard/SortGoods";
import Ingredients from "../ui/GoodsCard/Ingredients";

export default function GoodsPizza() {
  const goodsList = useSelector(goodsName);

  return (
    <div>
      <SortGoods unit="pizza" />
      <Ingredients />
      <div className={classes.container}>
        {goodsList["pizza"].map((item) => (
          <GoodsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
