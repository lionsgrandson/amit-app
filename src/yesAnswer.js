import { Link } from "react-router-dom";
function YesAnswer(props) {
  return (
    <div>
      <button>
        <Link to={`/${props.nextQ}`}>yes</Link>
      </button>
      <h2>{props.btnY}</h2>
    </div>
  );
}
export default YesAnswer;
