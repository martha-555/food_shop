/** @format */
import Card from "react-bootstrap/Card";
import Text from "./ui/Text";

export default function Delivery() {
  return (
    <Card className="text-center about-card full-height">
      <Card.Header className=""></Card.Header>
      <Card.Body>
        <Card.Title>
          <Text>Безкоштовно доставляємо по Львову та за місто </Text>
        </Card.Title>
        <Card.Text>
          {" "}
          <Text>
            Замовлення приймаємо з 10:00 до 22:30 Після приготування ми миттєво
            запаковуємо страви та у спеціальних термо-сумках доставляємо їх до
            тебе. Щоб ти якомога швидше міг відчути неперевершений смак страв
            від KVADRAT SUSHI&PIZZA Оплатити замовлення можна: картою при
            отриманні замовлення готівкою при отриманні замовлення
          </Text>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2023</Card.Footer>
    </Card>
  );
}
