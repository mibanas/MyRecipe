import React, { useEffect, useState } from 'react'
import '../../Assets/styles/home.css';
import { Link } from 'react-router-dom';
import axios from "axios";

// import blogLis from


// ===================== image ===================== 
import Girlcircle from '../../Assets/img/Girlcircle.png';





function Home() {

  const [plats, setPlats] = useState([]);
  const [troisPlats, setTroisPlats] = useState([]);

  useEffect(() => {
    const getAllPlats = async () => {
      try {
        const responsePlats = await fetch('http://localhost:3000/plats');
        if (!responsePlats.ok) {
          return 'errors';
        }

        const dataPlats = await responsePlats.json();
        setPlats(dataPlats);
        console.log(dataPlats);
      } catch (error) {
        console.log(error);
      }
    };

    getAllPlats();
  }, []);

  useEffect(() => {
    if (plats.length >= 3) {
      const selectedTroisPlats = plats.slice(0, 3);
      setTroisPlats(selectedTroisPlats);
    }
  }, [plats]);


  return (

    <>
      <div className="Principale">
        <div className="Principale-Contents">

          <div className="Principale-Content0">
            Dive into Delights Of Delectable
            <span className="Principale-food"> Food</span>
          </div>

          <div className="Principale-Content1">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </div>

          <div className="principale-order">
            <Link to="/menu" className="principale-order-title">Discover now</Link>


          </div>

        </div>

        <div className="Principale-imgs">
          <img className='Principale-img' src={Girlcircle} alt="girl eat" />
        </div>


      </div>
      <div className='AllPRoducts'>
        <div className="AllPRoducts-title">Customer Favorites</div>
        <div className="AllPRoducts-title1">Popular Catagories</div>
        <div className='AllPRoducts-card'>

        {
          troisPlats.map((plats, i) =>

              <div className="AllPRoduc-card">

                <div key={i}>
                  <div className="AllPRoduct-card-image">
                    <img src={plats.image} alt="" className='AllPRoduct-card-img' />
                  </div>
                  <h2 className='AllPRoduct-card-recepies'>{plats.nom} </h2>
                  <h2>{plats.popularite} </h2>
                </div>

              </div>


          )

        }
                    </div>

      </div>
    </>
  )
}



export default Home







{/* <div className='AllPRoducts'>
      <div className="AllPRoducts-title">Customer Favorites</div>
      <div className="AllPRoducts-title1">Popular Catagories</div>
      <div className="AllPRoducts-card">

        <div className="AllPRoduc-card">
          <div className="AllPRoduct-card-image">  
            <img className='AllPRoduct-card-img' src={sandwish} alt="" />
          </div>
          <span className='AllPRoduct-card-recepies'>Main Dish</span>
          <span className='AllPRoduct-card-nbrecepies'>(86 dishes)</span>
        </div>

        <div className="AllPRoduc-card">
          <div className="AllPRoduct-card-image">  
            <img className='AllPRoduct-card-img' src={sandwish} alt="" />
          </div>
          <span className='AllPRoduct-card-recepies'>Main Dish</span>
          <span className='AllPRoduct-card-nbrecepies'>(86 dishes)</span>
        </div>

        <div className="AllPRoduc-card">
          <div className="AllPRoduct-card-image">  
            <img className='AllPRoduct-card-img' src={sandwish} alt="" />
          </div>
          <span className='AllPRoduct-card-recepies'>Main Dish</span>
          <span className='AllPRoduct-card-nbrecepies'>(86 dishes)</span>
        </div>

        <div className="AllPRoduc-card">
          <div className="AllPRoduct-card-image">  
            <img className='AllPRoduct-card-img' src={sandwish} alt="" />
          </div>
          <span className='AllPRoduct-card-recepies'>Main Dish</span>
          <span className='AllPRoduct-card-nbrecepies'>(86 dishes)</span>
        </div>
      </div>
    </div> */}