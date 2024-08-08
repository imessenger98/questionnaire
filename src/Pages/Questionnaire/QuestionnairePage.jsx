import { useState } from "react";
import { GiNextButton, GiConsoleController } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import Counter from "../../Components/Counter/CounterPage";
import Styles from "./Questionnaire.module.css";
import { QUESTIONNAIRE_PAGE_CONFIG } from "../../config";
import QuestionBlockPage from "../../Components/QuestionBlock/QuestionBlockPage";

const QuestionnairePage = () => {
  const { questionTimerDuration, questions } = QUESTIONNAIRE_PAGE_CONFIG;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [resetCounter, setResetCounter] = useState(0);

  const totalQuestions = questions.length;
  const lastQuestion = questionNumber === totalQuestions - 1;
  const navigate = useNavigate();

  const timerComplete = () => {
    if (lastQuestion) return navigate("/result");
    setQuestionNumber((prev) => prev + 1);
    return { shouldRepeat: true, delay: 0.5 };
  };

  const handleNextQuestion = () => {
    console.log(lastQuestion);
    if (lastQuestion) {
      return navigate("/result");
    }
    setQuestionNumber((prev) => prev + 1);
    setResetCounter(true);
  };

  return (
    <>
      <GiConsoleController className={Styles.icon} />
      <h2 className={Styles.text}>
        Question: {questionNumber + 1}/{totalQuestions}
      </h2>
      <Counter
        duration={questionTimerDuration}
        handleComplete={timerComplete}
        resetFlag={resetCounter}
        setResetCounter={setResetCounter}
      />
      <QuestionBlockPage questions={questions} questionNumber={questionNumber} />
      <button className={Styles.nextButton} onClick={handleNextQuestion}>
        Next <GiNextButton className={Styles.nextIcon} />
      </button>
    </>
  );
};

export default QuestionnairePage;
