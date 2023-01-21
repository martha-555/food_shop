/** @format */
import Button from "react-bootstrap/Button";

export default function IsUserName(prop) {
  console.log(prop);
  return (
    <div>
      <h1>Вітаю, {prop.userName} ! </h1>
      <h2>Для зареєстрованих користувачів діє знижка 10%! </h2>
      <Button
        as="input"
        type="button"
        value="Вийти"
        variant="secondary"
        onClick={prop.clickHandler}
      />
    </div>
  );
}
