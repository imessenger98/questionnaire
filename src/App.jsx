import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./Routes.jsx";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
