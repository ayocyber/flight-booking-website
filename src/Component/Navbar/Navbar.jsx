import React from 'react'
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from "../../assets/airplane logo.png"
import { CgMenuGridO } from "react-icons/cg";


const Navbar = () => {

    const [active ,setActive] = React.useState("navBarMenu")
    const [addbg , setAddbg] = React.useState("navBarTwo")
    function showNavBar(){
    setActive("navBarMenu showNavBar")
    }

    function removeNavBar(){
        setActive("navBarMenu")
    }

    function addbgColor(){
      if(window.scrollY >= 10){
        setAddbg("navBarTwo navbar_With_Bg ")
      }else{
        setAddbg("navBarTwo ", addbgColor)
      }
    }

    window.addEventListener("scroll",addbgColor)
   

  return (
    <div className='navbar flex'>
      <div className="navBarOne flex">
        <div>
        <SiConsul className='icon' />
        </div>

        <div className='none flex'>
            <li className='flex'><BsPhoneVibrate className='icon'/> Support</li>
            <li className='flex'><AiOutlineGlobal className='icon'/> Languages</li>
        </div>

        <div className='atb flex'>
            <li>Sign in</li>
            <li>Sign Out</li>
        </div>
      </div>
      <div className={addbg}>
        <div className="logoDiv">
            <img src={logo} alt='logo' className='Logo' />
        </div>

        <div className={active}>
            <ul className="menu flex">
                <li onClick={removeNavBar}className='listItem'>Home</li>
                <li onClick={removeNavBar}className='listItem'>About</li>
                <li onClick={removeNavBar}className='listItem'>Offers</li>
                <li onClick={removeNavBar}className='listItem'>Seats</li>
                <li onClick={removeNavBar}className='listItem'>Destinations</li> 
            </ul>

            <button onClick={removeNavBar} className='btn flex btnOne'> Contact</button>
       
            
         
        </div>
        <button className='btn flex btnTwo'> Contact</button> 
           <div onClick={showNavBar} className='toggleIcon'>
            <CgMenuGridO className='icon' />
            </div>
      </div>
    </div>
  )
}

export default Navbar
