import { Link } from "react-router-dom";

function NoAnswer(props) {
  return (
    <div>
      <button>
        <Link to={`/${props.NoAnextQ}`}>no</Link>
      </button>
      <h2>{props.btnN}</h2>
    </div>
  );
}
export default NoAnswer;
