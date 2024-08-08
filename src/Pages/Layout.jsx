/*
 * Author MUHAMMED YAZEEN AN
 * Created on Thu Aug 08 2024
 */
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "../Routes.jsx";
import AnimationPage from "../Components/BackgroundAnimation/AnimationPage.jsx";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.background}>
      <AnimationPage />
      <div className={styles.centeredContent}>
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </div>
  );
};

export default Layout;
