import Personal from "./Personal/Personal";
import Details from "./Details/Details"
import userData from '../data/userData.json'

function Main() {
  return (
    <main>
      <Personal user={userData} />
      <Details user={userData}/>
    </main>
  );
}

export default Main;
