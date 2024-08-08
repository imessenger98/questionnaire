/*
 * Author MUHAMMED YAZEEN AN
 * Created on Thu Aug 08 2024
 */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GiConsoleController } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";

import Styles from "./SplashScreen.module.css";

const splashVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/questionnaire");
  };

  return (
    <>
      <motion.div
        style={{ margin: 0 }}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={splashVariants}
        transition={{ duration: 2 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={Styles.iconContainer}
        >
          <GiConsoleController className={Styles.icon} />
        </motion.div>
      </motion.div>
      <motion.h5
        className={Styles.h5}
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Questionnaire
      </motion.h5>
      <p className={Styles.description}>A fun and interactive quiz app to test your knowledge!</p>
      <button className={Styles.startButton} onClick={handleStartClick}>
        <FaPlay className={Styles.arrowIcon} />
        Start
      </button>
    </>
  );
};

export default SplashScreen;
