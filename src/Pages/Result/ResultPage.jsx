import { useSelector } from 'react-redux';
import Styles from './ResultPage.module.css';

const ResultPage = () => {
  const { correctAnswersCount } = useSelector((state) => state?.questionnaire);

  return (
    <div className={Styles.resultContainer}>
      <h1>Quiz Results</h1>
      <p>Total Correct Answers: {correctAnswersCount}</p>
    </div>
  );
};

export default ResultPage;
