import React from 'react'
import user1 from "../../assets/User1.jpg"
import user2 from "../../assets/User2.jpg"
import user3 from "../../assets/User3.jpg"
import user4 from "../../assets/User4.jpg"
import paris from "../../assets/paris.jpg"
import Uk from "../../assets/Uk.jpg"
import Newyork from "../../assets/Newyork.jpg"
import Dubia from "../../assets/Dubia.jpg"
import Aos from "aos"
import "aos/dist/aos.css"


const travelers = [
  {
    id:1, 
    destinationImage: paris,
    travelerImage: user1,
    travelerName :" Ayomide",
    socialLink : "@ayomide24"
  },
  {
    id:2, 
    destinationImage: Uk,
    travelerImage: user2,
    travelerName :" Wilson Linsey",
    socialLink : "@wilsonlindsey"
  },
  {
    id:3, 
    destinationImage: Newyork,
    travelerImage: user3,
    travelerName :" IsraTech",
    socialLink : "@isratech8"
  },
  {
    id:4, 
    destinationImage: Dubia,
    travelerImage: user4,
    travelerName :" Nicole Web",
    socialLink : "@nicoweb"
  }
  
]

const Travelers = () => {
  React.useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
 
  return (
    <div className='travelers container section'>
        <div className="sectionContainer">
           <h2 data-aos="fade-down" data-aos-duration="2500">
              Top travelers of this month !
           </h2>
          <div className="travelersContainer grid">

          {/* single passanger card */}
         {
          travelers.map(({id, destinationImage, travelerImage, socialLink, travelerName })=>{
            return(
              <div className="singleTraveler" key={id}>
              <img src={destinationImage} alt='paris' className='destinationImage'/>
              <div className="travelerDetails">
                <div className="travelersPicture">
                  <img src={travelerImage} alt='' className='travelerImage'/>
                </div>
                <div className="travelerName">
                  <span>{travelerName}</span>
                 <p>{ socialLink}</p>
                </div>
              </div>

            </div>
            )
          })
         }

          </div>
        </div>
    </div>
  )
}

export default Travelers
    