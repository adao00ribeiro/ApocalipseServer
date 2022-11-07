import Head from 'next/head'
import Image from 'next/image'
import { CardEquipe } from '../components/CardEquipe/CardEquipe'
import { Footer } from '../components/footer/footer'
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

      <div className={styles.containerImage}>
        <div className={styles.divImage}>
          <Image src="/game-console.jpg" alt={''} fill={true} ></Image>
        </div>


        {/* THIS ONE IS A VALID COMMENT 
        <div className={styles.divOpacity}>
          <Image src="/game-console.jpg" alt={''} fill={true} ></Image>
        </div>
        */}
      </div>

      <div className={styles.divCentralized}>
        <MainDiv></MainDiv>
        <SectionProjetos></SectionProjetos>
        <SectionSobreNos></SectionSobreNos>
        <SectionEquipe></SectionEquipe>
        <SectionContato></SectionContato>
      </div>
      <Footer />
    </>
  )
}
