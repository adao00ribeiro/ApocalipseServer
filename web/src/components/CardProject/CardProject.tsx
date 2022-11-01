import Link from "next/link";
import styles from "./styles.module.scss";
//import { FiLogOut } from 'react-icons/fi'
export function CardProject() {
    return (

        < div className={styles.Card}>

            <img src="https://static-cdn.jtvnw.net/ttv-boxart/65632_IGDB-144x192.jpg"></img>

            <div className={styles.Card_Div}>
                <strong>Nome Jogo</strong>
                <span> Descricao do jogo toper apocalipse asdasdaasda sdas dad asd as</span>
                <button>Detalhes</button>
            </div>
        </div >
    )
}