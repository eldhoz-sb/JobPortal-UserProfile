import ProfilePhoto from "../../assets/wilcox.jpg";
import WorkIcon from "../../assets/icons/work.svg";
import PhoneIcon from "../../assets/icons/Phone.svg";
import EmailIcon from "../../assets/icons/Email.svg";
import LocationIcon from "../../assets/icons/location.svg"
import "./Personal.css";

function Personal(props) {
  const Person = props.user

  return (
    <section id="personal-info" className="flex column white">
      <div id="person-info-i" className="flex column align-center justify-center">
        <img src={ProfilePhoto} alt="profile-pic" className="profile-pic" />
        <div id="person-details" className="flex align-center justify-center column">
        <p className="person-name">{Person.name}</p>
        <p className="role">{Person.role}</p>
        </div>
        <button>
          <img src={WorkIcon} alt="work-icon" />
          {Person.availableForWork ? "Available for work" : "Not Available"}
        </button>
      </div>
      <div className="flex column">
        <span className="contact-group"><img src={LocationIcon} alt="location-icon" />{Person.location}</span>
        <span className="contact-group"><img src={PhoneIcon} alt="location-icon" />{Person.phone}</span>
        <span className="contact-group"><img src={EmailIcon} alt="location-icon" />{Person.email}</span>
      </div>
      <div className="flex column">
        <h4>Personal Bio</h4>
        <p>{Person.bio}</p>
      </div>
      <div className="flex column">
        <h4>Skills</h4>
        <div className="flex wrap" style={{ gap: 5 }}>
          {Person.skills.map((skill) => (
            <button key={skill}>{skill}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Personal;
