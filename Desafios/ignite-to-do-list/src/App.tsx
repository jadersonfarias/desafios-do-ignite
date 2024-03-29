//import { useState } from 'react'
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";



function App() {
  return (
    <div className={styles.content}>
      <Header />
      <main className={styles.wrapper}>
       <Tasks/>
      </main>
    </div>
  );
}

export default App;
