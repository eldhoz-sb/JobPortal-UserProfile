import { useState } from "react";
import "./Education.css";

function Education(props) {
  // Use an array to track expanded descriptions
  const [expandedIds, setExpandedIds] = useState([]);

  const personEducation = props.education;

  // Toggle description expanded state
  const toggleDescription = (id) => {
    setExpandedIds(expandedIds.includes(id)
      ? expandedIds.filter(expId => expId !== id)
      : [...expandedIds, id]);
  };

  console.log(personEducation[0].coursework.length)

  return (
    <div id="person-education" className=" flex column white">
      <h4>Education</h4>
      {personEducation.map((education) => (
        <div key={education.id} className="flex box">
          <div id="box-img">
            <img src={education.logo} alt="copmany-logo" className="box-logo" />
          </div>
          <div id="edu-details" className="flex column">
            <h5>{education.institution}</h5>
            <p>{education.degree}</p>
            <p>
              {education.startDate} - {education.endDate}
            </p>
            <div className={`coursework ${expandedIds.includes(education.id) ? 'expanded' : ''}`}>
              <p>{education.coursework}</p>
            </div>
            {education.coursework.length > 100 && ( // Adjust character count as needed
                <span onClick={() => toggleDescription(education.id)} style={{ cursor: 'pointer', textAlign:"end" }}>
                  {expandedIds.includes(education.id) ? '' : '...see more'}
                </span>
              )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
