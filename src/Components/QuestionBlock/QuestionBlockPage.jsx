import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateUserAnswer, incrementCorrectAnswers, resetState } from "../../redux/questionnaire/questionnaireSlice";
import Styles from "./QuestionBlock.module.css";

const QuestionBlockPage = ({ questions, questionNumber, isTimeOut = false }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useDispatch();
  const currentQuestion = questions[questionNumber];

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  // Reset state when questionNumber changes
  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [questionNumber]);

  const handleOptionClick = (option) => {
    const correct = option === currentQuestion.correctAnswer;
    setSelectedOption(option);
    setIsCorrect(correct);
    // Update the question with the user's selected answer
    dispatch(
      updateUserAnswer({
        questionIndex: questionNumber,
        updatedQuestion: {
          ...currentQuestion,
          userAnswer: option,
        },
      })
    );
    if (correct) {
      dispatch(incrementCorrectAnswers());
    }
  };

  const getButtonClass = (option) => {
    if (option === selectedOption) {
      return isCorrect ? Styles.correct : Styles.incorrect;
    }
    if (selectedOption !== null && option === currentQuestion.correctAnswer) {
      return Styles.correct; // Highlight correct option if the user was wrong
    }
    if (isTimeOut && option === currentQuestion.correctAnswer) return Styles.correct; // Highlight correct option
  };

  return (
    <>
      <h2 className={Styles.question}>
        {questionNumber + 1}. {currentQuestion?.question}
      </h2>
      <div className={Styles.optionsContainer}>
        {currentQuestion?.options.map((option, index) => (
          <button
            key={`${option}-${index}`}
            className={`${Styles.optionButton} ${getButtonClass(option)}`}
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

QuestionBlockPage.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctAnswer: PropTypes.string.isRequired,
    })
  ).isRequired,
  questionNumber: PropTypes.number.isRequired,
  isTimeOut: PropTypes.bool,
};

export default QuestionBlockPage;
