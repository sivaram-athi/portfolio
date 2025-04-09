import {React, useEffect} from 'react';
import {
  FaDownload,
  FaGraduationCap,
  FaLaptopCode
} from "react-icons/fa";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import javascriptIcon from "../assets/javascript.png";
import bootstrapIcon from "../assets/bootstrap.png";
import angularIcon from "../assets/angular.png";
import phpIcon from "../assets/php.png";
import laravelIcon from "../assets/laravel.png";
<<<<<<< HEAD
import reactIcon from "../assets/react.png";
=======
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454
// import resume from "../assets/resume.pdf"; 

function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <>
    <section className="about">
    <h1 className="heading">
      {" "}
      about <span> me </span>{" "}
    </h1>
    <div className="row">
      <div className="info-container">
        <h1> personal info </h1>
        <div className="box-container">
          <div className="box">
            <h3> <span> Name : </span>  Athi sivaram </h3>
<<<<<<< HEAD
            <h3> <span> Age : </span> 24 </h3>
=======
            <h3> <span> Age : </span> 22 </h3>
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454
            <h3> <span> Email : </span> sivaramathi2001@gmail.com </h3>
            <h3>
              {" "}
              <span> Address : </span>
               madhavaram milk colony, Chennai - 600051{" "}
            </h3>
          </div>
          <div className="box">
            <h3> <span> Skill : </span> Fullstack Developer </h3>
<<<<<<< HEAD
            <h3> <span> Experience : </span> 1.4 Years </h3>
=======
            <h3> <span> Experience : </span> Fresher </h3>
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454
            <h3> <span> Language : </span> Tamil, English </h3>
          </div>
        </div>
        {/* <div className="aboutMeBtn">
          <a href={resume} download="saravananResume" target='_blank'  className="btnAbout" >
            {" "}
            Download CV{" "}
            <span>
              {" "}
              <FaDownload className="downloadBtnIcon" />{" "}
            </span>{" "}
          </a>
        </div> */}
      </div>
      <div className="count-container">
        <div className="box">
<<<<<<< HEAD
          <h3> 1.4 </h3>
=======
          <h3> 0 </h3>
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454
          <p> Year Of Experience </p>
        </div>

        <div className="box">
          <h3> 6 </h3>
          <p> Months Of Internship </p>
        </div>       
      </div>
    </div>
  </section>

  <section className="skills">
        <h1 className="heading"> <span> My </span> Skills </h1>
        <div className="box-container">
          <div className="box">
            <img src={htmlIcon} alt="htmlIcon"/>
            <h3> html </h3>
          </div>
          <div className="box">
            <img src={cssIcon} alt="cssIcon"/>
            <h3> css </h3>
          </div>
          <div className="box">
            <img src={javascriptIcon} alt="javascriptIcon"/>
            <h3> javascript </h3>
          </div>
          <div className="box">
            <img src={bootstrapIcon} alt="bootstrapIcon"/>
            <h3> bootstrap </h3>
          </div>
<<<<<<< HEAD
          <div className="box">
            <img src={reactIcon} alt="reactIcon"/>
            <h3> React </h3>
          </div>
=======
          {/* <div className="box">
            <img src={reactIcon} alt="reactIcon"/>
            <h3> React </h3>
          </div> */}
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454
          {/* <div className="box">
            <img src={sassIcon} alt="htmlIcon"/>
            <h3> sass </h3>
          </div> */}
<<<<<<< HEAD
          {/* <div className="box">
            <img src={angularIcon} alt="htmlIcon" />
            <h3> Angular js </h3>
          </div> */}
=======
          <div className="box">
            <img src={angularIcon} alt="htmlIcon" />
            <h3> Angular js </h3>
          </div>
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454
          <div className="box">
            <img src={phpIcon} alt="htmlIcon" />
            <h3> php </h3>
          </div>
          <div className="box">
            <img src={laravelIcon} alt="htmlIcon" />
<<<<<<< HEAD
            <h3> Codeigniter 4 </h3>
=======
            <h3> Laravel </h3>
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454
          </div>

        </div>
      </section>

      <section className="education">
        <h1 className="heading"><span> my </span> education </h1>
        <div className="box-container"> 
<<<<<<< HEAD
          {/* <div className="box">
=======
          <div className="box">
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454
            <i> <FaGraduationCap/> </i>
            <span> Mar 2017 - Apr 2018 </span>
            <h3> Higher Secondary 12TH </h3>
            <p> I scored 89% on the higher secondary board exam. And I am very much interested in electronics and computers, so I have 
              taken the b.e computer science degree at College. </p>
<<<<<<< HEAD
          </div> */}
=======
          </div>
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454

          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> Mar 2018 - Apr 2022 </span>
            <h3> B.E Computer Science </h3>
            <p> I completed my B.Sc computer science degree with 7.6 CGPA in Rajalakshmi engineering college, Thandalam, Chennai, 
              Tamil Nadu, India.</p>
          </div>

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span> jun 2023 - Nov 2023 </span>
            <h3> Fullstack Developer (Trainee) </h3>
            <p> I designed some front-end templates. And I worked with CSS and Bootstrap for designing UI. I have done some API integration in small projects </p>
          </div>
<<<<<<< HEAD

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span> Feb 2024 - Present </span>
            <h3> Fullstack Developer </h3>
            <p> I Developed some Full Stack projects.I have done some API integration in projects. I have done some Payment integration in projects</p>
          </div>
=======
>>>>>>> 6a249b4a71571c55076250441b6bbb960d9b9454
        </div>

      </section>
  </>
  )
}

export default About