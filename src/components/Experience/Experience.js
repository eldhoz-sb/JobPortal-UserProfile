import { useState } from "react";
import "./Experience.css";

function Experience(props) {
  // Use an array to track expanded descriptions
  const [expandedIds, setExpandedIds] = useState([]);

  const personExperience = props.experience;

  // Toggle description expanded state
  const toggleDescription = (id) => {
    setExpandedIds(expandedIds.includes(id)
      ? expandedIds.filter(expId => expId !== id)
      : [...expandedIds, id]);
  };

  return (
    <div id="person-experience" className="flex column white">
      <h4>Experience</h4>
      {personExperience.map((exp) => (
        <div key={exp.id} className="flex box">
          <div id="box-img">
            <img src={exp.logo} alt="company-logo" className="box-logo" />
          </div>
          <div className="flex column">
            <h5>{exp.title}</h5>
            <p>{exp.company}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.location}</p>
            <div className={`description ${expandedIds.includes(exp.id) ? 'expanded' : ''}`}>
              <p>{exp.description}</p>
            </div>
            {exp.description.length > 100 && ( // Adjust character count as needed
                <span onClick={() => toggleDescription(exp.id)} style={{ cursor: 'pointer', textAlign:"end" }}>
                  {expandedIds.includes(exp.id) ? '' : '...see more'}
                </span>
              )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
