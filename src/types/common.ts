/** @format */

export enum GoodsSections {
  Pizza,
  Burgers,
  Sushi,
}

export type Goods = {
  name: string;
  price: number;
  image: string;
  weight: number;
  components: string;
  id: string;
};

export type GoodsList = {
  [key in GoodsSections]: Goods[];
};
