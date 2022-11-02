import styles from "./styles.module.scss";

export function SectionSobreNos(){
    return(

        <>
          <section >
          <div className={styles.divsobrenos}>
            <h1>Sobre Nos</h1>
            <div className={styles.divinfo}>
              <strong>Desenvolvimento de jogos Indie para pessoa fisica ou empresas</strong>
              <strong>Nosso Objectivo é entregar o projeto na melhor qualidade possivel no menor tempo possivel</strong>
            </div>
          </div>
        </section>
        </>
    )
}