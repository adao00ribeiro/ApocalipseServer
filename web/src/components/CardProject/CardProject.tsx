import Link from "next/link";
import Image from 'next/image';
import styles from "./styles.module.scss";
//import { FiLogOut } from 'react-icons/fi'
export function CardProject() {
    return (

        < div className={styles.Card}>
            <div className={styles.divImage}>
                <Image src="/fundomenu.jpg" alt={""}></Image>
            </div>
            <div className={styles.CardInfo}>
                <strong>Apocalipse Z</strong>
                <span> Sobreviver a um Apocalipse Zumbi é o objetivo base, Múltiplos jogadores, se passa no século</span>
                <div className={styles.CardButton}>
                    <button>Detalhes</button>
                </div>

            </div>
        </div >
    )
}