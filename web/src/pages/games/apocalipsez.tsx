import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/Header/Header'
import styles from '../../styles/apocalipse.module.scss'

export default function Apocalipsez() {
    return (
        <>
            <Head>
                <title>Apocalipse Z</title>
            </Head>
            <Header />

            <div className={styles.divImage}>
                <div></div>
                <Image src="/fundomenu.jpg" alt={''} fill={true} ></Image>
            </div>

            <div className={styles.divCentralized}>
                <div className={styles.divMain}>
                    <h1>Apocalipse Z</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}
