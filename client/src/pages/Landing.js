import React from 'react';
//import { useDispatch } from 'react-redux';
//import { getAllRecipes, getDbDiets } from '../redux/actions';
import '../pages/Landing.css';
import { Link } from 'react-router-dom';

export const Landing = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllRecipes());
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   dispatch(getDbDiets());
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="landing">
      <div className='titulo-landing'>
            <h1>Welcome to Data Menu</h1>
      </div>
      <div className='btn-ingresar'>      
            <Link to="/home" className="myButton">ENTER</Link>
      </div>      
    </div>
  )
}
