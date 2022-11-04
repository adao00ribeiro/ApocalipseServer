import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
//import { FiLogOut } from 'react-icons/fi'
export function Header() {
    return (
        < header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <Image src="/Logo.svg" width={100} height={60} alt={""}></Image>
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