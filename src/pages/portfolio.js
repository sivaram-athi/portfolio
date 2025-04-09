import {React, useEffect} from 'react';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaBlog,
  FaAddressBook,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaRedo,
  FaCalendar,
  FaLink,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import workOne from "../assets/img-1.jfif";
import workTwo from "../assets/img-2.jfif";
import workThree from "../assets/img-3.jfif";
import workFour from "../assets/img-4.jfif";
import workFive from "../assets/img-5.jfif";
import workSix from "../assets/img-6.jfif";
import workSeven from "../assets/img-7.png";
import workEight from "../assets/img-8.jfif";

function Portfolio() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
    <section className="portfolio">
        <h1 className="heading"> <span> my </span> work </h1>
        <div className="box-container">

          <div className="box">
            <img src={workOne} alt="firstWork"/>
            <div className="content">
              <h3> Project 01 </h3>
              <p> Movie ticket using angular. </p>
              <a href="https://sivaram-athi.github.io/Angular-movie-ticket/"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workTwo} alt="secondWork"/>
            <div className="content">
              <h3> Project 02 </h3>
              <p> Upi payment using angular. </p>
              <a href="https://sivaram-athi.github.io/Angular-Upi-payment/"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workThree} alt="thirdWork"/>
            <div className="content">
              <h3> Project 03 </h3>
              <p> shopping cart using jquery. </p>
              <a href="https://sivaram-athi.github.io/jquery-shopping-cart/"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workFour} alt="fourthWork"/>
            <div className="content">
              <h3> Project 04 </h3>
              <p> color generate using Javascript. </p>
              <a href="https://sivaram-athi.github.io/JS-color-generate/"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workFive} alt="fifthWork"/>
            <div className="content">
              <h3> Project 05 </h3>
              <p> Student list using javascript. </p>
              <a href="https://sivaram-athi.github.io/Modern-js-student-list/"> Read More </a>
            </div>
          </div>

          <div className="box">
            <img src={workSix} alt="sixthWork"/>
            <div className="content">
              <h3> Project 06 </h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <a href="https://sivaram-athi.github.io/js-TODO/"> Read More </a>
            </div>
          </div>
          <div className="box">
            <img src={workSeven} alt="sixthWork" />
            <div className="content">
              <h3> Project 07 </h3>
              <p> color game using javascript. </p>
              <a href="https://sivaram-athi.github.io/color-guessing-game-js/"> Read More </a>
            </div>
          </div>
          <div className="box">
            <img src={workSix} alt="sixthWork" />
            <div className="content">
              <h3> Project 08 </h3>
              <p> Todo list using jquery. </p>
              <a href="https://sivaram-athi.github.io/jquery-todo/"> Read More </a>
            </div>
          </div>
          <div className="box">
            <img src={workFour} alt="sixthWork" />
            <div className="content">
              <h3> Project 09 </h3>
              <p> color preview using angular. </p>
              <a href="https://sivaram-athi.github.io/Angular-color-preview/"> Read More </a>
            </div>
          </div>
          <div className="box">
            <img src={workEight} alt="sixthWork" />
            <div className="content">
              <h3> Project 10 </h3>
              <p> product list using javascript. </p>
              <a href="https://sivaram-athi.github.io/Modern-js-product-list/"> Read More </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Portfolio