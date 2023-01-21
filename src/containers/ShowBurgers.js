/** @format */
import GoodsBurgers from "../components/GoodsBurgers";
import { useDispatch } from "react-redux";
import { add } from "../store/basketStore";

export default function ShowBurgers() {
  const dispatch = useDispatch();
  function addGoods(e) {
    let elem = e.target.getAttribute("data");
    console.log(elem);
    if (elem) {
      dispatch(add(elem));
    } else {
      return;
    }
  }

  return (
    <div className="add-goods" onClick={addGoods}>
      <GoodsBurgers />
    </div>
  );
}
