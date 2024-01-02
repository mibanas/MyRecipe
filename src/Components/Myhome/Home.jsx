import React from 'react'
import image from "../../Assets/img/circle.png"
import image0 from "../../Assets/img/Girlcircle.png"


import picture from "../../Assets/img/Intersect.png"
import { Link } from 'react-router-dom'
import "../../Assets/styles/home.css"
import image1 from "../../Assets/img/pngwing 4.png"
import image2 from "../../Assets/img/pngwing 6.png"
import image3 from "../../Assets/img/pngwing 3.png"
import image4 from "../../Assets/img/pngwing 7.png"




import img_10 from "../../Assets/img/img_10.jpg"


const list = [
  "learn new recipes ",
  "Experiment with food ",
  "Write your own recipes ",
  "Know nutrition facts ",
  "Get ranked ",
  "Get cooking tips ",

]

function Home() {
  return (


    <div className="welcome-home">

      <div className="home">
        <div className="header">
          <img src={image0} alt="" />
        </div>
        <div className="home-text">
          <h1 className="primary-heading">
            What Are We About?
          </h1>
          <p className="primary-text">FOodie is a place  where u can please ur soul  <br />
            and toumy  with delicious food recipes of all cuisine. <br />
            and our service is absolutly  free so start exploring now. <br />  </p>
          <Link to="/menu">
            <button className="btn">TRY NOW</button>
          </Link>
        </div>
        {/* <div className="home-image-section">
          <img src={picture} alt="" className="center" />
        </div> */}
        <div className="section improve-skills flex items-center justify-center min-h-screen">
          <div className="col img">
            <img src={img_10} alt="" />
          </div>
          <div className="col typography">
            <h1 className="title "  >Improve Your Culinary Skills 😉</h1>
            {list.map((item, index) => (<p className="skill-item" key={index} >{item} </p>))}

            <button className="btn">DISCOVER NOW</button>
          </div>


        </div>

      </div>
      
      <div className='categorie'>
        <h1 className='titlee'>Our Popular Categorie :</h1>
        <div className='categorie-list'>
          <span>
          <img src={image1} alt="" />
          <h2>Main Dish</h2>
          </span>

          <span>
          <img src={image2} alt="" />
          <h2>Break fast</h2>
          </span>
          <span>
          <img src={image3} alt="" />
          <h2>Dessert</h2>

          </span>
          <span>
          <img src={image4} alt="" />
          <h2>Browse All</h2> 

          </span>
         

          
          {/*  */}

          
          {/* */}

          
          {/**/}


        </div>
      </div>
    </div>







  )
}



export default Home





{/* <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        What Are We About?
                    </h1>
                    <p className="primary-text">FOodie is a place  where u can please ur soul  <br />
                    and toumy  with delicious food recipes of all cuisine. <br />
                            and our service is absolutly  free so start exploring now. <br />  </p>
                    <button className="btn">EXPLORE NOW</button>
                </div>
                <div className="home-image-section">
              <img src={pic} alt=""  className="center"/>
            </div>
            <div className="section improve-skills flex items-center justify-center min-h-screen">
      <div className="col img">
        <img src={img_10}  alt="" />
      </div>
      <div className="col typography">
        <h1 className="title "  >Improve Your Culinary Skills 😉</h1>
        { list.map((item,index)=>( <p className="skill-item" key={index} >{item} </p> ))}

        <button className="btn">DISCOVER NOW</button>
      </div>


    </div>
     */}
