import React from 'react'
//import { useDispatch } from 'react-redux';
//import { clearDog } from '../actions/actions';
import './About.css'
import { useHistory } from 'react-router-dom';

const AcercaDe = () => {
  const history = useHistory();
  //const dispatch = useDispatch();

  const handlegoback = () => {
    //dispatch(clearDog())
    history.goBack()
  }

  return (
    <div className='container-total'>
        <div className='container-btn-home'>
            <button className='btn-home'
            onClick={handlegoback}>Home</button>
        </div>

        <div className='container-acercade'>
    
        </div>

        <div className='box-texto'>
    
            <span>Data Menu is an online library of healthy recipes and types of diets.
                 It is characterized by providing the user with the most up-to-date and detailed information in the world of healthy recipes.
                 It allows the user to explore, search and add recipes to the own database.
                 It allows to see the detailed information of the recipes.
                 It has filters by types of diets, both from existing recipes or created in the App.
                 It also has orders according to their name or punctuation and search by name of the recipes.

                 Welcome to Data Menu,
                                                            by Alberto Horacio Abitú
                                                                                               - Full Stack Developer -


            Sources:
            https://spoonacular.com/food-api 
            Images: Pixabay.com - Pexels.com // 
            Icons: Fonts.awesome.com - Icon-icons.com/es/ - Flaticon.es</span> 
      
        </div>
    </div>
  )
}

export default AcercaDe