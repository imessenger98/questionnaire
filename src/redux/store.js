/*
 * Author MUHAMMED YAZEEN AN
 * Created on Fri Aug 09 2024
 */

import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from "./questionnaire/questionnaireSlice";

const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});

export default store;
