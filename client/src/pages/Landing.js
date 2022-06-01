import React from 'react';
import '../pages/Landing.css';
import { Link } from 'react-router-dom';

export const Landing = () => {
  
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
