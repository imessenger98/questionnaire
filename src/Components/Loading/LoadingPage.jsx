import { GiSandsOfTime } from "react-icons/gi";
import Styles from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.iconWrapper}>
        <GiSandsOfTime className={Styles.icon} />
      </div>
    </div>
  );
};

export default LoadingPage;
