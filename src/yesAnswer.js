import { Link } from "react-router-dom";
import "./btnCss.css";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";

function YesAnswer(props) {
  return (
    <div>
      <FaRegFaceKissWinkHeart />
      <Link className="btn" to={`/${props.nextQ}`}>
        yes
      </Link>
      <h2>{props.btnY}</h2>
    </div>
  );
}
export default YesAnswer;
