import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Counter from "../../Components/Counter/CounterPage";
import Styles from "./Questionnaire.module.css";
import { QUESTIONNAIRE_PAGE_CONFIG } from "../../config";
import QuestionBlockPage from "../../Components/QuestionBlock/QuestionBlockPage";
import UserNameInput from "./NameComponent/NameComponentPage";

const QuestionnairePage = () => {
  const { questionTimerDuration, questions } = QUESTIONNAIRE_PAGE_CONFIG;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [resetCounter, setResetCounter] = useState(0);
  const [step1Complete, setStep1Complete] = useState(false);

  const totalQuestions = questions.length;
  const isLastQuestion = questionNumber === totalQuestions - 1;
  const navigate = useNavigate();
  const { correctAnswersCount } = useSelector((state) => state?.questionnaire);

  const timerComplete = () => {
    if (isLastQuestion) return navigate("/result");
    setQuestionNumber((prev) => prev + 1);
    return { shouldRepeat: true, delay: 0.5 };
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      return navigate("/result");
    }
    setQuestionNumber((prev) => prev + 1);
    setResetCounter(true);
  };

  return (
    <>
      {!step1Complete ? (
        <UserNameInput setStep1Complete={setStep1Complete} />
      ) : (
        <>
          <h2 className={Styles.text}>
            Your Score: {correctAnswersCount}/{totalQuestions}
          </h2>
          <Counter
            duration={questionTimerDuration}
            handleComplete={timerComplete}
            resetFlag={resetCounter}
            setResetCounter={setResetCounter}
          />
          <QuestionBlockPage questions={questions} questionNumber={questionNumber} />
          <button className={Styles.nextButton} onClick={handleNextQuestion}>
            Next
            <MdNavigateNext size={18} className={Styles.nextIcon} />
          </button>
        </>
      )}
    </>
  );
};

export default QuestionnairePage;
