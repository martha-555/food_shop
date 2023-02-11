/** @format */

import Text from "../Text/Text";
import classes from "./styles.module.scss";
type Props = {
  value: number;
  discount?: number;
};
const Price = ({ value, discount = 0 }: Props) => {
  return (
    <div className={classes.container}>
      {discount ? (
        <Text className={classes.oldPrice} color="red">
          {value} грн
        </Text>
      ) : null}
      <Text>{value - value * discount} грн</Text>
    </div>
  );
};

export default Price;
