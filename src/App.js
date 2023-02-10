import React from "react";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>LeftSide</div>
      <div className={styles.content}>RightSide</div>
    </div>
  );
}

export default App;
