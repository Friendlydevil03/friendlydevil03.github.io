// Add this component if you want to highlight specific technical skills
const SkillsHighlight = ({ skills }) => (
  <div className="skills-highlight">
    <h3>Technical Skills Demonstrated</h3>
    <div className="skills-grid">
      {skills.map(skill => (
        <div key={skill.name} className="skill-item">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div
              className="skill-level"
              style={{width: `${skill.level}%`}}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// For your parking project:
const parkingProjectSkills = [
  { name: "Computer Vision", level: 90 },
  { name: "Python Development", level: 85 },
  { name: "Algorithm Design", level: 80 },
  { name: "UI Development", level: 75 },
  { name: "Real-time Processing", level: 85 }
];