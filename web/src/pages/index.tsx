import Head from 'next/head'
import Image from 'next/image'
import { CardProject } from '../components/CardProject/CardProject'
import { Header } from '../components/Header/Header'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>


      <img className={styles.backgroundImage} src="/Background.svg" ></img>

      <div className={styles.containerCentralized}>
        <Header />
        <div className={styles.containerHome}>
          <h1>Jogos com ideia e design memorável</h1>
          <img src="/Logo.svg" ></img>
        </div>

        <section className={styles.sectionProjetos}>

          <h1>Projetos</h1>
          <div className={styles.grid}>
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </section>
        <section >
          <h1 className={styles.h1SobreNos}>Sobre Nos</h1>
          <div className={styles.divsobrenos}>
            <strong>Desenvolvimento de jogos Indie para pessoa fisica ou empresas</strong>
            <strong>Nosso Objectivo é entregar o projeto na melhor qualidade possivel no menor tempo possivel</strong>
          </div>
        </section>
      </div>



    </>
  )
}
