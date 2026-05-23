import "./Skills.css";

const TECHNICAL_SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Redux",
  "Bootstrap",
  "GitHub",
  "NPM",
  "Node Js",
  "Express Js",
  "Mongo DB",
  "My SQL",
];

const SOFT_SKILLS = [
  "Communication",
  "Team Collaboration",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
  "Attention to Detail",
  "Leadership",
];

function Skills() {
  return (
    <div className="skillshead">
      <h2 className="skillsSectionTitle">Technical Skills</h2>
      <div className="skillsTagsGrid">
        {TECHNICAL_SKILLS.map((skill) => (
          <span className="skillTag" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <h2 className="skillsSectionTitle softSkillsTitle">Soft Skills</h2>
      <div className="skillsTagsGrid">
        {SOFT_SKILLS.map((skill) => (
          <span className="skillTag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
