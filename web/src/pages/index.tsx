import Head from 'next/head'
import Image from 'next/image'
import { CardEquipe } from '../components/CardEquipe/CardEquipe'
import { MainDiv } from '../components/Main/MainDiv'
import { SectionContato } from '../components/Section/Contato/SectionContato'
import { SectionEquipe } from '../components/Section/Equipe/SectionEquipe'
import { SectionProjetos } from '../components/Section/Projetos/SectionProjetos'
import { SectionSobreNos } from '../components/Section/SobreNos/SectionSobreNos'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Share:ital,wght@0,400;0,700;1,400;1,700&display</link>=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.containerImage}>
        <div className={styles.divImage}>
          <Image src="/game-console.jpg" alt={''} fill={true} ></Image>
        </div>

        <div className={styles.divOpacity}>
          <Image src="/game-console.jpg" alt={''} fill={true} ></Image>
        </div>
      </div>

      <div className={styles.divCentralized}>
        <MainDiv></MainDiv>
        <SectionProjetos></SectionProjetos>
        <SectionSobreNos></SectionSobreNos>
        <SectionEquipe></SectionEquipe>
        <SectionContato></SectionContato>
      </div>
      <footer>
        <div className={styles.divfooter}>
          <h1>2022</h1>
        </div>
      </footer>
    </>
  )
}
