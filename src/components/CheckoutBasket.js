/** @format */
import { basketChange } from "../store/basketStore";
import { goodsName } from "../store/GoodsStore";
import { useSelector } from "react-redux";

export default function CheckoutBasket() {
  const goodsCount = useSelector(basketChange);
  let goods = useSelector(goodsName);
  goods = Object.values(goods).flat();
  let goodsArr = [];
  let allSum = 0;

  goods.map((item) => {
    goodsArr[item.id] ??= [];
    goodsArr[item.id] = item;
  });

  allSum = Object.keys(goodsCount)
    .map((item) => parseInt(goodsArr[item]["price"]) * goodsCount[item])
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
              {goodsCount[item] * parseInt(goodsArr[item]["price"])} грн
            </li>
          ))}
        </ul>
        <div>До оплати: {allSum} грн</div>
      </div>
    </div>
  );
}
