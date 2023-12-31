import React from 'react'
import '../../Assets/styles/allRecepies.css';

// ============= assets ============= 
import platimage from '../../Assets/img/platimage.jpeg'

const AllRecepies = () => {
  return (
    <div className='AllRecepies'>
        <div className="AllRecepies-image">
            {/* <img src={platimage} alt="" /> */}
        </div>
        <div className="AllRecepies-filres"></div>
        <div className="AllRecepies-products"></div>
    </div>
  )
}

export default AllRecepies


// import "../Assets/styles/About.css"; 
