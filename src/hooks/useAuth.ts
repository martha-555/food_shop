/** @format */
import { useAppSelector } from "./hooks";

export function useAuth() {
  const { email, id, userName } = useAppSelector((state) => state.user.user);

  return {
    isAuth: !!email,
    email,

    id,
    userName,
  };
}
