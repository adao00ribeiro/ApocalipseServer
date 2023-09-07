import React, { useState } from "react";
import ReactPlayer from "react-player/file";
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/Header/Header'
import styles from '../../styles/apocalipse.module.scss'
import Link from "next/link";



export default function Apocalipsez() {
    const [isPlaying, setIsPlaying] = useState(true);
    return (
        <>
            <Head>
                <title>Apocalipse Z</title>
            </Head>
            <Header />
            <div className={styles.divCentralized}>
                <div>
                    <video key={"/videos/Trailer.mp4"} autoPlay muted loop className={styles.reactplayer}>
                        <source src="/videos/Trailer.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.divMain}>
                    <div className={styles.divImageLogoapocalipse}>
                        <Image src={"/SpriteLogoApocalipse.png"} fill alt={""} />
                    </div>

                    <div className={styles.divDownload}>
                        <Link href={"https://drive.google.com/u/0/uc?id=1p7IxGKVFZnBJxwTrcKAmNxYrhzr_2rA-&export=download&confirm=t&uuid=d14d35e1-b83c-43c6-b89b-3734c0ddbc49&at=AB6BwCDnpUZgZ_yqLkTLXgymetwJ:1694121930505"} target="_blank" download>  <span>Download</span></Link>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
