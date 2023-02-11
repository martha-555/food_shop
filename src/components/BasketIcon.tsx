/** @format */
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { basketChange } from "../store/basketStore";
import { useSelector } from "react-redux";

export default function BasketIcon() {
  let count = useSelector(basketChange);
  let all = 0;
  if (Object.keys(count).length !== 0) {
    all = Object.values(count).reduce((accum, count) => accum + count);
  }

  return (
    <div>
      <Nav>
        <Link to="/basket">
          <div className="img-fix">
            <p className="count">{all} </p>
            <img src="../images/shopping-cart3.png" alt="" />
          </div>
        </Link>
      </Nav>
    </div>
  );
}
