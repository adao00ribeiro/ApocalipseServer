import Link from 'next/link'
import styles from '../styles/erro.module.scss'
export default function notfound() {
    return (
        <div className={styles.notfound}>
            <h1>404</h1>
            <h2>Pagina nao encontrada!</h2>
            <Link href="/"> Home!</Link>
        </div>
    )
}