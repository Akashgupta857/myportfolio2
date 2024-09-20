import "./Home.css";
import { useParams } from "react-router-dom";

function Home() {
  // console.log(useParams());
  return (
    <div className="homeDetail">
      <div className="detail">
        <div className="box">
          <span className="hello">Hello !</span>
          <br />
          <span className="name">I'm Akash Gupta</span>
          <br />
          <span className="iam">
            I'm a <span className="fullStact">full stack </span>devloper
          </span>
          <br />
          <br />
          <span className="description">
            MERN stack developer with good logic-building and problem-solving
            skills. Thriving to utilize my skills for creating and managing
            sites for a company.
          </span>
        </div>
        <div className="box">
          <div className="icons">
            <a href="https://github.com/akdon1198" target="_blank">
              <img
                className="icon"
                src="https://icones.pro/wp-content/uploads/2021/06/icone-github-verte.png"
                alt="gitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-gupta-81781a27a/"
              target="_blank"
            >
              <img
                className="icon"
                src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-vert.png"
                alt="linkedIn"
              />
            </a>
          </div>
          <br />
          <a href="./icons/akashguptaresume.pdf" target="_blank">
            <button className="resume">Resume</button>
          </a>
        </div>
      </div>
      <div className="image">
        <img className="profile" src="./icons/profilepic.jpg" alt="profile pic" />
      </div>
    </div>
  );
}

export default Home;
