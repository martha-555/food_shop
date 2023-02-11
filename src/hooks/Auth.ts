/** @format */

import { setUser } from "../store/userStore";
import { useAppDispatch } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";

export function Auth(user: User) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  user ? navigate("/my-account") : console.log("error blya");

  dispatch(
    setUser({
      userName: user.displayName,
      email: user.email,
      id: user.uid,
    })
  );
}
