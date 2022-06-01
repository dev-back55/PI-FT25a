import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterId } from '../redux/actions';
import './Filtrar.css';

const Filtrar = () => {

    const dispatch = useDispatch();
    const { allrecipesBkp } = useSelector(state => state);
    

    function handleFilterId(e){
      e.preventDefault()
      dispatch(filterId(allrecipesBkp, e.target.value))
    }


  return (
    <div className='container-api-db'>
        <label>Recipes :</label>
        <select onClick={e => handleFilterId(e)}>
            <option value="All">All Recipes</option>
            <option value="Api">Api Recipes</option>
            <option value="DB">Created Recipes</option>
        </select>
    </div>
  )
}

export default Filtrar