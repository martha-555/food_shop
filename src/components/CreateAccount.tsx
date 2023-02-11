/** @format */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDatabase, ref, set } from "firebase/database";
import { setUser } from "../store/userStore";
import { updateProfile, User } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

export default function CreateAccount() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const signUp = (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential.user);
        if (auth.currentUser) {
          const user: User = auth.currentUser;
          console.log("user", user);
          updateProfile(user, {
            displayName: userName,
          })
            .then((user) => {
              console.log("Profile updated!", user);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div className="sign-in-container">
    //   <form onSubmit={signUp}>
    //     <h1>Create Account</h1>
    //     <input
    //       type="email"
    //       placeholder="Enter your email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     ></input>
    //     <input
    //       type="password"
    //       placeholder="Enter your password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     ></input>
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>
    <div className="account-form">
      <Form onSubmit={signUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label></Form.Label>
          <Form.Control
            required
            isInvalid
            type="text"
            placeholder="Ваше ім'я"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            required
            isInvalid
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            required
            isInvalid
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <div>
          <Button variant="secondary" type="submit">
            Зареєструватись
          </Button>
          <Button variant="outline-success" type="submit">
            <NavLink className="nav-link" to="/login">
              Увійти
            </NavLink>
          </Button>
        </div>
      </Form>
    </div>
  );
}
