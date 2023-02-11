/** @format */

import { goodsName } from "../../store/GoodsStore";
import { useSelector } from "react-redux";
import GoodsCard from "../ui/GoodsCard/GoodsCard";
import classes from "./styles.module.scss";
import SortGoods from "../ui/GoodsCard/SortGoods";
export default function GoodsSushi() {
  const sushi = useSelector(goodsName);

  return (
    <div>
      <SortGoods unit="sushi" />
      <div className={classes.container}>
        {sushi["sushi"].map((item) => (
          <GoodsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
