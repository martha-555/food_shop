/** @format */
import { removeUser, userInfo } from "../store/userStore";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { UserInfo } from "firebase/auth";
import { useSelector } from "react-redux";
// import IsUserName from "../components/IsUserName";
import LogIn from "../components/LogIn";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function MyAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(userInfo);

  function clickHandler() {
    dispatch(removeUser());
  }
  return (
    <div className="cabinet full-height">
      <div className="div-cabinet">
        {/* {user.userName ? (
          <IsUserName userName={user.userName} clickHandler={clickHandler} />
        ) : (
          navigate("/login")
        )} */}
        <h1>Вітаю, {user.userName} ! </h1>
        <h2>Для зареєстрованих користувачів діє знижка 10%! </h2>
        <Button
          type="button"
          value="Вийти"
          variant="secondary"
          onClick={clickHandler}
        >
          <NavLink className="nav-link" to="/login">
            Вийти
          </NavLink>
        </Button>
      </div>
      {/* <button onClick={clickHandler} style={{ marginTop: "100px" }}>
        <NavLink className="nav-link" to="/login">
          Вийти
        </NavLink>
      </button> */}
    </div>
  );
}
