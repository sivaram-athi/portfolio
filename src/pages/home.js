import {React, useEffect} from 'react';
import {
    FaUser
  } from "react-icons/fa";
import profilePicture from "../assets/picture.jpg";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'


function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <>
    {/* home section starts */}
    <section className="home">
      <div className='fullImageBox'>
      <div className="image cursorPointer">
      {/* <img src={profilePicture} alt="profilePicture"/> */}
      
      <div className='imgContent'>
      <img src={profilePicture} alt="profilePicture"/>
          <h2> Athi sivaram<br/><span> Fullstack Developer </span> </h2>
          <Link to="/contact"> Contact me </Link>
      </div>
    </div>

      </div>
    
    <div className="content">
      <h3> Hi, I Am Athi sivaram </h3>
      <span> <Typewriter
            words={['I \'m a front-end developer' ]}
            loop={0}
            cursor
            // cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
          /> </span>
      <div className="aboutMeBtn">
      <Link to="/about" className='textNone'>
      <div className="btn"> About Me <span> <FaUser className="userBtnIcon"/> </span> </div>
      </Link>
      </div>
    </div>
  </section>
  {/* home section ends */}
  </>
  )
}

export default Home