/*
 * Author MUHAMMED YAZEEN AN
 * Created on Fri Aug 09 2024
 */

import { useState } from "react";
import Styles from "./UserNameInput.module.css";
import { useDispatch } from "react-redux";
import { setUserName } from "../../../redux/questionnaire/questionnaireSlice";

const UserNameInput = () => {
  const [userNameLocal, setUserNameLocal] = useState("");
  const dispatch = useDispatch();

  const handleSaveName = () => {
    if (userNameLocal) {
      localStorage.setItem("userName", userNameLocal);
      dispatch(setUserName(userNameLocal));
    } else {
      localStorage.setItem("userName", "Anonymous");
      dispatch(setUserName("Anonymous"));
    }
  };

  return (
    <div className={Styles.container}>
      <h5 className={Styles.h5}>Enter Your Name</h5>
      <div className={Styles.iconContainer}>
        <input
          type="text"
          placeholder="Enter your name"
          value={userNameLocal}
          onChange={(e) => setUserNameLocal(e.target.value)}
          className={Styles.nameInput}
        />
      </div>
      <p className={Styles.description}>Enter your name for the leaderboard, or continue anonymously.</p>
      <div className={Styles.buttonsContainer}>
        <button onClick={handleSaveName} className={Styles.startButton}>
          Save
        </button>
        <button
          onClick={() => {
            setUserNameLocal("Anonymous");
            handleSaveName();
          }}
          className={Styles.startButton}
        >
          Continue as Anonymous
        </button>
      </div>
    </div>
  );
};

export default UserNameInput;
