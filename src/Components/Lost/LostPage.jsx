import { FaHome } from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Styles from "./LostPage.module.css";

const LostPage = () => {
  const navigate = useNavigate();

  const handleHome = () => navigate("/");

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
  return (
    <div className={Styles.container}>
      <div className={Styles.iconWrapper}>
        <HiOutlineEmojiSad className={Styles.icon} />
      </div>
      <h1 className={Styles.bigH1}>Page Not Found</h1>
      <p className={Styles.message}>Oops! It looks like you wandered off the beaten path :(</p>
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

export default LostPage;
