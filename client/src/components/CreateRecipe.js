import React, { useEffect, useState } from 'react';
import './CreateRecipe.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDbDiets, postCreateRecipe } from '../redux/actions';
import { Link, useHistory } from 'react-router-dom';

// validacion
export function validate(recipe){

  let errors = {};

  if(recipe.title.length === 0) {
    errors.title = 'Name of recipe required'
  }

  // if (!/^[a-zñ]+[a-zñ\s]+[a-zñ]$/i.test(recipe.title)) {
  //   errors.title = 'Title invalid, not acept number';
  // } 
  ///^[a-z ,.'-]+$/
  
  if(!recipe.aggregateLikes){
    errors.aggregateLikes = 'You must enter a value'
  }

  if(!recipe.healthScore){
     errors.healthScore = 'You must enter a value'
  }

  if(recipe.summary.length === 0){
    errors.summary = 'You must enter a value'
  }
  
  return errors;
}

export const CreateRecipe = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDbDiets())
  },[dispatch])

  const { alldiets } = useSelector(state => state);
  const [errors, setErrors] = useState({});

  const [recipe, setRecipe] = useState({
    title:'',
    image: '',
    summary: '',
    aggregateLikes: 0,
    healthScore: 0,
    steps: '',
    selectedDiets:[]
  })

  
  

  function handleChange(e) {
		setRecipe({
			...recipe,
			[e.target.name]: e.target.value
		});

    setErrors(validate({
      ...recipe, 
      [e.target.name]: e.target.value
    }))
  }
  
  function handleSelect(e){
    let haydiets = recipe.selectedDiets.find(diet => diet === e.target.value)
    if (!haydiets){
      setRecipe({
        ...recipe,
        selectedDiets: [...recipe.selectedDiets, e.target.value],
        
      })
    }else alert("Diet type selected...!");
  }

  function handleSubmit(e){
    e.preventDefault();
    if(recipe.title !== '' || recipe.summary !== '' || recipe.healthScore !== 0){
      
        dispatch(postCreateRecipe(recipe))
        alert("Recipe Created successfully...!!")
        setRecipe({
          title:'',
          image: '',
          summary: '',
          aggregateLikes: 0,
          healthScore: 0,
          steps: '',
          selectedDiets:[]
        })
    }else alert('Missing data cant create Recipe..!!') 
  history.push('/home')
  }

  return (
    <div className='container-form'>
        
        <h1>Create Recipe</h1>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label className='form-label'>Title:</label>
                <input className='form-input'
                   type="text"
                   placeholder='enter name of recipe'
                   value={recipe.title}
                   name="title"
                   onChange={(e) => handleChange(e)}
                 />
                 { errors.title && 
                   <p className='error'>{errors.title}</p>
                 }
            </div>
            <div>
                <label className='form-label'>Likes:</label>
                <input className='form-input'
                   type="number"
                   placeholder="likes"
                   name="aggregateLikes"
                   onChange={(e) => handleChange(e)}
                   />
                   {errors.aggregateLikes && (
                   <p className='error'>{errors.aggregateLikes}</p>
                    )}
            </div>    
            <div>
                <label className='form-label'>Health Score:</label>
                <input className='form-input'
                   type="number"
                   placeholder="health score"
                   name="healthScore"
                   onChange={(e) => handleChange(e)}
                   />
                   {errors.healthScore && (
                   <p className='error'>{errors.healthScore}</p>
                    )}
                   
            </div>
            <div>
                <label className='form-label'>Summary:</label>
                <textarea className='form-input'
                   placeholder="summary"
                   rows="5"
                   cols="25" 
                   name="summary"
                   onChange={(e) => handleChange(e)}
                   />
                   {errors.summary && (
                   <p className='error'>{errors.summary}</p>
                    )}
                   
            </div>
            <div>
                <label className='form-label'>Steps:</label>
                <textarea className='form-input'
                   placeholder="steps"
                   rows="5"
                   cols="25" 
                   name="steps"
                   onChange={(e) => handleChange(e)}
                   />
                   
            </div>
            <div>
                <label className='form-label'>Imagen:</label>
                <input className='form-input'
                   type="text"
                   placeholder='imagen'
                   value={recipe.image}
                   name="image"
                   //required
                   onChange={(e) => handleChange(e)}
                 />
            </div>
            <div>
                <label className='form-label'>Diets Types</label>
              <select className='form-select'
                    
                   name="selectedDiets"
                   required
                   onChange={e => handleSelect(e)}
                   >
                     <option>Select Diet</option>
                     {
                        alldiets?.map(diet =>(
                          <option value={diet.name} key={diet.id}>{diet.name}</option>
                          ))

                     }

                </select>     
            </div>
            <div className='form-lista-temp'>
            <ul><li>{recipe.selectedDiets.map(e => e + ' - ')}</li></ul>
            </div>
            <div className='container-btn'>
            <Link to='/home'><button className='btn-volver'>CANCEL</button></Link>
            <button className='btn-submit' type='submit'>CREATE RECIPE</button>
            </div>
        </form>


    </div>
  )
}
