import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Styles from "./QuestionBlock.module.css";

const QuestionBlockPage = ({ questions, questionNumber }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const currentQuestion = questions[questionNumber];

  // Reset state when questionNumber changes
  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [questionNumber]);

  const handleOptionClick = (option) => {
    const correct = option === currentQuestion.correctAnswer;
    setSelectedOption(option);
    setIsCorrect(correct);
  };

  const getButtonClass = (option) => {
    if (option === selectedOption) {
      return isCorrect ? Styles.correct : Styles.incorrect;
    }
    if (selectedOption !== null && option === currentQuestion.correctAnswer) {
      return Styles.correct; // Highlight correct option if the user was wrong
    }
    return "";
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
};

export default QuestionBlockPage;
