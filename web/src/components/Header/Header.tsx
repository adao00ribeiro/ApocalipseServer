import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
//import { FiLogOut } from 'react-icons/fi'
export function Header() {
    return (
        < header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.divImageLogo}>
                    <Link href="/">

                        <Image src="/Logo.svg" fill alt={""}></Image>


                    </Link>
                </div>
                <nav className={styles.menuNav}>
                    <Link href="/#projetos" >
                        Projetos
                    </Link>
                    <Link href="/#sobrenos">
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