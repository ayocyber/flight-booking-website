import React from 'react'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs';
import { RxCalendar } from "react-icons/rx";
import Aos from "aos"
import "aos/dist/aos.css"

const Info = () => {
  React.useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='info section'>
        <div className="infoContainer container">

          <div className="titleDiv flex">
            <h2 data-aos="fade-right" data-aos-duration="2500">Travel to make momories all around the world</h2>
            <button data-aos="fade-left" data-aos-duration="2500" className='btn'>
              View All
            </button>
          </div>
            
          <div className="cardsDiv grid" >
            <div className="singleCard grid" data-aos="fade-up" data-aos-duration="2500">
              <div className="iconDiv flex">
              <RxCalendar className='icon'/>
              </div>
              <div className="cardTitle">Book & Relax</div>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>

            <div className="singleCard grid" data-aos="fade-up" data-aos-duration="2500">
              <div className="iconDiv flex colorOne ">
              <BsShieldCheck className='icon'/>
              </div>
              <div className="cardTitle">Smart CheckList</div>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>

            <div className="singleCard grid" data-aos="fade-up" data-aos-duration="2500">
              <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className='icon'/>
              </div>
              <div className="cardTitle">Save More</div>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>

          </div>
        </div>
         
    </div>
  )
}

export default Info
    