import Link from "next/link";
import styles from "./styles.module.scss";
//import { FiLogOut } from 'react-icons/fi'
export function Header() {
    return (
        < header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/Logo.svg" width={190} height={60}></img>
                </Link>
                <nav className={styles.menuNav}>
                    <Link href="/#projetos" scroll={false}>
                        Projetos
                    </Link>
                    <Link href="/#sobrenos" scroll={false}>
                        Sobre Nos
                    </Link>
                    <Link href="/#equipe">
                        Equipe
                    </Link>
                    <Link href="/#contato">
                        Contato
                    </Link>
                </nav>
            </div>
        </header >
    )
}