import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";
const Profile = () => {
  return (
    <button className="ms-4 profile-btn">
      <FontAwesomeIcon className="profile-icon" icon={faUser} />
    </button>
  );
};

export default Profile;
