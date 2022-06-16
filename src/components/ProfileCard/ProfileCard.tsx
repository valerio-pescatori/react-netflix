import { FC, useContext } from "react";
import { IProfileCard, UserContext } from "../../Interfaces";
import { useNavigate } from "react-router-dom";

import styles from "./ProfileCard.module.css";

const ProfileCard: FC<IProfileCard> = ({ name, imgFilename }) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logUser() {
    if (name) {
      setUser(name);
      navigate("/home");
    }
  }

  return (
    <div className={styles.profileCard}>
      <button onClick={logUser}>
        <img
          className={styles.profileImg}
          src={require(`../../assets/images/${imgFilename || "addProfile.png"}`)}
          alt="Profile image"
        />
      </button>
      <h4 className={styles.profileName}>{name || "Add God"}</h4>
    </div>
  );
};

export default ProfileCard;
