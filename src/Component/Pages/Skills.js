import React from "react";

const SkillsPage = () => {
  const skills = [
    { id: 1, name: "JavaScript", level: "Intermediate" },
    { id: 2, name: "React.js", level: "Advanced" },
    { id: 3, name: "HTML", level: "Intermediate" },
    { id: 4, name: "CSS", level: "Intermediate" },
    { id: 5, name: "Node.js", level: "Intermediate" },
    { id: 6, name: "Python", level: "Beginner" },
  ];

  return (
    <div>
      <h1 className="text-center">Skills</h1>
      <div className="container">
        <div className="row">
          {skills.map((skill) => (
            <div key={skill.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{skill.name}</h5>
                  <p className="card-text">Level: {skill.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
