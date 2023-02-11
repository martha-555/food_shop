/** @format */
import { add, minus, delete_good } from "../../../store/basketStore";
import { basketChange } from "../../../store/basketStore";
import { useAuth } from "../../../hooks/useAuth";
import { getDiscount } from "../../../utils/discount";
import Counter from "../Counter/Counter";
import Price from "../Price/Price";
import Text from "../Text";
import classes from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import type { Props } from "../../../types/props";

const BasketCard = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(basketChange);
  const isAuth = useAuth();

  if (!item) return null;
  return (
    <div>
      <li className={classes.liFlex}>
        <div>
          <img src={item.image} alt="" className="img-basket" />
        </div>
        <div className={classes.cardContainer}>
          <Text> {item.name}</Text>
          <Counter
            value={basket[item.id]}
            onDelete={() => dispatch(delete_good(item.id))}
            onIncrease={() => dispatch(add(item.id))}
            onReduce={() => dispatch(minus(item.id))}
          ></Counter>

          <Price
            value={basket[item.id] * item.price}
            discount={getDiscount(isAuth.isAuth)}
          />
        </div>
      </li>
    </div>
  );
};
export default BasketCard;
