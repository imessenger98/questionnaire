import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionNumber: 0,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      state.questionNumber += 1;
    },
    resetQuestionnaire: (state) => {
      state.questionNumber = 0;
    },
  },
});

export const { nextQuestion, resetQuestionnaire } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
