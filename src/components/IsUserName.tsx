/** @format */

/** @format */
import Button from "react-bootstrap/Button";

export default function IsUserName() {
  return (
    <div>
      <h1>Вітаю, ! </h1>
      <h2>Для зареєстрованих користувачів діє знижка 10%! </h2>
      <Button as="input" type="button" value="Вийти" variant="secondary" />
    </div>
  );
}
