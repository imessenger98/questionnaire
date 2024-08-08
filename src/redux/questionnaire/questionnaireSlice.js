import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  correctAnswersCount: 0,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    updateUserAnswer: (state, action) => {
      const { questionIndex, updatedQuestion } = action.payload;
      state.questions[questionIndex] = updatedQuestion;
    },
    incrementCorrectAnswers: (state) => {
      state.correctAnswersCount += 1;
    },
    resetState: (state) => {
      state.questions = initialState.questions;
      state.correctAnswersCount = initialState.correctAnswersCount;
    },
  },
});

export const { setQuestions, updateUserAnswer, incrementCorrectAnswers, resetState } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
