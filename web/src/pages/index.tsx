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

        <section >

          <h1 className={styles.H1center}>Projetos</h1>

          <div className={styles.grid}>
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </section>

        <section >
          <h1 className={styles.H1center}>Sobre Nos</h1>
          <div className={styles.divsobrenos}>
            <strong>Desenvolvimento de jogos Indie para pessoa fisica ou empresas</strong>
            <strong>Nosso Objectivo é entregar o projeto na melhor qualidade possivel no menor tempo possivel</strong>
          </div>
        </section>

        <section >
          <h1 className={styles.H1center}>Equipe</h1>
          <div className={styles.grid}>
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </section>

        <section >
          <h1 className={styles.H1center}>Contato</h1>
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
        </section>

        <footer>
          <div className={styles.divfooter}>
          <h1>2022</h1>
          </div>
          
        </footer>
      </div>
    </>
  )
}
