import React, { useEffect } from 'react';
import './RecipDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearRecip, getRecipeDetail } from '../redux/actions';
import { useHistory } from 'react-router-dom';
import Spinner from '../components/Spinner';

export const RecipDetail = ({match}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const matchId=match.params.id;

  useEffect(() => {
    dispatch(getRecipeDetail(matchId))
  },[dispatch, matchId]);
  
  const {recipe} = useSelector(state => state);
  const { id, title, image, summary, aggregateLikes, healthScore, steps, diets } = recipe
    
  const handlegoback = () => {
    dispatch(clearRecip())
    history.goBack()
  }

if(!recipe) return <Spinner />

  return (
        
      <div className='container-details'>  
        <div className='container-btn'>
        <button className='btn-home' onClick={handlegoback}>Back</button>
        </div>
      <div className="container-titulo" key={id}>
        <div className="card-titulo">

            <div className="imgBox">
              <img src={image} alt={title} />  
            </div>

            <div className="titulo">
                <h2>{title}</h2>
                <h4>Health Score:</h4>
                <span>{healthScore}</span>
                <h4>Score Likes:</h4>
                <span>{aggregateLikes}</span>
                <h4>Diet Type:</h4>
                <span>{diets}</span>
            </div>    
        </div>  

        <div className="card-info">
            <div className="summary">
              <h4>Summary:</h4>
              <span>{summary}</span>
            </div>
            <div className="steps">
              <h4>Steps:</h4>
              <span>{steps}</span>
            </div>                  
        </div>
      </div>
      </div>    
  )    
  
}