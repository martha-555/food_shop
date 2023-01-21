/** @format */
import GoodsSushi from "../components/GoodsSushi";
import { useDispatch } from "react-redux";
import { add } from "../store/basketStore";

export default function ShowSushi() {
  const dispatch = useDispatch();
  function addGoods(e) {
    let elem = e.target.getAttribute("data");

    if (elem) {
      dispatch(add(elem));
    } else {
      return;
    }
  }

  return (
    <div className="add-goods" onClick={addGoods}>
      <GoodsSushi />
    </div>
  );
}
