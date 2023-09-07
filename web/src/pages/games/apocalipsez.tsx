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
                        <Link href={"https://drive.usercontent.google.com/download?id=1cBbM8OXhMwGnHdLYOk4OPPXKAag45ek_&export=download&authuser=0&confirm=t&uuid=e95d389d-fd24-4221-a9d4-0e39177a4d18&at=APZUnTWoKB76hidopReDDCz5AI02:1694121590301"} target="_blank" download>  <span>Download</span></Link>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
