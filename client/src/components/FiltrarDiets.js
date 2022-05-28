import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByDiets } from '../redux/actions';
import './FiltrarDiets.css';

const FiltrarDiets = () => {

    const dispatch = useDispatch();
   
    const { allrecipes, alldiets } = useSelector(state => state);
    

    function handleFilterDiets(e){
        
        e.preventDefault()
        dispatch(filterByDiets(allrecipes, e.target.value))
        
    }
    
  return (
    <div className='container-dietstypes'>
        <label>Diets Types:</label>
        <select onChange={e => handleFilterDiets(e)}>
            {
                alldiets.sort()?.map((d, index) =>(
                    <option value={d.name} key={index}>{d.name.toUpperCase()}</option>
                    ))

            }
        </select>
    </div>
  )
}

export default FiltrarDiets