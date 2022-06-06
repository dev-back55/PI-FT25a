import React from "react";
import { useDispatch } from "react-redux";
import { selectPag } from "../redux/actions";
import "./pagina.css";
import previo from "../img/flecha-izquierda.png";
import siguiente from "../img/flecha-derecha.png";

const Pagina = ({ currentPage, maxpage }) => {
  const dispatch = useDispatch();

  // functions for change pages
  const clickNext = () => {
    if (currentPage < maxpage) {
      currentPage++;
      dispatch(selectPag(currentPage));
    }
  };

  const clickPrev = () => {
    if (currentPage > 1) {
      --currentPage;
      dispatch(selectPag(currentPage));
    }
  };

  return (
    <div className="container-btn">
      <button onClick={clickPrev} type="button">
        <img src={previo} alt="" />
      </button>

      <button className="btn-page">{currentPage}</button>

      <button onClick={clickNext} type="button">
        <img src={siguiente} alt="" />
      </button>
    </div>
  );
};

export default Pagina;
