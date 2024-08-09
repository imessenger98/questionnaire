import { useSelector } from "react-redux";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

import Styles from "./ResultPage.module.css";
import NavigationButtons from "../../Components/NavigationButton/NavigationButtonPage";

const ResultPage = () => {
  const { questions, correctAnswersCount, userName } = useSelector((state) => state.questionnaire);
  const totalQuestions = questions.length;
  const scorePercentage = Math.round((correctAnswersCount / totalQuestions) * 100) || 0;
  const totalAttempts = questions.reduce((count, question) => count + ("userAnswer" in question ? 1 : 0), 0);

  const resultMessage = (() => {
    if (scorePercentage >= 90) return "Congrats! You did an amazing job!";
    if (scorePercentage >= 75) return "Great work! Keep it up!";
    if (scorePercentage >= 50) return "Good effort! You're getting there!";
    return "Don't worry, keep practicing!";
  })();

  if (userName && correctAnswersCount > 0) {
    const leaderboardEntry = { userName, score: scorePercentage };

    const storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const existingUserIndex = storedLeaderboard.findIndex((entry) => entry.userName === userName);

    if (existingUserIndex !== -1) {
      storedLeaderboard[existingUserIndex].score = scorePercentage;
    } else {
      storedLeaderboard.push(leaderboardEntry);
    }

    // Save the updated leaderboard back to local storage
    localStorage.setItem("leaderboard", JSON.stringify(storedLeaderboard));
  }

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
      <h1>{resultMessage}</h1>
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
