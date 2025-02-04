import React from 'react'

import takeoff from "../../assets/takeoff.png"
import video from "../../assets/video.mp4"

import Aos from "aos"
import "aos/dist/aos.css"


const Home = () => {

  React.useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">Create Ever lasting Memories With us</h1>
      </div>
      <div className="homeImages flex" data-aos="fade-up" data-aos-duration="2500">
            <div className="videoDiv">
                <video src={video} autoPlay muted loop className='video'></video>
            </div>

            <img src={takeoff} className='plane'/>
      </div>
    </div>
  ) 
}

export default Home
 