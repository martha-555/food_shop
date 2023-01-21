/** @format */

// /** @format */

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import city from "../Cities.json";
import CheckoutBasket from "./CheckoutBasket";
import Basket from "./Basket/Basket";
// import { basketChange } from "../store/basketStore";
// import { goodsName } from "../store/GoodsStore";
// import { useSelector } from "react-redux";

export default function Checkout() {
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [style, setStyle] = useState("");
  //   const basketGoods = useSelector(basketChange);
  //   let goods = useSelector(goodsName);
  //   goods = Object.values(goods).flat();
  //   console.log(goods);
  //   let goodsArr = [];

  //   goods.map((item) => {
  //     goodsArr[item.id] ??= [];
  //     goodsArr[item.id] = item;
  //   });
  //   console.log(goodsArr);
  //   console.log(basketGoods);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  let cityArr = [];
  city.map((item) => {
    cityArr.push({ city: item["object_name"], region: item["region"] });
  });

  function changeHandler(e) {
    let listCity = [];
    let value = e.target.value.replace('/ +/g, " "');
    setInputValue(e.target.value);

    cityArr.map((item) => {
      if (
        item["city"].toLowerCase().startsWith(value.toLowerCase()) &&
        value !== ""
      ) {
        listCity.push({ city: item["city"], region: item["region"] });
        listCity = listCity.slice(0, 5);
      }
    });
    setSelected(listCity);
  }

  return (
    <div>
      <div>
        <CheckoutBasket />
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label></Form.Label>
            <Form.Control required type="text" placeholder="Ваше ім'я" />
            <Form.Control.Feedback>Готово!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label></Form.Label>
            <Form.Control required type="number" placeholder="Номер телефону" />
            <Form.Control.Feedback>Готово!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            {/* <Form.Label>Username</Form.Label> */}
            {/* <InputGroup hasValidation> */}
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Місто"
                onChange={changeHandler}
                value={inputValue}
                required
              />
              {inputValue ? (
                <ul className={style}>
                  {selected.map((item, index) => (
                    <li
                      key={index}
                      onClick={(e) => {
                        setStyle("none");
                        setInputValue(e.target.textContent);
                      }}
                    >
                      {item.city}
                    </li>
                  ))}
                </ul>
              ) : null}
              <Form.Control.Feedback type="invalid">
                Заповніть поле, будь ласка
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              Заповніть поле, будь ласка
            </Form.Control.Feedback>
            {/* </InputGroup> */}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Вулиця" required />
            <Form.Control.Feedback type="invalid">
              Заповніть поле, будь ласка
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Номер будинку" required />
            <Form.Control.Feedback type="invalid">
              Заповніть поле, будь ласка
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label></Form.Label>
            <Form.Control type="number" placeholder="Номер квартири" />
            {/* <Form.Control.Feedback type="invalid">
              Заповніть поле, будь ласка
            </Form.Control.Feedback> */}
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Погоджуюсь з умовами"
            feedback="Ви повинні погодитись з умовами"
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Підтвердити замовлення</Button>
      </Form>
    </div>
  );
}

// export default function Checkout() {
//   const [selected, setSelected] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [a, setA] = useState("");

//   let cityArr = [];

//   city.map((item) => {
//     let city_name = item["object_name"];
//     cityArr.push({ city: item["object_name"], region: item["region"] });
//   });

//   function changeHandler(e) {
//     let listCity = [];
//     let value = e.target.value.replace('/ +/g, " "');
//     // const value = target.value.trim().replace(/ +/g, ' ')
//     setInputValue(e.target.value);

//     cityArr.map((item) => {
//       if (
//         item["city"].toLowerCase().startsWith(value.toLowerCase()) &&
//         value !== ""
//       ) {
//         listCity.push({ city: item["city"], region: item["region"] });
//         listCity = listCity.slice(0, 5);
//       }
//     });
//     setSelected(listCity);
//     // console.log("select", selected);
//     // console.log("check", listCity);
//   }

//   function clickCity(e) {
//     setA("none");
//     setInputValue(e.target.textContent);
//   }
//   return (
//     <div className="form">
//       <Form.Control size="lg" type="text" placeholder="Ваше ім'я" />
//       <br />
//       <Form.Control size="lg" type="number" placeholder="Номер телефону" />
//       <br />
//       <Form.Control
//         size="lg"
//         type="text"
//         placeholder="Місто"
//         onChange={changeHandler}
//         value={inputValue}
//       />
//       {inputValue ? (
//         <ul className={a}>
//           {selected.map((item, index) => (
//             <li
//               key={index}
//               onClick={(e) => {
//                 setA("none");
//                 setInputValue(e.target.textContent);
//               }}
//             >
//               {item.city} ({item.region})
//             </li>
//           ))}
//         </ul>
//       ) : null}

//       <br />
//       <Form.Control size="lg" type="text" placeholder="Вулиця" />
//       <br />
//       <Form.Control size="lg" type="number" placeholder="Номер будинку" />
//       <br />
//       <Form.Control size="lg" type="number" placeholder="Номер квартири" />
//       <Button variant="secondary" type="submit">
//         Підтвердити замовлення
//       </Button>
//     </div>
//   );
// }
