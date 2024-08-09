/*
 * Author MUHAMMED YAZEEN AN
 * Created on Fri Aug 09 2024
 */

import { useEffect, useState } from "react";
import { MdLeaderboard } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import Styles from "./LeaderboardPage.module.css";
import NavigationButtons from "../../Components/NavigationButton/NavigationButtonPage";

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = () => {
      const storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      storedLeaderboard.sort((a, b) => b.score - a.score);
      setLeaderboard(storedLeaderboard.slice(0, 3));
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className={Styles.leaderboardContainer}>
      <div className={Styles.iconWrapper}>
        <MdLeaderboard className={Styles.leaderboardIcon} />
      </div>
      <h1 className={Styles.header}>Leaderboard</h1>
      <p>Here are the top scores! Keep playing to climb the ranks and join the leaderboard!</p>
      {leaderboard.length === 0 ? (
        <p className={Styles.emptyMessage}>No scores available yet. Start playing to appear on the leaderboard!</p>
      ) : (
        <>
          <div className={Styles.cardList}>
            {leaderboard.map((entry, index) => (
              <div key={entry.userName + index} className={Styles.card}>
                <div className={Styles.cardRank}>{index + 1}</div>
                <div className={Styles.avatarWrapper}>
                  <RxAvatar className={Styles.avatarIcon} />
                </div>
                <div className={Styles.cardContent}>
                  <p className={Styles.userName}>{entry.userName}</p>
                  <p className={Styles.score}>{entry.score}</p>
                </div>
              </div>
            ))}
          </div>
          <NavigationButtons />
        </>
      )}
    </div>
  );
};

export default LeaderboardPage;
