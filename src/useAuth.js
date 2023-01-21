/** @format */

import { useSelector } from "react-redux";
export function useAuth() {
  const { email, id, userName } = useSelector((state) => state.user.user);

  return {
    isAuth: !!email,
    email,

    id,
    userName,
  };
}
