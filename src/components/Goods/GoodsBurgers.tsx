/** @format */

import { goodsName } from "../../store/GoodsStore";
import { useSelector } from "react-redux";
import classes from "./styles.module.scss";
import GoodsCard from "../ui/GoodsCard/GoodsCard";
import SortGoods from "../ui/GoodsCard/SortGoods";
import { useMemo } from "react";

export default function GoodsBurgers() {
  const burgers = useSelector(goodsName);

  const sortedGoods = useMemo(() => {}, [burgers]);

  return (
    <div>
      <SortGoods unit="burgers" />

      <div className={classes.container}>
        {burgers["burgers"].map((item) => (
          <GoodsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
