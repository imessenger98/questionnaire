import { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { updateUserAnswer, incrementCorrectAnswers, resetState } from "../../redux/questionnaire/questionnaireSlice";
import Styles from "./QuestionBlock.module.css";

const QuestionBlockPage = ({ questions, questionNumber }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useDispatch();

  const currentQuestion = useMemo(() => questions[questionNumber], [questions, questionNumber]);

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [questionNumber]);

  const handleOptionClick = useCallback(
    (option) => {
      const correct = option === currentQuestion.correctAnswer;
      setSelectedOption(option);
      setIsCorrect(correct);

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
    },
    [currentQuestion, dispatch, questionNumber]
  );

  const getButtonClass = useCallback(
    (option) => {
      if (selectedOption === null) return "";
      if (option === currentQuestion.correctAnswer || (option === selectedOption && isCorrect)) {
        return Styles.correct;
      }
      return option === selectedOption ? Styles.incorrect : "";
    },
    [selectedOption, isCorrect, currentQuestion.correctAnswer]
  );

  return (
    <>
      <h2 className={Styles.question}>
        {questionNumber + 1}. {currentQuestion?.question}
      </h2>
      <div className={Styles.optionsContainer}>
        {currentQuestion?.options.map((option, index) => (
          <motion.button
            key={`${option}-${index}`}
            className={`${Styles.optionButton} ${getButtonClass(option)}`}
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {option}
          </motion.button>
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
