import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={"/drone.png"} width={150} height={150} alt=""></Image>
      <p>coming soon</p>
    </main>
  );
}
