import "./Skills.css";

function Skills() {
  return (
    <div className="skillshead">
      {/* <h2 className="title">Front-End</h2> */}
      <div className="skiilsForFrontEnd">
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://img.icons8.com/color/480/000000/html-5--v1.png"
            alt="gitHub"
          />
          <p className="skillName">HTML5</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://img.icons8.com/color/480/000000/css3.png"
            alt="gitHub"
          />
          <p className="skillName">CSS3</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://img.icons8.com/color/480/000000/javascript.png"
            alt="gitHub"
          />
          <p className="skillName">javascript</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://img.icons8.com/color/480/000000/react-native.png"
            alt="gitHub"
          />
          <p className="skillName">React</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://img.icons8.com/color/480/000000/redux.png"
            alt="gitHub"
          />
          <p className="skillName">Redux</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://i.ibb.co/zx0Tt9M/bootstrap.png"
            alt="gitHub"
          />
          <p className="skillName">Bootstrap</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://img.icons8.com/fluent/480/000000/github.png"
            alt="gitHub"
          />
          <p className="skillName">GitHub</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://img.icons8.com/color/480/000000/npm.png"
            alt="gitHub"
          />
          <p className="skillName">NPM</p>
        </div>
      </div>
      {/* BackEnd Skills */}
      {/* <h2 className="title2">Back-End</h2> */}
      <div className="skiilsForFrontEnd skiilsForBackEnd">
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://img.icons8.com/color/480/000000/nodejs.png"
            alt="gitHub"
          />
          <p className="skillName">Node Js</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://i.ibb.co/9smDM6j/pngegg.png"
            alt="gitHub"
          />
          <p className="skillName">Express Js</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://www.pngrepo.com/download/331488/mongodb.png"
            alt="gitHub"
          />
          <p className="skillName">Mongo DB</p>
        </div>
        <div className="fullDetail">
          <img
            className="skillimag"
            src="https://img.icons8.com/fluent/480/000000/mysql-logo.png"
            alt="gitHub"
          />
          <p className="skillName">My SQL</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
