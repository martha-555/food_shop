/** @format */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/userStore";
import React, { useState } from "react";

export default function LogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user ? navigate("/my-account") : console.log("error blya");
        dispatch(
          setUser({
            user_name: user.displayName,
            email: user.email,
            id: user.uid,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="account-form">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <div>
          <Button variant="secondary" type="submit">
            Увійти
          </Button>
        </div>
      </Form>
      <Button variant="outline-success" type="submit">
        <NavLink className="nav-link" to="/create-account">
          Зареєструватись
        </NavLink>
      </Button>
    </div>
  );
}
