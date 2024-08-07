import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "./Components/Loading/LoadingPage.jsx";
import LostPage from "./Components/Lost/LostPage.jsx";
// Lazy load components
const WelcomePage = lazy(() => import("./Pages/Welcome/WelcomePage.jsx"));
const QuestionnairePage = lazy(() => import("./Pages/Questionnaire/QuestionnairePage.jsx"));
const LeaderBoardPage = lazy(() => import("./Pages/LeaderBoard/LeaderBoardPage.jsx"));
const ResultPage = lazy(() => import("./Pages/Result/ResultPage.jsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/questionnaire" element={<QuestionnairePage />} />
        <Route path="/leader-board" element={<LeaderBoardPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<LostPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
