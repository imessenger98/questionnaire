import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  correctAnswersCount: 0,
  userName: "",
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
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setQuestions, updateUserAnswer, incrementCorrectAnswers, resetState, setUserName } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
