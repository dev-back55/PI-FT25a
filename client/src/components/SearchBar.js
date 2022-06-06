import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../redux/actions";
import "./SearchBar.css";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name) {
      dispatch(getRecipeName(name));
    } else {
      alert("Debe ingresar un nombre de raza!");
    }
    setName("");
  }

  return (
    <div>
      <input
        autoComplete="off"
        name="name"
        value={name}
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
};
