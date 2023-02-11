/** @format */
import Card from "react-bootstrap/Card";
import Text from "./ui/Text";

export default function About() {
  return (
    <Card className="text-center about-card full-height">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Kvadrat Sushi&Pizza</Card.Title>
        <Card.Text>
          <Text>
            Kvadrat Sushi&Pizza – це сервіс доставки класичних та авторських
            суші, піци та страв WOK, приготованих з найсвіжіших продуктів без
            попередніх заготовок. Ми існуємо для того, щоб робити тебе
            щасливішим! Щоб кожного разу, коли смакуватимеш нашими стравами – ти
            отримував не просто задоволення, а задоволення в квадраті. Із
            Kvadrat Sushi&Pizza кожен день буде яскравішим та смачнішим!
            Відкривай для себе нові смаки італійської та японської кухонь і
            насолоджуйся.
          </Text>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2023</Card.Footer>
    </Card>
  );
}
