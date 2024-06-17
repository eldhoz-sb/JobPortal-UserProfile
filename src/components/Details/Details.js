import Certifications from "../Certifications/Certifications";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import "./Details.css";

function Details(props) {
  const { experience, education, certifications } = props.user;
  console.log(experience)
  return (
    <section id="personal-details" className=" flex column">
      <Experience experience={experience} />
      <Education education={education} />
      <Certifications certifications={certifications} />
    </section>
  );
}

export default Details;
