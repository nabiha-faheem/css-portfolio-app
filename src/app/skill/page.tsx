import React from 'react';

function Skills() {
  return (
    <div className="skills-section">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skills-list">
        <div className="skill">
          <h3 className="skill-name">HTML</h3>
          <div className="skill-bar html"></div>
          <span className="skill-percentage">90%</span>
        </div>
        <div className="skill">
          <h3 className="skill-name">CSS</h3>
          <div className="skill-bar css"></div>
          <span className="skill-percentage">80%</span>
        </div>
        <div className="skill">
          <h3 className="skill-name">JavaScript</h3>
          <div className="skill-bar js"></div>
          <span className="skill-percentage">85%</span>
        </div>
        <div className="skill">
          <h3 className="skill-name">TypeScript</h3>
          <div className="skill-bar ts"></div>
          <span className="skill-percentage">95%</span>
        </div>
        <div className="skill nextjs">
          <h3 className="skill-name">Next.js</h3>
          <div className="skill-bar nextjs"></div>
          <span className="skill-percentage">89%</span>
        </div>
        <div className="skill">
          <h3 className="skill-name">Tailwind CSS</h3>
          <div className="skill-bar tailwind"></div>
          <span className="skill-percentage">75%</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
