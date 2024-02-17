import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="/drone.png" width={150} alt="" />
      <p>coming soon</p>
    </main>
  );
}
