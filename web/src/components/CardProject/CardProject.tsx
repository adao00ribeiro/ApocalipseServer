import Link from "next/link";
import styles from "./styles.module.scss";
//import { FiLogOut } from 'react-icons/fi'
export function CardProject() {
    return (

        < div className={styles.Card}>
            <div className={styles.divImage}>
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/65632_IGDB-144x192.jpg"></img>
            </div>
           

            <div className={styles.CardInfo}>
                <strong>Nome Jogo</strong>
                <span> Descricao do jogo toper apocalipse asdasdaasda sdas dad asd as</span>
                <div className={styles.CardButton}>
                <button>Detalhes</button>
                </div>
                
            </div>
        </div >
    )
}