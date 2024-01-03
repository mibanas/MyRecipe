import React, { useCallback, useEffect, useState } from 'react'
import '../../Assets/styles/recipe.css';
import recipeImageTest from "../../Assets/img/plat1.jpeg"
import star from '../../Assets/Icons/Star.svg'
import { useParams } from 'react-router-dom';
import deleteRecepy from '../../api-functions/deleteRecepy';
import { useNavigate } from 'react-router-dom';


const RecepyDetail = () => {

  const [ plat , setPlat ] = useState({});
  const [ originCountryNumber, setoriginCountryNumber ] = useState("");
  const [ originCountry, setoriginCountry ] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();


  const getPlat = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3000/plats/${id}`)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json()


      setPlat(data)
      setoriginCountryNumber(data.origine)
      getOrigine(data.origine)
    } catch (error) {
      console.log(error);
    }
  })


  const getOrigine = useCallback(async (origine) => {
    try {
      const response = await fetch(`http://localhost:3000/origines/${origine}`)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json()

      setoriginCountry(data.nom)
    } catch (error) {
      console.log(error);
    }
  },[])


  useEffect(() => {
    getPlat()
  }, []);

  return (
    <div className='recepyContainer'>
      <div className='image-div'>
        <img id='recipeImage' src={recipeImageTest} alt="" />
      </div>
      <div className="details">
        <h1 id='platNom'>{plat.nom}</h1>
        <div className="ratings">
          <span>{originCountry} </span>
          <img src={star} alt="" />
          <small>{plat.popularite} </small>
        </div>
        <h2 id='ingredients'>Ingredients:</h2>
        <ul>
          {plat.ingredients?.map((ingredient) => {
            return (
              <li key={plat.ingredients.indexOf(ingredient)}>  - {ingredient}</li>
            )
          })}
        </ul>
        <div className="btns">
          <a id='update' href="#">update</a>
          <a id='delete' href="#" onClick={() => deleteRecepy(plat, navigate)}>delete</a>
        </div>
      </div>
    </div>
  )
}

export default RecepyDetail