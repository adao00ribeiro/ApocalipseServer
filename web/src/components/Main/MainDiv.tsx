import { Header } from "../Header/Header";
import styles from "./styles.module.scss";


export function MainDiv(){
    return(
        <>
        <Header />
        <div className={styles.divMain}>
          <h1>Jogos com ideia e design memorável</h1>
          <img src="/Logo.svg" ></img>
        </div>
        </>
      
    )
}