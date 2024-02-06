import { Link } from "react-router-dom";
import "../styles/Footer.css";


function Footer() {
  return (
    <footer>
      <div className="left-content">
        <p>Les 3 Mousquetaires ©</p>
      </div>
      <div className="right-content">
        <Link to="/git">
        </Link>
        <Link to="/linkedin">
        </Link>
      </div>
    </footer>
  );
}

export default Footer;