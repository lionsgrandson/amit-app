import { Link } from "react-router-dom";
import "./btnCss.css";
import { TfiFaceSad } from "react-icons/tfi";
function NoAnswer(props) {
  return (
    <div>
      <TfiFaceSad />
      <Link className="btn" to={`/${props.NoAnextQ}`}>
        no
      </Link>
      <h2>{props.btnN}</h2>
    </div>
  );
}
export default NoAnswer;
