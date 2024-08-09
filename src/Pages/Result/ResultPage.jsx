import { useSelector } from "react-redux";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import Styles from "./ResultPage.module.css";
import NavigationButtons from "../../Components/NavigationButton/NavigationButtonPage";

const ResultPage = () => {
  const { questions, correctAnswersCount } = useSelector((state) => state?.questionnaire);
  const totalQuestions = questions.length;
  const scorePercentage = Math.round((correctAnswersCount / totalQuestions) * 100) || 0;
  const totalAttempts = questions.filter((question) => "userAnswer" in question).length || 0;

  return (
    <div className={Styles.resultContainer}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className={Styles.iconWrapper}
      >
        <FaTrophy className={Styles.trophyIcon} />
      </motion.div>
      <h1>Congrats!</h1>
      <p className={Styles.score}>Aggregate: {scorePercentage}%</p>
      <p>
        You attempted {totalAttempts} questions <br />
        and {correctAnswersCount} were correct.
      </p>
      <NavigationButtons />
    </div>
  );
};

export default ResultPage;
