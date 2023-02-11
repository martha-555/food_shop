/** @format */
import { basketChange } from "../store/basketStore";
import { goodsName } from "../store/GoodsStore";
import { useAppSelector } from "../hooks/hooks";
import type { GoodsObj } from "../types/goodsObj";

export default function CheckoutBasket() {
  const goodsCount = useAppSelector(basketChange);
  let goods = useAppSelector(goodsName);
  let goodsCopy = Object.values(goods).flat();
  let goodsArr: GoodsObj = {};
  let allSum = 0;
  goodsCopy.map((item) => {
    goodsArr[item.id] = item;
  });
  console.log(goodsArr);

  allSum = Object.keys(goodsCount)
    .map((item) => goodsArr[item]["price"] * goodsCount[item])
    .reduce((accum, item) => accum + item);

  return (
    <div className="basket-list">
      <div>
        <p>Ваше замовлення:</p>
        <ul>
          {Object.keys(goodsCount).map((item) => (
            <li key={item}>
              <img
                src={goodsArr[item]["image"]}
                alt=""
                className="img-basket"
              />
              {goodsArr[item]["name"] + " x "}
              {goodsCount[item] + " = "}
              {goodsCount[item] * goodsArr[item]["price"]} грн
            </li>
          ))}
        </ul>
        <div>До оплати: {allSum} грн</div>
      </div>
    </div>
  );
}
