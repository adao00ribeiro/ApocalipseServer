import Head from 'next/head'
import Image from 'next/image'
import { CardEquipe } from '../components/CardEquipe/CardEquipe'
import { CardProject } from '../components/CardProject/CardProject'
import { Header } from '../components/Header/Header'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={styles.DivImage}>
        <img src="/Background.svg" ></img>
      </div>


      <div className={styles.containerCentralized}>
        <Header />
        <div className={styles.containerHome}>
          <h1>Jogos com ideia e design memorável</h1>
          <img src="/Logo.svg" ></img>
        </div>

        <section  >
          <div className={styles.divSection}>
            <h1 >Projetos</h1>
            <div className={styles.grid}>
              <CardProject />
              <CardProject />
              <CardProject />
            </div>
          </div>
        </section>

        <section >
          <div className={styles.divSection}>
            <h1>Sobre Nos</h1>
            <div className={styles.divsobrenos}>
              <strong>Desenvolvimento de jogos Indie para pessoa fisica ou empresas</strong>
              <strong>Nosso Objectivo é entregar o projeto na melhor qualidade possivel no menor tempo possivel</strong>
            </div>
          </div>
        </section>

        <section >
          <div className={styles.divSection}>
            <h1 >Equipe</h1>
            <div className={styles.grid}>
              <CardEquipe />
              <CardEquipe />
              <CardEquipe />
            </div>
          </div>
        </section>

        <section >
          <div className={styles.divcontato}>
            <h1 >Contato</h1>
            <form className={styles.form}>
              <div className={styles.divinput} >
                <input className={styles.input} type="text" placeholder='Email'></input>
                <input className={styles.input} type="text" placeholder='Nome'></input>
              </div>
              <div >
                <textarea className={styles.input} placeholder='Mensagem'></textarea>
              </div>
              <button className={styles.buttonEnviar} type="submit">
                Enviar
              </button>
            </form>
          </div>
        </section>


      </div>
      <footer>
        <div className={styles.divfooter}>
          <h1>2022</h1>
        </div>

      </footer>
    </>
  )
}
