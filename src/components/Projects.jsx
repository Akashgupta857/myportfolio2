import "./Projects.css";

function Projects() {
  return (
    <div className="headProject">
      <div className="headChild">
        <div className="projectImage">
          <img
            src="./icons/promanage.png"
            className="ProjectLogoImage"
            alt="netflixclone"
          />
        </div>
        <div className="projectContent">
          <h3 className="projectTitle">ProManagement</h3>
          <br />
          <spa  n className="projectDetail">
          Developed a full-featured task management application using MERN stack (MongoDB, Express.js, React.js, Node.js).
          Implemented user authentication, task prioritization, and checklist functionalities to enhance task organization and tracking.
          Enabled seamless drag-and-drop movement of tasks across stages with dynamic state updates.          </spa>
          <br />
          <a
            target="_blank"
            href="https://promanage-frontend-beta.vercel.app/"
          >
            <button className="projectButton">See This Live</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/akdon1198/promanage_frontend"
          >
            <button className="projectButton">Source Code</button>
          </a>
          <br />
          <div className="technologiesDiv">
            <span className="Technologies">React</span>
            <span className="Technologies">CSS</span>
            <span className="Technologies">ContextAPI</span>
            <span className="Technologies clearClass">LocalStorage</span>
          </div>
        </div>
      </div>
      <div className="headChild">
        <div className="projectImage">
          <img
            src="./icons/datadasher.png"
            className="ProjectLogoImage"
            alt="E COMMERCE"
          />
        </div>
        <div className="projectContent">
          <h3 className="projectTitle">Data Dashers_022</h3>
          <br />
          <span className="projectDetail">
          Collaborated with a team of 5 to develop a whiteboard application, enhancing real-time collaboration through drawing tools and sticky notes.
          Utilized Firebase for real-time data storage and user authentication, ensuring secure and efficient data management.
          Implemented responsive front-end components using HTML, CSS, and JavaScript to ensure cross-device compatibility.
          </span>
          <br />
          <a
            target="_blank"
            href="https://thinkspacewhiteboard.netlify.app/signup"
          >
            <button className="projectButton">See This Live</button>
          </a>
          <a target="_blank" href="https://github.com/amanbind36/Data_Dasher">
            <button className="projectButton">Source Code</button>
          </a>
          <br />
          <div className="technologiesDiv">
            <span className="Technologies">React</span>
            <span className="Technologies">Reduxtoolkit</span>
            <span className="Technologies">CSS</span>
            <span className="Technologies">Express</span>
            <span className="Technologies">MongoDB</span>
          </div>
        </div>
      </div>
      <div className="headChild">
        <div className="projectImage">
          <img
            src="./icons/libertycoders.png"
            className="ProjectLogoImage"
            alt="textgenerator"
          />
        </div>
        <div className="projectContent">
          <h3 className="projectTitle">Liberty coders</h3>
          <br />
          <span className="projectDetail">
          Collaborated with a team to create a template-based web application for easier code integration.
          Implemented responsive and user-friendly interfaces using HTML5, CSS3, and JavaScript.
          Developed documentation and blog features to guide users in utilizing the application effectively.
          </span>
          <br />
          <a target="_blank" href="https://liberty-coders-001.vercel.app/">
            <button className="projectButton">See This Live</button>
          </a>
          <a target="_blank" href="https://github.com/Akashgupta857/Liberty-Coders_001">
            <button className="projectButton">Source Code</button>
          </a>
          <br />
          <div className="technologiesDiv">
            <span className="Technologies">HTML</span>
            <span className="Technologies">CSS</span>
            <span className="Technologies">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
