/*
 * Author MUHAMMED YAZEEN AN
 * Created on Fri Aug 09 2024
 */

import { useNavigate, useLocation } from "react-router-dom";
import { FaRedo, FaHome } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { motion } from "framer-motion";
import Styles from "./NavigationButtons.module.css"; // Ensure this file is correctly imported

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.1,
    },
  },
};

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRestart = () => navigate("/questionnaire");
  const handleHome = () => navigate("/");
  const handleLeaderBoard = () => navigate("/leader-board");

  return (
    <div className={Styles.buttonContainer}>
      <motion.button
        onClick={handleRestart}
        className={Styles.button}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <FaRedo className={Styles.buttonIcon} />
        <span className={Styles.buttonText}>Restart</span>
      </motion.button>
      {location.pathname !== "/leader-board" && (
        <motion.button
          onClick={handleLeaderBoard}
          className={Styles.button}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <MdLeaderboard className={Styles.buttonIcon} />
          <span className={Styles.buttonText}>Leaderboard</span>
        </motion.button>
      )}
      <motion.button
        onClick={handleHome}
        className={Styles.button}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <FaHome className={Styles.buttonIcon} />
        <span className={Styles.buttonText}>Home</span>
      </motion.button>
    </div>
  );
};

export default NavigationButtons;
