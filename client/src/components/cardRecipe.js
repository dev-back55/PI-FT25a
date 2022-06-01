import React from "react";
//import { useDispatch } from 'react-redux';
import "../components/cardRecipe.css";
import { Link } from "react-router-dom";



export const CardRecipe = (props) => {
//  const dispatch = useDispatch();
  
  const { id, title, image, healthScore, diets } = props;

// function handleClick(){
//   dispatch(addDogFavorite(props))
//   alert("Agregado a Favoritos con Exito!!")
// }

  return (
    <>
      <div className="container">
        <div className="card-home">
          <div className="imgBx">
            <Link to={`/recipes/${id}`}>
              <img src={image} alt={title} />
            </Link>
          </div>

          <div className="contenido-card">
              <div className="titulo-fav">
                <h4>{title}</h4>
              </div>
              <div className="peso">
                <h5>Health Score: </h5>
                <div className="weight">
                  <span>{healthScore}</span>
                </div>
              </div>
              <div className="temps">
                <h5>Diet Type:</h5>
                <span>{diets.toString()}</span>
              </div>
          </div>          
        </div>
      </div>
    </>
  );
};
