import "./Certifications.css";

function Certifications(props) {
  const personCertifications = props.certifications;
  console.log(personCertifications);

  return (
    <div id="person-certifications" className=" flex column white">
      <h4>Certifications</h4>
      {personCertifications.map((certifications) => (
        <div key={certifications.id} className="flex box">
          <div id="box-img">
            <img src={certifications.logo} alt="copmany-logo" className="box-logo" />
          </div>
          <div id="crt-details" className="flex column">
            <h5>{certifications.title}</h5>
            <p>{certifications.issuer}</p>
            <p>
              {certifications.dateAchieved}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certifications;
