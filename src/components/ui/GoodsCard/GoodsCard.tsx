/** @format */
import classes from "./styles.module.scss";
import Text from "../Text";
import type { Props } from "../../../types/props";
import AddButton from "./AddButton";

const GoodsCard = ({ item }: Props) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.goodsCard}>
        <div>
          <img src={item.image} alt="" className={classes.cardImg} />
        </div>
        <div>
          <Text>{item.name} </Text>{" "}
        </div>
        <div>
          <Text>{item.weight}г </Text>
        </div>
        <div>
          <Text>{item.components} </Text>
        </div>
        <Text>{item.price} грн </Text>
      </div>
      <AddButton itemId={item.id} />
    </div>
  );
};
export default GoodsCard;
