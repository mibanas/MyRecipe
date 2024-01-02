import React from 'react'
import '../../Assets/styles/home.css';


// ===================== image ===================== 
import Girlcircle from '../../Assets/img/Girlcircle.png';





function Home() {
  return (

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
        <span className='principale-order-title'>
          Order Now
        </span>
      </div>
      
    </div>

    <div className="Principale-imgs">
      <img className='Principale-img' src={Girlcircle} alt="girl eat" />
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
