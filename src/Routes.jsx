import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "./Components/Loading/LoadingPage.jsx";
import LostPage from "./Components/Lost/LostPage.jsx";
import SplashScreen from "./Pages/SplashScreen/SplashScreen.jsx";
// Lazy load components
const QuestionnairePage = lazy(() => import("./Pages/Questionnaire/QuestionnairePage.jsx"));
const LeaderBoardPage = lazy(() => import("./Pages/LeaderBoard/LeaderBoardPage.jsx"));
const ResultPage = lazy(() => import("./Pages/Result/ResultPage.jsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/questionnaire" element={<QuestionnairePage />} />
        <Route path="/leader-board" element={<LeaderBoardPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<LostPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
