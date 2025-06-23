import React from 'react';
import '../styles/SkillCircle.css';

const SkillsCircle = ({ label, percentage }) => {
  return (
    <div className="skill-circle">
      <div className="outer">
        <div className="inner">
          <span className="label">{label}</span>
        </div>
        <div
          className="circle-progress"
          style={{
            background: `conic-gradient(cyan ${percentage}%, #111 ${percentage}%)`
          }}
        ></div>
      </div>
      <div className="percentage">{percentage}%</div>
    </div>
  );
};

export default SkillsCircle;
