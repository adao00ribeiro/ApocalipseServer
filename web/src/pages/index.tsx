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
      </Head>

      <div className={styles.divImage}>
        <img src="/Background.svg" ></img>
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
