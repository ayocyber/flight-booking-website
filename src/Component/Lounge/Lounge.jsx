import React from 'react'
import hostess from "../../assets/hostess.jpeg"
import Aos from "aos"
import "aos/dist/aos.css"

const Lounge = () => {
  React.useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='lounge container section'>
        <div className="sectionContainer grid">
           
          <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
            <img src={hostess} alt=''/>
          </div>
           
           <div className='textDiv'>
            <h2  data-aos="fade-down" data-aos-duration="2500">Unaccompanied Minor Lounge</h2>

                <div className="grids grid">

          <div  data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
            <span className='gridTitle'>
              Help through the airport
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket
              to one of your favorite destinations. 
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
            <span className='gridTitle'>
              Prirority Boarding
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket
              to one of your favorite destinations. 
            </p>
          </div>

          <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
            <span className='gridTitle'>
              Care on the flight
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket
              to one of your favorite destinations. 
            </p>
          </div>
          
          <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
            <span className='gridTitle'>
            Chauffer-drive service
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket
              to one of your favorite destinations. 
            </p>
          </div>

               </div>
           </div>
          

        </div>
    </div>
  )
}

export default Lounge
