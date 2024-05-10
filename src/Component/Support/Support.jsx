import React from 'react'
import gridImg from "../../assets/girdImg.jpg"
import window from "../../assets/window.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

const Support = () => {

  React.useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='support container section'>
        <div className="sectionContainer">
          <div className="titlesDiv">
            <small>Travel Support</small>
            <h2>Plan your travel with confidence</h2>
            <p>Find help with booking and travel plans , see what to expect along
              the journey
            </p>
          </div>
           
          <div className="infoDiv grid">

            <div className="textDiv grid">

              <div data-aos="fade-down" data-aos-duration="2500" className="singleInfo">
                  <span className='numbers'>01</span>
                  <h4>Travel requirement for Dubia </h4>
                  <p>Find help with booking and travel plans , see what to expect along
                  the journey to your favourite destination !
            </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
                  <span className='numbers colorOne'>02</span>
                  <h4>Chauffeur services at your arrival </h4>
                  <p>Find help with booking and travel plans , see what to expect along
                  the journey to your favourite destination !
            </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="4500" className="singleInfo">
                  <span className='numbers colorTwo'>03</span>
                  <h4>Multi-risk travel insurance </h4>
                  <p>Find help with booking and travel plans , see what to expect along
                  the journey to your favourite destination !
            </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
              <img src={gridImg} alt=''/>
              <img src={window} alt=''/>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Support
