import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/manage/services/index">
      <img src={logo} />
    </Link>
  );
};

export default Logo;
