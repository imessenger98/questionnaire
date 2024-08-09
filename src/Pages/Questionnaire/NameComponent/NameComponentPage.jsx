/*
 * Author MUHAMMED YAZEEN AN
 * Created on Fri Aug 09 2024
 */
import { useState } from "react";
import PropTypes from "prop-types";
import Styles from "./UserNameInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../../../redux/questionnaire/questionnaireSlice";

const UserNameInput = ({ setStep1Complete }) => {
  const [userNameLocal, setUserNameLocal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state?.questionnaire);

  const handleSaveName = () => {
    if (userNameLocal?.trim()) {
      dispatch(setUserName(userNameLocal));
      setStep1Complete(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid name.");
      setTimeout(() => setErrorMessage(""), 2000);
    }
  };

  const handleOldUser = () => {
    setStep1Complete(true);
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
      {errorMessage && <p className={Styles.errorMessage}>{errorMessage}</p>}
      <p className={Styles.description}>Enter your name for the leaderboard</p>
      <div className={Styles.buttonsContainer}>
        <button onClick={handleSaveName} className={Styles.startButton}>
          Save
        </button>
        {userName && (
          <button
            onClick={handleOldUser}
            className={Styles.startButton}
          >
            {`Continue as ${userName}`}
          </button>
        )}
      </div>
    </div>
  );
};

UserNameInput.propTypes = {
  setStep1Complete: PropTypes.func.isRequired,
};

export default UserNameInput;
