import "./About.css";

function About() {
  return (
    <div className="aboutSection">
      <h2 className="aboutTitle">About Me</h2>
      <p className="aboutIntro">
        I am a MERN stack developer with strong logic-building and problem-solving
        skills. I enjoy building full-stack web applications and collaborating with
        teams to deliver clean, user-focused products.
      </p>

      <section className="aboutBlock">
        <h3 className="aboutSubtitle">Experience</h3>
        <ul className="aboutList">
          <li>
            Built full-stack applications with React, Node.js, Express, and MongoDB,
            including authentication, real-time features, and responsive UIs.
          </li>
          <li>
            Collaborated in team projects (5+ members) on whiteboard and template-based
            web apps using Firebase, Redux, and modern front-end tooling.
          </li>
          <li>
            Delivered deployed projects with live demos on Vercel and Netlify, following
            version control and agile-style workflows with Git and GitHub.
          </li>
        </ul>
      </section>

      <section className="aboutBlock">
        <h3 className="aboutSubtitle">Career Focus</h3>
        <p className="aboutText">
          I am focused on growing as a full-stack developer—shipping reliable products,
          improving system design skills, and contributing to teams that value quality
          code and clear communication.
        </p>
      </section>

      <section className="aboutBlock">
        <h3 className="aboutSubtitle">Education</h3>
        <p className="aboutText">
          Background in computer science and software development, with hands-on
          training through project-based learning and continuous upskilling in the
          JavaScript ecosystem.
        </p>
      </section>
    </div>
  );
}

export default About;
