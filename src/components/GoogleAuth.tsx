/** @format */
import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { setUser } from "../store/userStore";
import { Auth } from "../hooks/Auth";

function GoogleAuth() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  provider.setCustomParameters({
    login_hint: "user@example.com",
  });
  function clickHandler() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        // Auth(user);
        user ? navigate("/my-account") : console.log("error blya");

        dispatch(
          setUser({
            userName: user.displayName,
            email: user.email,
            id: user.uid,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <div>
      <button onClick={clickHandler}>Google</button>
    </div>
  );
}
export default GoogleAuth;
