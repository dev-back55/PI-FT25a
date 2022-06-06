import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName } from "../redux/actions";
import "./Ordenar.css";

const Ordenar = () => {
  const dispatch = useDispatch();
  const { allrecipes } = useSelector((state) => state);

  function handleOrdenarByName(e) {
    e.preventDefault();
    dispatch(orderByName(allrecipes, e.target.value));
  }

  return (
    <div className="container-orderby">
      <label>Order :</label>
      <select onClick={(e) => handleOrdenarByName(e)}>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
        <option value="pasc">Lower health score</option>
        <option value="pdesc">Higher health score</option>
      </select>
    </div>
  );
};

export default Ordenar;
