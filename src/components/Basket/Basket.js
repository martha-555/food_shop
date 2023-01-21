/** @format */
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { basketChange } from "../../store/basketStore";
import { goodsName } from "../../store/GoodsStore";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../useAuth";
import Price from "../ui/Price/Price";
import Text from "../ui/Text/Text.tsx";
import classes from "./styles.module.scss";
import { getDiscount } from "../../utils/discount";
import BasketCard from "../ui/BasketCard/BasketCard";

export default function Basket() {
  const basket = useSelector(basketChange);
  const goods = useSelector(goodsName);

  let goodsArr = [];
  const isAuth = useAuth();

  for (let key of Object.values(goods)) {
    for (let value of key) {
      let id = value.id;
      goodsArr[id] ??= [];
      goodsArr[id] = value;
    }
  }
  let allSum = 0;

  if (Object.keys(basket).length !== 0) {
    allSum = Object.keys(basket)
      .map((item) => basket[item] * parseInt(goodsArr[item]["price"]))
      .reduce((accum, item) => accum + item);
  }

  return (
    <div className="basket-list">
      <div className="basket-goods">
        {Object.keys(basket).map((item) => (
          <BasketCard key={item} item={goodsArr[item]} />
        ))}
        <div className="all-sum">
          {allSum > 0 ? (
            <div>
              <div className={classes.sumWrap}>
                <Text>Сума:</Text>
                <Price value={allSum} discount={getDiscount(isAuth.isAuth)} />
              </div>
              <Button variant="outline-secondary">
                <Nav>
                  <Link to="/checkout">Оформити замовлення</Link>
                </Nav>
              </Button>
            </div>
          ) : (
            <Text>Ваш кошик пустий</Text>
          )}
        </div>
      </div>
    </div>
  );
}
