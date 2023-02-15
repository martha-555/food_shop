/** @format */
import { GoodsList, GoodsSections } from "./types/common";

export const goods: GoodsList = {
  [GoodsSections.Pizza]: [
    {
      name: "Піца Оригінальна",
      price: 180,
      components: "маслини, курка, сир, соус",
      weight: 540,
      image: "../images/pizza1.png",
      id: "id1",
    },
    {
      name: "Піца Щедра",
      price: 210,
      components: "маслини, гриби, свинина, сир, соус",
      weight: 560,
      image: "../images/pizza2.png",
      id: "id2",
    },
    {
      name: "Піца Делікатесна",
      price: 200,
      components: "маслини, курка, ананас, сир, соус",
      weight: 480,
      image: "../images/pizza3.png",
      id: "id3",
    },
    {
      name: "Піца Соковита",
      price: 170,
      components: "помідори, курка, сир, соус",
      weight: 450,
      image: "../images/pizza4.png",
      id: "id4",
    },
    {
      name: "Піца Пекельна",
      price: 180,
      components: "перець гострий, курка, сир, соус",
      weight: 510,
      image: "../images/pizza5.png",
      id: "id5",
    },
    {
      name: "Піца Ніжна",
      price: 160,
      components: "гриби, курка, сир, соус",
      weight: 490,
      image: "../images/pizza1.png",
      id: "id6",
    },
  ],
  [GoodsSections.Burgers]: [
    {
      name: "Бургер Вейдер",
      price: 210,
      components: "бекон, куряча котлета, сир, соус",
      weight: 340,
      image: "../images/burger.png",
      id: "burg",
    },
    {
      name: "Бургер Дрейк",
      price: 260,
      components: "креветки, рукола, сир чеддер, соус",
      weight: 360,
      image: "../images/burger2.png",
      id: "burg1",
    },
    {
      name: "Бургер Трамп",
      price: 170,
      components: "салат, помідор, сир чеддер, соус, бекон",
      weight: 370,
      image: "../images/burger3.png",
      id: "burg2",
    },
  ],
  [GoodsSections.Sushi]: [
    {
      name: "Рол Мідорі",
      price: 180,
      components:
        "Рис, запечений лосось, авокадо, крем-сир, гриби шиітаке, норі, огірок, ікра тобіко, соус гостро-солодкий",
      weight: 170,
      image: "../images/rolls.png",
      id: "roll",
    },
    {
      name: "Рол Нобу",
      price: 120,
      components:
        "Рис, тофу, авокадо, огірок, вершковий сир, японський майо, норі, гриби шиітаке, тартар з мідій, паприка",
      weight: 190,
      image: "../images/rolls2.png",
      id: "roll2",
    },
    {
      name: "Рол Хот Філа",
      price: 160,
      components:
        "Лосось, суші-сир, кампіо, гострий майонез, сухарі панко, гостро-солодкий соус, фурікаке",
      weight: 210,
      image: "../images/rolls3.png",
      id: "roll3",
    },
  ],
};
