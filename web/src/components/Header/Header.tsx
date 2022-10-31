import Link from "next/link";
import styles from "./styles.module.scss";
//import { FiLogOut } from 'react-icons/fi'
export function Header() {
    return (
        < header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/Home">
                    <img src="/Logo.svg" width={190} height={60}></img>
                </Link>
                <nav className={styles.menuNav}>
                    <Link href="">
                        Projetos
                    </Link>
                    <Link href="">
                        Sobre Nos
                    </Link>
                    <Link href="">
                        Equipe
                    </Link>
                    <Link href="">
                        Contato
                    </Link>
                </nav>
            </div>
        </header >
    )
}