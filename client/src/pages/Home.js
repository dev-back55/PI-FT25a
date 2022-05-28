import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRecipes, getDbDiets } from '../redux/actions';
import Pagina from '../components/pagina';
import Spinner from '../components/Spinner';
import './Home.css';
import {SearchBar} from '../components/SearchBar';
import Filtrar from '../components/Filtrar';
import FiltrarDiets from '../components/FiltrarDiets';
import Ordenar from '../components/Ordenar';
import { CardRecipe } from '../components/cardRecipe';


export const Home = () => {
  const dispatch = useDispatch();

  const { allrecipes, pagina } = useSelector(state => state);
  
  let currentPage = 0
  currentPage = pagina

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(getDbDiets());
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  //? paginado de flechas
const maxpage = Math.ceil(allrecipes?.length / 8)

 const recipeToShow = () => {
     const recipShow = allrecipes?.slice(
         (currentPage - 1 ) * 8,
         (currentPage - 1 ) * 8 + 8
     )
     return recipShow
 }



  return (
    <>
      <nav className="main-navbar">
            <ul className="navbar-container">
                <li className="logo">
                    <a href="/" className="navbar-link">
                        <svg aria-hidden="true" focusable="false" className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z"/>
                        </svg>
                        <span className="link-text">eBook Recipes</span>
                    </a>
                </li>
                <li className="navbar-item">
                    <Link to="/recipe/create" className="navbar-link">
                        <svg className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M96 128C96.53 128 97.07 128 97.6 128C105 91.49 137.3 64 176 64C190.1 64 204.1 68.1 216.9 75.25C230.2 49.55 257.1 32 288 32C318.9 32 345.8 49.56 359.1 75.25C371 68.1 385 64 400 64C438.7 64 470.1 91.49 478.4 128C478.9 128 479.5 128 480 128C515.3 128 544 156.7 544 192C544 203.7 540.9 214.6 535.4 224H40.56C35.12 214.6 32 203.7 32 192C32 156.7 60.65 128 96 128H96zM16 283.4C16 268.3 28.28 256 43.43 256H532.6C547.7 256 560 268.3 560 283.4C560 356.3 512.6 418.2 446.9 439.8C447.6 442.4 448 445.2 448 448C448 465.7 433.7 480 416 480H160C142.3 480 128 465.7 128 448C128 445.2 128.4 442.4 129.1 439.8C63.4 418.2 16 356.3 16 283.4H16z"/>
                        </svg>
                        <span className="link-text">Create Recipe</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/recipes/favorites" className="navbar-link">
                        <svg className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M256 368C256 403.7 266.6 436.9 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C103.6 15.73 186.5 24.72 236.5 75.67L256.4 96.64L275.4 75.67C325.4 24.72 407.3 15.73 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C484.3 198 458.8 192 432 192C334.8 192 256 270.8 256 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7H476.7z"/>
                        </svg>
                        <span className="link-text">Favorites</span>
                    </Link>
                </li> 
                <li className="navbar-item">
                    <Link to="/recipes/about" className="navbar-link">
                        <svg className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/>
                        </svg>
                        <span className="link-text">About</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">
                        <svg className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256V32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V256zM80 256C80 353.2 158.8 432 256 432C353.2 432 432 353.2 432 256C432 201.6 407.3 152.9 368.5 120.6C354.9 109.3 353 89.13 364.3 75.54C375.6 61.95 395.8 60.1 409.4 71.4C462.2 115.4 496 181.8 496 255.1C496 388.5 388.5 496 256 496C123.5 496 16 388.5 16 255.1C16 181.8 49.75 115.4 102.6 71.4C116.2 60.1 136.4 61.95 147.7 75.54C158.1 89.13 157.1 109.3 143.5 120.6C104.7 152.9 80 201.6 80 256z"/>
                        </svg>
                        <span className="link-text">Exit</span>
                    </Link>
                </li>    
            </ul>
        </nav>
        <main>
          <div className='container-navbar'>
                <Filtrar />
                <FiltrarDiets />
                <Ordenar />
                <SearchBar />
                <Pagina currentPage={currentPage} maxpage={maxpage}></Pagina>

          </div>
               {               
                 !recipeToShow()?.length
                 ? <Spinner />
                 : recipeToShow()?.map((recip, index) =>(
                    <CardRecipe key={index} {...recip} />
                 ))
               }
            
        </main>
    </>
  )
}