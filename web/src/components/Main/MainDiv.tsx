import { Header } from "../Header/Header";
import styles from "./styles.module.scss";
import Image from "next/image";

export function MainDiv() {
  return (
    <>
      <Header />

      <div className={styles.divMain}>
        <h1>Jogos com ideia e design memorável</h1>

      </div>
    </>

  )
}